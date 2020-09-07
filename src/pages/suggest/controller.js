import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.SUGGEST.isLoading,
    isSuccess: state => state.SUGGEST.isSuccess,
    isFailure: state => state.SUGGEST.isFailure,
    isData: state => state.SUGGEST.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxInsertSuggest'
  ]),
  onHandleCheckEmpty() {
    let result = false;
    const {title, name, phone, content} = this;
    if (!title) {
      this.showToast('请输入反馈标题');
    } else if (!name) {
      this.showToast('请输入您的姓名');
    } else if (!phone) {
      this.showToast('请输入您的电话');
    } else if (!content) {
      this.showToast('请输入问题或建议');
    } else {
      result = true;
    }
    return result;
  },
  onHandleConfirm() {
    if (this.onHandleCheckEmpty()) {
      this.exeAjaxInsertSuggest();
    }
  },
  exeAjaxInsertSuggest() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxInsertSuggest(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        if (success) {
          this.showToast('提交成功，我们会尽快为您解决');
          setTimeout(() => {
            this.navigateBack(1);
          }, 1000);
        } else {
          this.showToast('提交失败，请重试');
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
    const {title, name, phone, content} = this;
    return {
      title,
      name,
      phone,
      content
    }
  }
};