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
        const {success, data} = res;
        if (success) {
          this.reLaunch($routes.HOME.path);
        } else {
          this.showToast('用户名或密码错误');
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