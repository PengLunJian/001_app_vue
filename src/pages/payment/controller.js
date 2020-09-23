import {mapActions, mapState} from 'vuex';
import {Base64} from 'js-base64';
import md5 from 'js-md5';
import * as $config from '../../config';
import * as $routes from '../../router';

export const states = {
  ...mapState({
    isLoading: state => state.PAYMENT.isLoading,
    isSuccess: state => state.PAYMENT.isSuccess,
    isFailure: state => state.PAYMENT.isFailure,
    isPayment: state => state.PAYMENT.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectIndex',
    'ajaxInsertPayment'
  ]),
  onHandleButton(item) {
    const {price} = this;
    const {value} = item;
    const regExp1 = /\./;
    const regExp2 = /^[0]$/;
    const regExp3 = /^\d+\.\d{2}$/;
    if (regExp1.test(price)) {
      if (value === '.') {
        return;
      }
    }
    if (regExp2.test(price)) {
      if (value !== '.') {
        return;
      }
    }
    if (regExp3.test(price)) {
      return;
    }
    if (value === '.') {
      if (price === '') {
        this.price = '0';
      }
    }
    this.price += value;
    this.isDisable = !this.price;
  },
  onHandleDelete() {
    const len = this.price.length - 1;
    this.price = this.price.substr(0, len);
    this.isDisable = !this.price;
  },
  onHandleConfirm() {
    const {isDisable, price} = this;
    if (isDisable) return;
    const value = parseFloat(price);
    if (value <= 0) {
      this.showToast('输入金额错误');
      return;
    }

    // const camera = permision.judgeIosPermission('camera');
    // this.showToast(camera);
    // permision.gotoAppPermissionSetting();

    uni.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        res = res || {};
        const {result} = res;
        this.scanCode = result;
        this.exeAjaxInsertPayment();
        console.log(res);
      },
      fail: (err) => {
        err = err || {};
        console.log(err);
      }
    });
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
  exeAjaxInsertPayment() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxInsertPayment(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success, msg} = res;
        if (success) {
          this.exeAjaxSelectIndex();
          this.navigateTo($routes.SUCCESS.path);
        } else {
          const message = msg.indexOf('限额') !== -1
            ? '交易失败，已达到今日限额。' : '交易失败，请重试';
          this.showToast(message);
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
    const {price, scanCode} = this;
    const signStr = 'paymoney=' + price +
      '&scanpayno=' + scanCode +
      '&sellercouponamount=' + 0 +
      '&sellerdiscountamount=' + 0 +
      '&key=' + $config.PAYKEY;
    const signBase64 = Base64.encode(signStr).toUpperCase();
    const sign = md5(signBase64).toLowerCase();
    const params = {
      paymoney: price,
      scanpayno: scanCode,
      sellercouponamount: 0,
      sellerdiscountamount: 0,
      ordertitle: '',
      ordernote: '',
      sign
    };
    return params;
  }
};