import {mapActions} from 'vuex';

const controller = {
  ...mapActions([
    'ajaxSelectIndex'
  ]),
  exeAjaxSelectIndex() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectIndex(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success, data} = res;
        if (success) {
          console.log(data);
        }
      })
      .catch((err) => {
        this.hideLoading();
        console.log(err);
      });
  },
  getParams() {
    const params = {};
    return params;
  }
};

export default controller;