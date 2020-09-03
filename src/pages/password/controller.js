import {mapActions, mapState} from 'vuex';
import * as $routes from '../../router';

export const states = {
  ...mapState({
    isLoading: state => state.PASSWORD.isLoading,
    isSuccess: state => state.PASSWORD.isSuccess,
    isFailure: state => state.PASSWORD.isFailure,
    isData: state => state.PASSWORD.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxUpdatePassword'
  ]),
  onHandleCheckEmpty() {
    let result = false;
    const {oldpassword, newpassword, cfmpassword} = this;
    if (!oldpassword) {
      this.showToast('请输入原密码');
    } else if (!newpassword) {
      this.showToast('请输入新密码');
    } else if (newpassword.length < 6) {
      this.showToast('新密码长度不能少于6位');
    } else if (!cfmpassword) {
      this.showToast('请再次输入新密码');
    } else if (newpassword !== cfmpassword) {
      this.showToast('新密码两次输入不正确');
    } else {
      result = true;
    }
    return result;
  },
  onHandleConfirm() {
    if (this.onHandleCheckEmpty()) {
      this.exeAjaxUpdatePassword();
    }
  },
  exeAjaxUpdatePassword() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxUpdatePassword(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        if (success) {
          this.showToast('修改成功，请重新登录');
          setTimeout(() => {
            this.reLaunch($routes.LOGIN.path);
          }, 1000);
        } else {
          this.showToast('修改失败，请重试');
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
    const {oldpassword, newpassword} = this;
    const params = {
      oldpassword,
      newpassword
    };
    return params;
  }
};