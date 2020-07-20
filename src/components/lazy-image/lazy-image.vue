<template>
  <view class="lazy-image">
    <view class="lazy-image-loading" v-if="isLoading">
      <image class="image" :style="styl" :src="url" mode="aspectFit"/>
    </view>
    <view class="lazy-image-success" :class="{'fade-in':isSuccess}">
      <image class="image" :src="src" :mode="mode" @load="onHandleLoader"/>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "lazy-image",
    data() {
      return {
        isLoading: true,
        isSuccess: false
      }
    },
    props: {
      url: {
        type: String,
        default: require('../../assets/images/logo@2x.png')
      },
      src: {
        type: String,
        default: ''
      },
      mode: {
        type: String,
        default: 'scaleToFill'
      },
      styl: {}
    },
    methods: {
      onHandleLoader() {
        this.isSuccess = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .lazy-image {
    width: 100%;
    height: 100%;
    position: relative;
    .lazy-image-loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #F5F5F5;
      .image {
        width: 60%;
        height: 100%;
        margin: 0 auto;
      }
    }
    .lazy-image-success {
      width: 100%;
      height: 100%;
      visibility: hidden;
      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>