export default {
  data() {
    return {
      mixin: 'mixin'
    }
  },
  methods: {
    showLoading(title) {
      uni.showLoading({
        title: title || '正在加载',
        mask: true
      });
    },
    hideLoading() {
      uni.hideLoading();
    },
    switchTab(url) {
      uni.switchTab({
        url
      });
    },
    reLaunch(url) {
      uni.reLaunch({
        url
      });
    },
    redirectTo(url) {
      uni.redirectTo({
        url
      });
    },
    navigateTo(url) {
      uni.navigateTo({
        url
      });
    },
    navigateBack(delta) {
      uni.navigateBack({
        delta
      });
    },
    setItem(key, value) {
      try {
        uni.setStorageSync(key, value);
      } catch (e) {
        console.log(e);
      }
    },
    getItem(key) {
      let value = null;
      try {
        value = uni.getStorageSync(key);
      } catch (e) {
        console.log(e);
      }
      return value;
    },
    removeItem(key) {
      try {
        uni.removeStorageSync(key);
      } catch (e) {
        console.log(e);
      }
    },
    clearStorage() {
      try {
        uni.clearStorageSync();
      } catch (e) {
        console.log(e);
      }
    },
    getStorageInfoSync() {
      let result = 0;
      try {
        const res = uni.getStorageInfoSync();
        const {currentSize} = res;
        result = currentSize;
      } catch (e) {
        console.log(e);
      }
      return result;
    },
    showToast(title, icon) {
      uni.showToast({
        title,
        icon: icon || 'none'
      });
    }
  },
  created() {
    console.log('created in mixin');
  }
};