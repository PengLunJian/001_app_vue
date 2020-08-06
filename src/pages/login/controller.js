import {mapActions, mapState} from 'vuex';
import * as $routes from '../../router';

export const states = {
  ...mapState({
    isLoading: state => state.LOGIN.isLoading,
    isSuccess: state => state.LOGIN.isSuccess,
    isFailure: state => state.LOGIN.isFailure,
    isData: state => state.LOGIN.isData
  }),
};

export const actions = {
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
        const {success} = res;
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
};