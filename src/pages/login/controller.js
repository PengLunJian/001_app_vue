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
  onHandleSelectLogin() {
    const {isDisable} = this;
    this.navigateTo($routes.INDEX.path);
    // if (!isDisable) {
    //   this.exeAjaxSelectLogin();
    // }
  },
  exeAjaxSelectLogin() {
    this.showLoading();
    this.ajaxSelectLogin()
      .then((res) => {
        this.hideLoading();
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        console.log(err);
      });
  }
}

export default controller;