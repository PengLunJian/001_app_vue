import {mapActions, mapState} from 'vuex';
import * as $routes from '../../router';

export const states = {
  ...mapState({
    isLoading: state => state.DETAIL.isLoading,
    isSuccess: state => state.DETAIL.isSuccess,
    isFailure: state => state.DETAIL.isFailure,
    isData: state => state.DETAIL.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectDetail'
  ]),
  onHandleRefund() {
    this.navigateTo($routes.REFUND.path);
  },
  onHandlePrint() {
    this.navigateTo($routes.PRINT.path);
  },
  exeAjaxSelectDetail() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectDetail(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('加载失败，请重试');
        console.log(err);
      });
  },
  getParams() {
    const {orderid} = this;
    const params = {
      orderid
    };
    return params;
  }
};