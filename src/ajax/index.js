import apis from '../apis';

let requestTask = null;
/**
 *
 * @param url
 * @param method
 * @param params
 * @returns {Promise<any>}
 */
export const request = (url, method, params) => {
  const {baseUrl, header, timeout} = apis;
  url = baseUrl + url;
  return new Promise((resolve, reject) => {
    requestTask = uni.request({
      url,
      header,
      method,
      timeout,
      data: params,
      success: (res) => {
        setTimeout(() => {
          resolve(res);
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
export const post = (url, params) => {
  return request(url, 'post', params);
};
/**
 *
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export const get = (url, params) => {
  return request(url, 'get', params);
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