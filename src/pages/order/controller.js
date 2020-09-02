import {mapActions, mapMutations, mapState} from 'vuex';
import * as actionTypes from '../../store/actionTypes';
import * as $ajax from '../../ajax';

export const states = {
  ...mapState({
    isLoading: state => state.ORDER.isLoading,
    isSuccess: state => state.ORDER.isSuccess,
    isFailure: state => state.ORDER.isFailure,
    isOrder: state => state.ORDER.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectOrder'
  ]),
  ...mapMutations([
    actionTypes.SELECT_ORDER_REPLACE
  ]),
  onHandleReset() {
  },
  onHandleConfirm() {
  },
  onHandleChange(index) {
    const {activeIndex} = this.tab;
    if (activeIndex === index) {
      this.tab.activeIndex = -1;
      this.isScroll = true;
    } else {
      this.tab.activeIndex = index;
      this.isScroll = false;
    }
  },
  onHandleFilter(index) {
    this.btnShop.activeIndex = index;
  },
  onHandleSort(index) {
    this.btnSort.activeIndex = index;
  },
  onHandleClose() {
    this.tab.activeIndex = -1;
    this.isScroll = true;
  },
  onHandleScrollToLower() {
    $ajax.abort();
    const {rows, totalcount, pageindex} = this.isOrder;
    if (rows.length < totalcount) {
      this.pageindex = pageindex + 1;
      this.exeAjaxSelectOrder();
    }
  },
  exeAjaxSelectOrder() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectOrder(params)
      .then((res) => {
        res = res || {};
        this.hideLoading();
        const {success} = res;
        if (!success) {
          if (this.isOrder.rows.length) {
            this.showToast('加载失败，请重试');
          }
        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        if (this.isOrder.rows.length) {
          this.showToast('网络异常，请重试');
        }
        console.log(err);
      });
  },
  onRefresh() {
    this.exeAjaxSelectOrder();
  },
  getParams() {
    const {pageindex, pagesize} = this;
    const params = {
      pageindex,
      pagesize,
      shopid: 0,
      siteuserid: 0,
      paystate: 0,
      paytype: 0,
      begindate: '',
      enddate: '',
      sorttype: 0,
      sort: 0
    };
    return params;
  }
};