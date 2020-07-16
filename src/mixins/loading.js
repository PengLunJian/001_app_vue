export default {
  data() {
    return {
      mixin: 'Loading'
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
    }
  },
  created() {
    console.log('created in loading');
  }
};