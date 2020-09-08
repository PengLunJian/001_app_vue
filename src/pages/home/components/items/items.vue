<template>
  <view class="module" v-if="items.length">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-1">
            <view class="module-icon iconfont icon-alipay"></view>
          </view>
          <view class="module-col col-11">
            <view class="module-desc ellipsis">支付宝收款45.56元 1分钟前</view>
          </view>
        </view>
        <view class="module-row row">
          <view class="module-col col-1">
            <view class="module-icon iconfont icon-wechat"></view>
          </view>
          <view class="module-col col-11">
            <view class="module-desc ellipsis">微信发生一笔退款23.56元 30分钟前</view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "items",
    data() {
      return {};
    },
    props: {
      items: {
        type: Array,
        default: []
      }
    },
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