import apis from '../apis';
import * as utils from '../utils';
import * as $routes from '../router';

let requestTask = null;
/**
 *
 * @param url
 * @param method
 * @param params
 * @returns {Promise<any>}
 */
export const request = (api, method, params) => {
  return new Promise((resolve, reject) => {
    const systemTime = Date.now() + 31 * 24 * 60 * 60 * 1000;
    const expireTime = utils.getStorage('expireTime') || 0;
    // const isExpire = utils.getStorage('isExpire');
    const routes = getCurrentPages();
    const curRoute = routes[routes.length - 1].route;
    const isBoolean = (expireTime < systemTime)
      && ('/' + curRoute !== $routes.LOGIN.path);
    if (isBoolean) {
      uni.showModal({
        title: '登录超时请重新登录',
        content: '用户必须重新登录获取新的令牌',
        success: (res) => {
          res = res || {};
          const {confirm} = res;
          if (confirm) {
            uni.reLaunch({
              url: $routes.LOGIN.path
            })
          }
        }
      });
    }
    console.log(params);
    const {baseUrl, dataType, timeout} = apis;
    const token = 'Bearer ' + utils.getStorage('token');
    const header = {...apis.header, 'Authorization': token};
    const url = baseUrl + api.url;
    requestTask = uni.request({
      url,
      header,
      method,
      timeout,
      dataType,
      data: params,
      success: (res) => {
        res = res || {};
        setTimeout(() => {
          const {data} = res;
          resolve(data);
        }, 500);
      },
      fail: (err) => {
        setTimeout(() => {
          reject(err);
        }, 500);
      }
    });
  });
};
/**
 *
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const post = (api, params) => {
  return request(api, 'post', params);
};
/**
 *
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const get = (api, params) => {
  return request(api, 'get', params);
};
/**
 *
 * @param arr
 * @returns {Promise<any>}
 */
export const all = (arr) => {
  return new Promise((resolve, reject) => {
    Promise.all(arr)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  });
};
/**
 *
 */
export const abort = () => {
  if (!requestTask) return;
  requestTask.abort();
  requestTask = null;
};