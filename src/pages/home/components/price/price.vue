<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header">
        <view class="module-row row">
          <view class="module-col col-2" @click="onHandlePayment">
            <view class="module-icon iconfont icon-collection"/>
            <view class="module-text">收款</view>
          </view>
          <view class="module-col col-8">
            <view class="module-name">南京市许老爹餐饮管理有限公司</view>
          </view>
          <view class="module-col col-2" @click="onHandleOrder">
            <view class="module-icon iconfont icon-bill"/>
            <view class="module-text">账单</view>
          </view>
        </view>
      </view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-12">
            <view class="desc">交易金额(元)</view>
          </view>
          <view class="module-col col-12 price">
            <view class="price">10000.05</view>
          </view>
          <view class="module-col col-12">
            <view class="desc">当日12:00:00至次日11:59:59</view>
          </view>
        </view>
      </view>
      <view class="module-footer">
        <view class="module-row row">
          <view class="module-col col-6">
            <text class="small">交易共</text>
            <text class="large">100</text>
            <text class="small">笔</text>
          </view>
          <view class="module-col col-6">
            <text class="small">累计客户</text>
            <text class="large">30</text>
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
    name: "price",
    mixins: [Mixin],
    data() {
      return {}
    },
    props: {},
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
    margin: 0 !important;
    .module-content {
      background-color: @theme;
      text-align: center;
      color: @white;
      .module-header {
        padding-top: unit(20, rpx);
        .module-row {
          padding: unit(15, rpx);
          .module-col {
            padding: unit(15, rpx);
            text-align: center;
            .module-icon,
            .module-text {
              height: unit(40, rpx);
              line-height: unit(40, rpx);
              display: inline-block;
              vertical-align: middle;
              &.module-icon {
                margin-right: unit(4, rpx);
                font-size: @fontSize32;
              }
              &.module-text {
                font-size: @fontSize26;
              }
            }
            .module-name {
              height: unit(40, rpx);
              line-height: unit(40, rpx);
              font-size: @fontSize28;
            }
          }
        }
      }
      .module-body {
        .module-row {
          padding: unit(15, rpx);
          .module-col {
            padding: unit(15, rpx);
            .price {
              font-size: @fontSize72;
              font-weight: bold;
            }
          }
        }
      }
      .module-footer {
        .module-row {
          padding: unit(30, rpx);
          .module-col {
            height: unit(32, rpx);
            line-height: unit(32, rpx);
            border-right: 0.5px solid @white;
            .large {
              font-size: @fontSize32;
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