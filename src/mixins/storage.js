export default {
  data: {
    mixin: 'Storage'
  },
  methods: {
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
    }
  },
  created() {
    console.log('created in storage');
  }
};
