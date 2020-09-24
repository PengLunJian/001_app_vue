import apis from '../apis';
import * as utils from '../utils';

let requestTask = null;
let isRefreshToken = true;

const ajaxRequestToken = (api, params) => {
    return new Promise((resolve, reject) => {
        const {baseUrl, dataType, method, timeout} = apis;
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

const callback = (api, method, params, resolve, reject) => {
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
}
/**
 *
 * @param url
 * @param method
 * @param params
 * @returns {Promise<any>}
 */
export const request = (api, method, params) => {
    return new Promise((resolve, reject) => {
        let systemTime = Date.now();
        let offsetTime = 31 * 24 * 60 * 60 * 1000;
        let expireTime = utils.getStorage('expireTime') || 0;
        if (isRefreshToken) {
            isRefreshToken = false;
            const token = 'Bearer ' + utils.getStorage('token');
            ajaxRequestToken(apis.selectToken, {token})
                .then((res) => {
                    res = res || {};
                    const {data} = res;
                    const {token, expiretime} = data;
                    this.setItem('token', token);
                    this.setItem('expireTime', expiretime);
                    callback(api, method, params, resolve, reject);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            callback(api, method, params, resolve, reject);
        }
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