import {mapActions, mapState} from 'vuex';
import {Base64} from 'js-base64';
import md5 from 'js-md5';
import * as $config from '../../config';

export const states = {
  ...mapState({
    isLoading: state => state.REFUND.isLoading,
    isSuccess: state => state.REFUND.isSuccess,
    isFailure: state => state.REFUND.isFailure,
    isData: state => state.REFUND.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxUpdateRefund'
  ]),
  onHandleCancel() {
    this.isHide = true;
    this.isScroll = true;
    setTimeout(() => {
      this.password = '';
      this.isDisable = true;
    }, 300);
  },
  onHandleSubmit() {
    this.exeAjaxUpdateRefund();
  },
  onHandleButton(item) {
    const {disable, value} = item;
    if (!disable && this.password.length < 6) {
      this.password += value;
    }
    this.isDisable = this.password.length < 6;
  },
  onHandleDelete() {
    const len = this.password.length - 1;
    const str = this.password.substr(0, len);
    this.password = len <= 0 ? '' : str;
    this.isDisable = this.password.length < 6;
  },
  onHandleConfirm() {
    this.isHide = false;
    this.isScroll = false;
  },
  exeAjaxUpdateRefund() {
    this.onHandleCancel();
    this.showLoading();
    const params = this.getParams();
    this.ajaxUpdateRefund(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        const msg = success ? '退款成功' : '退款失败，请重试';
        this.showToast(msg);
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  getParams() {
    const {orderId, password, remark} = this;
    const signStr = 'orderid=' + orderId +
      '&refundpass=' + password +
      '&key=' + $config.PAYKEY;
    const signBase64 = Base64.encode(signStr).toUpperCase();
    const sign = md5(signBase64).toLowerCase();
    const params = {
      orderid: orderId,
      refundpass: password,
      refundreason: remark,
      sign
    };
    return params;
  }
};