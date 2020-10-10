import {mapActions, mapMutations, mapState} from 'vuex';
import * as $routes from '../../router';
import * as utils from '../../utils';

export const states = {
  ...mapState({
    isLoading: state => state.BILL.isLoading,
    isSuccess: state => state.BILL.isSuccess,
    isFailure: state => state.BILL.isFailure,
    isData: state => state.BILL.isData,
    isTotal: state => state.BILL.isData.total,
    isChart: state => state.BILL.isData.chart
  }),
  getBegindate() {
    const {begindate} = this;
    const beginDate = utils.dateFormat(begindate, 'zh-cn');
    return beginDate;
  },
  getEnddate() {
    const {enddate} = this;
    const endDate = utils.dateFormat(enddate, 'zh-cn');
    return endDate;
  }
};

export const actions = {
  ...mapActions([
    'ajaxSelectBill'
  ]),
  ...mapMutations([
    'SELECT_BILL_REPLACE'
  ]),
  onHandleInitDate() {
    const dayTime = 24 * 60 * 60 * 1000;
    const systemTime = utils.dateFormat(new Date(), 'yyyy-mm-dd');
    this.begindate = systemTime + ' 00:00:00';
    const dateStr = this.begindate.replace(/-/g, '/');
    const endTime = new Date(dateStr).getTime() + dayTime;
    this.enddate = utils.dateFormat(new Date(endTime), 'yyyy-mm-dd hh:mm:ss');
  },
  onHandleTabChange(index) {
    this.tab.activeIndex = index;
    const dayTime = 24 * 60 * 60 * 1000;
    const value = this.tab.items[index].value;
    const offsetTime = value * 24 * 60 * 60 * 1000;

    const systemTime = utils.dateFormat(new Date(), 'yyyy-mm-dd');
    const dateStr = systemTime.replace(/-/g, '/');
    const endTime = new Date(dateStr).getTime() + dayTime;
    const beginTime = endTime - offsetTime;

    this.begindate = utils.dateFormat(new Date(beginTime), 'yyyy-mm-dd hh:mm:ss');
    this.enddate = utils.dateFormat(new Date(endTime), 'yyyy-mm-dd hh:mm:ss');
    this.exeAjaxSelectBill();
  },
  onHandleChangeDate() {
    this.navigateTo($routes.DATETIME.path);
  },
  exeAjaxSelectBill() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectBill(params)
      .then((res) => {
        res = res || {};
        this.hideLoading();
        const success = res[0].success && res[1].success;
        if (!success) {
          this.showToast('加载失败，请重试');
        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  onRefresh() {
    this.exeAjaxSelectBill();
  },
  getParams() {
    const {begindate, enddate} = this;
    const params = {
      begindate,
      enddate
    }
    return params;
  }
};