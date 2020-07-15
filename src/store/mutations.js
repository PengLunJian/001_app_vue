export const SELECT_LOGIN_REQUEST = (state) => {
  state.LOGIN.isLoading = true;
  state.LOGIN.isSuccess = false;
  state.LOGIN.isFailure = false;
};

export const SELECT_LOGIN_SUCCESS = (state, data) => {
  state.LOGIN.isLoading = false;
  state.LOGIN.isSuccess = true;
  state.LOGIN.isFailure = false;
  state.LOGIN.isData = data;
};

export const SELECT_LOGIN_FAILURE = (state) => {
  state.LOGIN.isLoading = false;
  state.LOGIN.isSuccess = false;
  state.LOGIN.isFailure = true;
};