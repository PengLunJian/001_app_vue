<template>
  <view class="module" @click="onHandleDetail">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-2">
            <view v-if="item.paytype==='支付宝'" class="module-icon iconfont icon-alipay"></view>
            <view v-if="item.paytype==='微信'" class="module-icon iconfont icon-wechat"></view>
          </view>
          <view class="module-col col-5">
            <view class="module-text">{{item.siteusername}}</view>
            <view class="module-time">{{item.paytime}}</view>
          </view>
          <view class="module-col col-5">
            <view class="module-price">￥{{item.ordermoney}}</view>
            <view class="module-state">{{item.paystate}}</view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../../../mixins';
  import * as $routes from '../../../../router';

  export default {
    name: "order-item",
    mixins: [Mixin],
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    methods: {
      onHandleDetail() {
        const {orderid} = this.item;
        const query = '?orderid=' + orderid;
        this.navigateTo($routes.DETAIL.path + query);
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .module {
    .module-content {
      .module-header {
      }
      .module-body {
        .module-row {
          padding: unit(15, rpx);
          .module-col {
            padding: unit(15, rpx);
            line-height: unit(60, rpx);
            .module-icon {
              width: unit(80, rpx);
              height: unit(80, rpx);
              margin-top: unit(20, rpx);
              line-height: unit(80, rpx);
              border-radius: @borderRadius100;
              font-size: @fontSize56;
              text-align: center;
              color: @white;
              &.icon-alipay {
                background-color: #0095FF;
              }
              &.icon-wechat {
                background-color: #09BB07;
              }
            }
            .module-text {
              font-size: @fontSize32;
            }
            .module-time {
              font-size: @fontSize28;
              color: @fontColor3;
            }
            .module-price {
              font-size: @fontSize40;
              font-weight: bold;
              text-align: right;
            }
            .module-state {
              font-size: @fontSize26;
              text-align: right;
              color: @fontColor3;
            }
          }
        }
      }
      .module-footer {
      }
    }
  }
</style>