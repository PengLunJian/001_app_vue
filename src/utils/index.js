import * as $routes from '../router';
import {ajaxUpdateVersion} from '../store/actions';

/**
 *
 * @returns {Promise<any>}
 */
export const getDeviceId = () => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: (res) => {
        res = res || {};
        const {platform, model} = res;
        if (platform === 'ios') {
          plus.device.getInfo({
            success: (res) => {
              res = res || {};
              const {uuid} = res;
              const deviceId = model + uuid;
              resolve(deviceId);
            },
            fail: (err) => {
              err = err || {};
              reject(err);
            }
          });
        } else {
          plus.device.getAAID({
            success: (res) => {
              res = res || {};
              const {aaid} = res;
              const deviceId = model + aaid;
              resolve(deviceId);
            },
            fail: (err) => {
              console.log(err);
              reject(err);
            }
          });
        }
      },
      fail: (err) => {
        err = err || {};
        console.log(err);
      }
    });
  });
};
/**
 *
 */
export const onHandleAutoLogin = () => {
  const systemTime = Date.now();
  const username = uni.getStorageSync('username');
  const password = uni.getStorageSync('password');
  const expireTime = uni.getStorageSync('expireTime') || 0;
  const isExpire = expireTime > systemTime;
  const isBoolean = isExpire && username && password;
  const path = isBoolean ? $routes.HOME.path : $routes.LOGIN.path;
  uni.reLaunch({
    url: path
  });
  setTimeout(() => {
    plus.navigator.closeSplashscreen();
  }, 3000);
}
/**
 *
 */
export const onHandleVersion = () => {
  const params = {
    appid: plus.runtime.appid,
    version: plus.runtime.version
  };
  ajaxUpdateVersion(params)
    .then((res) => {
      res = res || {};
      const {success, data} = res;
      if (success) {
        uni.showModal({
          title: '发现新版本',
          content: '升级后可体验更多功能',
          success: (res) => {
            res = res || {};
            const {confirm} = res;
            if (confirm) {
              const {url} = data;
              plus.runtime.openURL(url);
            }
          }
        })
      }
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}
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
/**
 *
 * @param item
 * @returns {string}
 */
export const formatTime = (time) => {
  let result = '';
  const date1 = new Date();
  const date2 = new Date(time.replace(/-/g, '/'));
  const offsetTime1 = date1.getTime();
  const offsetTime2 = date2.getTime();
  const offsetTime = offsetTime1 - offsetTime2;

  const dayTime = 1 * 24 * 60 * 60 * 1000;
  const hourTime = 1 * 60 * 60 * 1000;
  const minuteTime = 1 * 60 * 1000;
  const secondTime = 1 * 1000;

  if (offsetTime > dayTime) {
    const day = parseInt(offsetTime / dayTime);
    result = day > 30 ? '30天以前' : day + '天前';
  } else if (offsetTime > hourTime) {
    const hour = parseInt(offsetTime / hourTime);
    result = hour + '小时前';
  } else if (offsetTime > minuteTime) {
    const minute = parseInt(offsetTime / minuteTime);
    result = minute + '分钟前';
  } else if (offsetTime > secondTime) {
    result = '刚刚';
  } else {
    result = 'Invalid Date';
  }
  return result;
}
/**
 *
 * @param date
 * @param format
 * @returns {string}
 */
export const dateFormat = (date, format) => {
  let dateStr = '';
  if (!date) return dateStr;
  let dateType = typeof date;
  let newDate = dateType === 'string' ?
    new Date(date.replace(/-/g, '/')) : date;
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let second = newDate.getSeconds();
  const monthStr = month > 9 ? '' + month : '0' + month;
  const dayStr = day > 9 ? '' + day : '0' + day;
  const hourStr = hour > 9 ? '' + hour : '0' + hour;
  const minuteStr = minute > 9 ? '' + minute : '0' + minute;
  const secondStr = second > 9 ? '' + second : '0' + second;
  switch (format) {
    case 'yyyy/mm/dd':
      dateStr = year + '/' + monthStr + '/' + dayStr;
      break;
    case 'yyyy/mm/dd hh':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr;
      break;
    case 'yyyy/mm/dd hh:mm':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr;
      break;
    case 'yyyy/mm/dd hh:mm:ss':
      dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
      break;
    case 'yyyy-mm-dd':
      dateStr = year + '-' + monthStr + '-' + dayStr;
      break;
    case 'yyyy-mm-dd hh':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr;
      break;
    case 'yyyy-mm-dd hh:mm':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr;
      break;
    case 'yyyy-mm-dd hh:mm:ss':
      dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
      break;
    case 'zh-cn':
      dateStr = year + '年' + monthStr + '月' + dayStr + '日';
      break;
  }
  newDate = null;
  return dateStr;
};
/**
 *
 * @param items
 * @returns {*[]}
 */
export const getChartDataPie = (items) => {
  let result = [
    {
      name: '支付宝',
      data: 0
    },
    {
      name: '微信',
      data: 0
    },
    {
      name: '其他',
      data: 0
    },
  ];
  (items || []).map((item) => {
    const {paytype} = item;
    if (paytype === '支付宝') {
      result[0].data++;
    } else if (paytype === '微信') {
      result[1].data++;
    } else {
      result[2].data++;
    }
  });
  return result;
}