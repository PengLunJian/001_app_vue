<template>
  <view class="loading-more" v-if="totalCount>10">
    <view class="loading-more-content">
      <view class="loading-more-exist" v-if="length<totalCount">
        <view class="loading-more-icon"></view>
        <view class="loading-more-text">努力加载中</view>
      </view>
      <view class="loading-more-empty" v-if="length>=totalCount">
        <view class="loading-more-text">无更多数据</view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "loading-more",
    data() {
      return {}
    },
    props: {
      length: {
        type: Number,
        default: 0
      },
      totalCount: {
        type: Number,
        default: 0
      }
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .loading-more {
    padding: unit(20, rpx) 0;
    .loading-more-content {
      letter-spacing: 0.5px;
      text-align: center;
      font-size: 0;
      .loading-more-exist {
        .loading-more-icon {
          position: relative;
          width: unit(40, rpx);
          height: unit(40, rpx);
          display: inline-block;
          vertical-align: middle;
          &:before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            box-sizing: border-box;
            border-radius: @borderRadius100;
            border: 2px solid @borderColor1;
          }
          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            box-sizing: border-box;
            border: 2px solid @transparent;
            border-top: 2px solid @theme;
            border-radius: @borderRadius100;
            animation: rotate 1s linear infinite;
          }
        }
        .loading-more-text {
          height: unit(40, rpx);
          display: inline-block;
          vertical-align: middle;
          margin-left: unit(10, rpx);
          line-height: unit(40, rpx);
          font-size: @fontSize28;
          color: @fontColor3;
        }
      }
      .loading-more-empty {
        .loading-more-text {
          height: unit(40, rpx);
          line-height: unit(40, rpx);
          font-size: @fontSize28;
          color: @fontColor3;
        }
      }
    }
  }
</style>