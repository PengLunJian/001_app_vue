import apis from '../apis';
import * as $ajax from '../ajax';
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