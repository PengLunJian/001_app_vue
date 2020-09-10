<template>
  <view class="module" v-if="items.length">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row" v-for="(item,index) in items" :key="index">
          <view class="module-col col-1">
            <view class="module-icon iconfont"
                  :class="{'icon-alipay':item.paytype==='支付宝','icon-wechat':item.paytype==='微信','icon-money':item.paytype!=='微信'&&item.paytype!=='支付宝'}"></view>
          </view>
          <view class="module-col col-11">
            <view class="module-desc ellipsis">
              {{item.paytype}}{{item.paystate==='已支付'?'发生一笔收款':'发生一笔退款'}}{{item.ordermoney}}元 {{item.time}}
            </view>
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
    computed: {},
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
              &.icon-money {
                color: @iconMoney;
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