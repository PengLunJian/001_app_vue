import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.LOAN.isLoading,
    isSuccess: state => state.LOAN.isSuccess,
    isFailure: state => state.LOAN.isFailure,
    isData: state => state.LOAN.isData
  }),
};

export const actions = {
  ...mapActions([
    'ajaxInsertLoan'
  ]),
  onHandleSelectDate(e) {
    const {value} = e.detail;
    this.businesshours = value;
  },
  onHandleCheckEmpty() {
    let result = false;
    const regExpPhone = /^1\d{10}$/;
    const regExpIdCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    const {
      name, idcard, mobile,
      businesshours, monthturnover, businessaddress
    } = this;
    if (!name) {
      this.showToast('请输入您的姓名');
    } else if (!idcard) {
      this.showToast('请输入您的证件号码');
    } else if (!regExpIdCard.test(idcard)) {
      this.showToast('身份证号格式不正确');
    } else if (!mobile) {
      this.showToast('请输入您的手机号');
    } else if (!regExpPhone.test(mobile)) {
      this.showToast('手机号格式不正确');
    } else if (!businesshours) {
      this.showToast('请输入您的营业时间');
    } else if (!monthturnover) {
      this.showToast('请输入您的月营业额');
    } else if (!businessaddress) {
      this.showToast('请输入您的经营地址');
    } else {
      result = true;
    }
    return result;
  },
  onHandleConfirm() {
    if (this.onHandleCheckEmpty()) {
      this.exeAjaxInsertLoan();
    }
  },
  exeAjaxInsertLoan() {
    this.showLoading();
    const params = this.getParams();
    this.ajaxInsertLoan(params)
      .then((res) => {
        this.hideLoading();
        res = res || {};
        const {success} = res;
        if (success) {
          this.showToast('提交成功，请等待审核');
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
    const {
      name, idcard, mobile,
      businesshours, monthturnover, businessaddress
    } = this;
    const params = {
      name, idcard, mobile,
      businesshours, monthturnover, businessaddress
    }
    return params;
  }
};