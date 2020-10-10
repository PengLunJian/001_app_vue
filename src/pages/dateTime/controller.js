export const states = {};

export const actions = {
  onHandleChangeDate(e) {
    const {id, value} = e.target;
    if (id === 'beginDate') {
      this.begindate = value + ' 00:00:00';
    } else if (id === 'endDate') {
      this.enddate = value + ' 00:00:00';
    }
  },
  onHandleConfirm() {
    const {begindate, enddate} = this;
    if (!begindate) {
      this.showToast('请选择开始日期');
    } else if (!enddate) {
      this.showToast('请选择结束日期');
    } else {
      this.setItem('begindate', begindate);
      this.setItem('enddate', enddate);
      this.navigateBack(1);
    }
  }
};