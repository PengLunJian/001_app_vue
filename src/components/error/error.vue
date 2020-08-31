<template>
  <view class="error fade-in" v-if="isShow">
    <view class="inner">
      <view class="icon"></view>
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
      .icon {
        width: unit(240, rpx);
        height: unit(240, rpx);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url('./images/error@2x.png');
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