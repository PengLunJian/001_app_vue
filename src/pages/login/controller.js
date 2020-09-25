import {mapActions, mapState} from 'vuex';
import * as $routes from '../../router';
import * as utils from '../../utils';

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
  onHandleInitData() {
    this.setItem('isExpire', true);
    const username = this.getItem('username');
    const password = this.getItem('password');
    if (username && password) {
      this.username = username;
      this.password = password;
      this.checked = true;
    }
    utils.getDeviceId()
      .then((res) => {
        this.deviceid = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  onHandleCheckbox() {
    const {checked} = this;
    this.checked = !checked;
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
          const {token, expiretime, sitename} = data;
          const {checked, username, password} = this;
          this.setItem('token', token);
          this.setItem('siteName', sitename);
          this.setItem('expireTime', expiretime);
          this.reLaunch($routes.HOME.path);
          if (checked) {
            this.setItem('username', username);
            this.setItem('password', password);
          } else {
            this.removeItem('username');
            this.removeItem('password');
          }
        } else {
          this.showToast('账号或密码错误');
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