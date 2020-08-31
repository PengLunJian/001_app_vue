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
export const getAuthorize = () => {
  let token = '';
  try {
    token = uni.getStorageSync('token');
  } catch (e) {
    console.log(e);
  }
  console.log('Bearer ' + token);
  return 'Bearer ' + token;
};