<template>
  <view class="module" @click="onHandleDetail">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-2">
            <view class="module-icon iconfont icon-alipay02"></view>
          </view>
          <view class="module-col col-5">
            <view class="module-text">财务专员</view>
            <view class="module-time">2020/07/24 10:25</view>
          </view>
          <view class="module-col col-5">
            <view class="module-price">￥6590.00</view>
            <view class="module-state">已付款</view>
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
    props: {},
    methods: {
      onHandleDetail() {
        this.navigateTo($routes.DETAIL.path);
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
              height: unit(120, rpx);
              line-height: unit(120, rpx);
              &.icon-alipay02 {
                font-size: @fontSize80;
                color: @theme;
              }
              &.icon-wechat {
                font-size: @fontSize72;
                color: #09BB07;
              }
            }
            .module-text {
              font-size: @fontSize32;
            }
            .module-time {
              font-size: @fontSize26;
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