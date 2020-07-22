<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row"></view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "order-item",
    data() {
      return {};
    },
    props: {},
    methods: {}
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .module {
    .module-content {
      .module-header {
      }
      .module-body {
        padding: unit(20, rpx) 0;
        .module-row {
          padding: 0 unit(30, rpx);
          .module-col {
            height: unit(60, rpx);
            line-height: unit(60, rpx);
            .module-icon {
              &.icon-alipay {
                font-size: @fontSize36;
                color: @iconAlipay;
              }
              &.icon-wechat {
                color: @iconWechat;
              }
            }
            .module-desc {
              font-size: @fontSize28;
              color: @fontColor2;
            }
          }
        }
      }
      .module-footer {
      }
    }
  }
</style>