import {mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.ORDER.isLoading,
    isSuccess: state => state.ORDER.isSuccess,
    isFailure: state => state.ORDER.isFailure,
    isOrder: state => state.ORDER.isData
  }),
};

export const actions = {
  onHandleConfirm() {
    this.navigateBack(2);
  }
};