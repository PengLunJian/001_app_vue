export default {
  data() {
    return {
      mixin: 'Toast'
    }
  },
  methods: {
    showToast(title, icon) {
      uni.showToast({
        title,
        icon: icon || 'none'
      });
    }
  },
  created() {
    console.log('created in toast');
  }
};
