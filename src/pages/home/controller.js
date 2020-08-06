import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.INDEX.isLoading,
    isSuccess: state => state.INDEX.isSuccess,
    isFailure: state => state.INDEX.isFailure,
    isData: state => state.INDEX.isData
  }),
};

export const actions = {
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
  onRefresh() {
    this.exeAjaxSelectIndex();
  },
  getParams() {
    const params = {};
    return params;
  }
};