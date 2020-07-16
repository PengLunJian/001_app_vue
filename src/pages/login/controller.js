import {mapActions} from 'vuex';
import * as $routes from '../../router';

const controller = {
  ...mapActions([
    'ajaxSelectLogin'
  ]),
  onHandleEmpty() {
    let result = false;
    const {username, password} = this;
    if (!username) {
      this.showToast('请输入手机号');
    } else if (!password) {
      this.showToast('请输入登录密码');
    } else {
      result = true;
    }
    return result;
  },
  onHandleLogin() {
    if (this.onHandleEmpty()) {
      this.showLoading();
      // this.navigateTo($routes.INDEX.path);
    }
  },
  exeAjaxSelectLogin() {
    this.ajaxSelectLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export default controller;