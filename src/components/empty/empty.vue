<template>
  <view class="empty fade-in" v-if="isShow">
    <view class="inner">
      <view class="image"></view>
      <view class="label">暂无数据</view>
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
      .image {
        width: unit(200, rpx);
        height: unit(200, rpx);
      }
      .label {
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