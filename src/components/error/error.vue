<template>
  <view class="error fade-in" v-if="isShow">
    <view class="inner">
      <view class="image"></view>
      <view class="btn btn-refresh" @click="onRefresh">重新加载</view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "error",
    data() {
      return {}
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onRefresh() {
        this.$emit('refresh');
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(60, rpx);

  .error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0;
    .inner {
      display: inline-block;
      vertical-align: middle;
      .image {
        width: unit(200, rpx);
        height: unit(200, rpx);
      }
      .btn-refresh {
        overflow: hidden;
        line-height: @height;
        display: inline-block;
        border-radius: @height;
        padding: 0 unit(30, rpx);
        margin-top: unit(20, rpx);
        border: 0.5px solid @borderColor3;
        font-size: @fontSize28;
        letter-spacing: 1px;
        color: @fontColor3;
      }
    }
    &:before {
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>