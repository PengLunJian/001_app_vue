import apis from '../apis';
import * as $ajax from '../ajax';
import * as $mock from '../mock';
import * as actionTypes from './actionTypes';

/**
 *
 * @param commit
 * @returns {Promise<any>}
 */
export const ajaxSelectLogin = ({commit}, params) => {
  commit(actionTypes.SELECT_LOGIN_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectLogin, params)
      .then((res) => {
        res = $mock.login(params);
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_LOGIN_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_LOGIN_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_LOGIN_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectIndex = ({commit}, params) => {
  commit(actionTypes.SELECT_INDEX_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectIndex, params)
      .then((res) => {
        res = $mock.index();
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_INDEX_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_INDEX_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_INDEX_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectOrder = ({commit}, params) => {
  commit(actionTypes.SELECT_ORDER_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectOrder, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_ORDER_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_ORDER_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_ORDER_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectDetail = ({commit}, params) => {
  commit(actionTypes.SELECT_DETAIL_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectDetail, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_DETAIL_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_DETAIL_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_DETAIL_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxUpdatePassword = ({commit}, params) => {
  commit(actionTypes.UPDATE_PASSWORD_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.updatePassword, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.UPDATE_PASSWORD_SUCCESS, data);
        } else {
          commit(actionTypes.UPDATE_PASSWORD_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.UPDATE_PASSWORD_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxInsertLoan = ({commit}, params) => {
  commit(actionTypes.INSERT_LOAN_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.insertLoan, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.INSERT_LOAN_SUCCESS, data);
        } else {
          commit(actionTypes.INSERT_LOAN_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.INSERT_LOAN_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectUser = ({commit}, params) => {
  commit(actionTypes.SELECT_USER_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectUser, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_USER_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_USER_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.INSERT_LOAN_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxInsertSuggest = ({commit}, params) => {
  commit(actionTypes.INSERT_SUGGEST_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.insertSuggest, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.INSERT_SUGGEST_SUCCESS, data);
        } else {
          commit(actionTypes.INSERT_SUGGEST_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.INSERT_SUGGEST_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxInsertPayment = ({commit}, params) => {
  commit(actionTypes.INSERT_PAYMENT_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.insertPayment, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.INSERT_PAYMENT_SUCCESS, data);
        } else {
          commit(actionTypes.INSERT_PAYMENT_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.INSERT_PAYMENT_FAILURE);
        reject(err);
      });
  });
};

const ajaxPromiseMethod1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10)
    }, 5000);
  });
}

const ajaxPromiseMethod2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(20)
    }, 3000);
  });
}

export const ajaxPromiseAll = () => {
  return new Promise((resolve, reject) => {
    $ajax.all([
      ajaxPromiseMethod1(),
      ajaxPromiseMethod2()
    ])
      .then((res) => {
        res = res || {};
        resolve(res);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      })
  });
}