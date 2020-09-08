import {mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.PAYMENT.isLoading,
    isSuccess: state => state.PAYMENT.isSuccess,
    isFailure: state => state.PAYMENT.isFailure,
    isData: state => state.PAYMENT.isData
  }),
};

export const actions = {
  onHandleConfirm() {
    this.navigateBack(2);
  }
};