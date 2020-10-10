import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.INDEX.isLoading,
    isSuccess: state => state.INDEX.isSuccess,
    isFailure: state => state.INDEX.isFailure,
    isData: state => state.INDEX.isData,
    isTotal: state => state.INDEX.isData.total,
    isChart: state => state.INDEX.isData.chart,
    isItems: state => state.INDEX.isData.items
  }),
};

export const actions = {
  ...mapActions([
    'ajaxUpdateApp',
    'ajaxSelectIndex'
  ]),
  exeAjaxSelectIndex() {
    this.showLoading();
    this.ajaxSelectIndex()
      .then((res) => {
        res = res || {};
        const {isTotal} = this || {};
        const {sitename} = isTotal || {};
        uni.setNavigationBarTitle({
          title: sitename || '智付侠商户管理系统'
        });
        this.hideLoading();
        console.log(res);
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