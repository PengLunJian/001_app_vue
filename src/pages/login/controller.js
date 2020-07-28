import {mapActions} from 'vuex';
import * as $routes from '../../router';

const controller = {
  ...mapActions([
    'ajaxSelectLogin'
  ]),
  onHandleCheckEmpty() {
    const {username, password} = this;
    this.isDisable = !(username && password);
  },
  onHandlePassword() {
    this.navigateTo($routes.PASSWORD.path);
  },
  onHandleLogin() {
    const {isDisable} = this;
    if (!isDisable) {
      this.exeAjaxSelectLogin();
    }
  },
  exeAjaxSelectLogin() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectLogin(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {Success, ErrMsg} = res;
        if (Success !== 1) {
          this.showToast(ErrMsg);
          this.reLaunch($routes.HOME.path);
          return;
        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        console.log(err);
      });
  },
  getParams() {
    const {username, password} = this;
    return {
      username,
      password
    }
  }
}

export default controller;