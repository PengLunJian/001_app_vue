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
    let result = false;
    const {username, password} = this;
    if (!username) {
      this.showToast('请输入账号');
    } else if (!password) {
      this.showToast('请输入密码');
    } else {
      result = true;
    }
    return result;
  },
  onHandlePassword() {
    this.navigateTo($routes.FORGOT.path);
  },
  onHandleLogin() {
    if (this.onHandleCheckEmpty()) {
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
          const {token} = data;
          this.setItem('token', token);
          this.reLaunch($routes.HOME.path);
        } else {
          this.showToast('用户名或密码错误');
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
    const {username, password, deviceid} = this;
    return {
      username,
      password,
      deviceid
    }
  }
};