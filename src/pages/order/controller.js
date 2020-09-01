import {mapActions, mapState} from 'vuex';
import * as $routes from '../../router';

export const states = {
  ...mapState({
    isLoading: state => state.ORDER.isLoading,
    isSuccess: state => state.ORDER.isSuccess,
    isFailure: state => state.ORDER.isFailure,
    isData: state => state.ORDER.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectOrder'
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
  exeAjaxSelectOrder() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectOrder(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  getParams() {
    const params = {
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