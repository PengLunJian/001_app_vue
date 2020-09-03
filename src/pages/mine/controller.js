import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.USER.isLoading,
    isSuccess: state => state.USER.isSuccess,
    isFailure: state => state.USER.isFailure,
    isUser: state => state.USER.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxSelectUser'
  ]),
  exeAjaxSelectUser() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxSelectUser(params)
      .then((res) => {
        res = res || {};
        this.hideLoading();
        const {success} = res;
        if (!success) {

        }
        console.log(res);
      })
      .catch((err) => {
        this.hideLoading();
        this.showToast('网络异常，请重试');
        console.log(err);
      });
  },
  onRefresh() {
    this.exeAjaxSelectOrder();
  },
  getParams() {
    const params = {};
    return params;
  }
};