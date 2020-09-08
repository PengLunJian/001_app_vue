/**
 *
 * @returns {Promise<any>}
 */
export const getDeviceId = () => {
  return new Promise((resolve, reject) => {
    plus.device.getInfo({
      success: (res) => {
        res = res || {};
        resolve(res);
      },
      fail: (err) => {
        err = err || {};
        reject(err);
      }
    });
  });
};
/**
 *
 * @returns {string}
 */
export const getToken = () => {
  let token = '';
  try {
    token = uni.getStorageSync('token');
  } catch (e) {
    console.log(e);
  }
  return 'Bearer ' + token;
};
/**
 *
 * @param key
 */
export const removeStorage = (key) => {
  try {
    uni.removeStorageSync(key);
  } catch (e) {
    console.log(e);
  }
};