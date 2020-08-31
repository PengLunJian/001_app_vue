<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context">
          <view class="waiting">
            <view class="inner">
              <view class="icon"></view>
              <view class="text">敬请期待</view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    onLoad() {

    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
  .container {
    min-height: 100%;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        position: relative;
        .context {
          height: 100%;
          .waiting {
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
              margin-top: unit(-110, rpx);
              .icon {
                width: unit(240, rpx);
                height: unit(240, rpx);
                background-size: 100% auto;
                background-repeat: no-repeat;
                background-position: center center;
                background-image: url('./images/waiting@2x.png');
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
        }
      }
      .footer {
      }
    }
  }
</style>
