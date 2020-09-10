<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header">
        <view class="module-row row">
          <view class="module-col col-3" @click="onHandlePayment">
            <view class="module-icon iconfont icon-collection"/>
            <view class="module-text">收款</view>
          </view>
          <view class="module-col col-6">
            <view class="module-name ellipsis">当日交易金额(元)</view>
          </view>
          <view class="module-col col-3" @click="onHandleOrder">
            <view class="module-icon iconfont icon-bill"/>
            <view class="module-text">账单</view>
          </view>
        </view>
      </view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-12">
            <view class="price">{{total.totalmoney||0}}</view>
          </view>
        </view>
      </view>
      <view class="module-footer">
        <view class="module-row row">
          <view class="module-col col-6">
            <text class="small">交易共</text>
            <text class="large">{{total.paycnt||0}}</text>
            <text class="small">笔</text>
          </view>
          <view class="module-col col-6">
            <text class="small">累计客户</text>
            <text class="large">{{total.customercnt||0}}</text>
            <text class="small">人</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../../../mixins';
  import * as $routes from '../../../../router';

  export default {
    name: "total",
    mixins: [Mixin],
    data() {
      return {}
    },
    props: {
      total: {
        type: Object,
        default: {}
      }
    },
    methods: {
      onHandlePayment() {
        this.navigateTo($routes.PAYMENT.path);
      },
      onHandleOrder() {
        this.navigateTo($routes.ORDER.path);
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .module {
    .module-content {
      background-color: @theme;
      text-align: center;
      color: @white;
      .module-header {
        padding-top: unit(30, rpx);
        .module-row {
          .module-col {
            text-align: center;
            .module-icon,
            .module-text {
              height: unit(40, rpx);
              line-height: unit(40, rpx);
              display: inline-block;
              vertical-align: middle;
              &.module-icon {
                margin-right: unit(4, rpx);
                font-size: @fontSize40;
              }
              &.module-text {
                font-size: @fontSize28;
              }
            }
            .module-name {
              height: unit(40, rpx);
              line-height: unit(40, rpx);
              font-size: @fontSize32;
            }
          }
        }
      }
      .module-body {
        padding: unit(20, rpx) 0;
        .module-row {
          padding: unit(15, rpx);
          .module-col {
            padding: unit(15, rpx);
            font-size: @fontSize28;
            .price {
              font-size: @fontSize72;
              font-weight: bold;
            }
          }
        }
      }
      .module-footer {
        padding-bottom: unit(30, rpx);
        .module-row {
          padding: unit(30, rpx) 0;
          .module-col {
            height: unit(40, rpx);
            line-height: unit(40, rpx);
            border-right: 0.5px solid @white;
            font-size: @fontSize28;
            .large {
              font-size: @fontSize40;
              font-weight: bold;
            }
            &:last-child {
              border: none;
            }
          }
        }
      }
    }
  }
</style>