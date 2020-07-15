import apis from '../apis';
import * as actionTypes from './actionTypes';

export const ajaxSelectLogin =({commit})=>{
  commit(actionTypes.SELECT_LOGIN_REQUEST);
  return new Promise((resolve, reject) => {
    axios.post(apis.selectLogin)
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