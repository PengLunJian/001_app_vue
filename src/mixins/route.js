export default {
  data() {
    return {
      name: 'Route'
    }
  },
  methods: {
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
    }
  },
  created() {
    console.log('created in route');
  }
};
