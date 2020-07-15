export default {
  data() {
    return {
      mixin: 'Toast'
    }
  },
  methods: {
    showToast(title, icon) {
      uni.showToast({
        title: title || '正在加载',
        icon: icon || 'none'
      });
    }
  },
  created() {
    console.log('created in toast');
  }
};
