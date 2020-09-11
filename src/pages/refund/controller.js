import {mapActions, mapState} from 'vuex';
import {Base64} from 'js-base64';
import md5 from 'js-md5';
import * as $config from '../../config';

export const states = {
  ...mapState({
    isLoading: state => state.REFUND.isLoading,
    isSuccess: state => state.REFUND.isSuccess,
    isFailure: state => state.REFUND.isFailure,
    isRefund: state => state.REFUND.isData,
    isDetail: state => state.DETAIL.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectIndex',
    'ajaxUpdateRefund'
  ]),
  onHandleCancel() {
    this.isHide = true;
    this.isScroll = true;
    setTimeout(() => {
      this.refundpass = '';
      this.isDisable = true;
    }, 300);
  },
  onHandleSubmit() {
    if (this.isDisable) return;
    this.onHandleCancel();
    this.exeAjaxUpdateRefund();
  },
  onHandleButton(item) {
    const {disable, value} = item;
    if (!disable && this.refundpass.length < 6) {
      this.refundpass += value;
    }
    this.isDisable = this.refundpass.length < 6;
  },
  onHandleDelete() {
    const len = this.refundpass.length - 1;
    const str = this.refundpass.substr(0, len);
    this.refundpass = len <= 0 ? '' : str;
    this.isDisable = this.refundpass.length < 6;
  },
  onHandleConfirm() {
    this.isHide = false;
    this.isScroll = false;
  },
  exeAjaxSelectIndex() {
    this.ajaxSelectIndex()
      .then((res) => {
        res = res || {};
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeAjaxUpdateRefund() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxUpdateRefund(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        if (success) {
          this.showToast('退款成功');
          this.exeAjaxSelectIndex();
          setTimeout(() => {
            this.navigateBack(1);
          }, 1000);
        } else {
          this.showToast('退款失败，请重试');
        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  getParams() {
    const {orderid} = this.isDetail;
    const {refundpass, refundreason} = this;
    const signStr = 'orderid=' + orderid +
      '&refundpass=' + refundpass +
      '&key=' + $config.PAYKEY;
    const signBase64 = Base64.encode(signStr).toUpperCase();
    const sign = md5(signBase64).toLowerCase();
    const params = {
      orderid,
      refundpass,
      refundreason,
      sign
    };
    return params;
  }
};