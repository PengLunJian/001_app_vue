<template>
  <view class="empty fade-in" v-if="isShow">
    <view class="inner">
      <view class="icon"></view>
      <view class="text">暂无数据</view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "empty",
    data() {
      return {}
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .empty {
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
        background-image: url('./images/empty@2x.png');
      }
      .text {
        height: unit(40, rpx);
        line-height: unit(40, rpx);
        margin-top: unit(10, rpx);
        letter-spacing: 0.5px;
        font-size: @fontSize30;
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