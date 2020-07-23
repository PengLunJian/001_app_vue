<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="module">
          <view class="module-content">
            <view class="module-header">
              <view class="module-icon iconfont icon-success"></view>
              <view class="module-text price">168.00</view>
              <view class="module-state">已支付</view>
            </view>
            <view class="module-body">
              <view class="module-row row">
                <view class="module-col col-4">实收金额</view>
                <view class="module-col col-8">168.00</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">订单金额</view>
                <view class="module-col col-8">168.00</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">商家优惠</view>
                <view class="module-col col-8">0.00</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">创建时间</view>
                <view class="module-col col-8">2020-07-15 10:03:32</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">订单号</view>
                <view class="module-col col-8">ZFX32004042125802902875</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">支付方式</view>
                <view class="module-col col-8">支付宝</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">门店</view>
                <view class="module-col col-8">南京分店</view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">收银员</view>
                <view class="module-col col-8">店员</view>
              </view>
            </view>
            <view class="module-footer">
              <view class="module-row row">
                <view class="module-col col-6">
                  <view class="btn btn-refund" @click="onHandleRefund">退款</view>
                </view>
                <view class="module-col col-6">
                  <view class="btn btn-print" @click="onHandlePrint">打印</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Route from '../../mixins/route';
  import * as $routes from '../../router';

  export default {
    data() {
      return {}
    },
    mixins: [Route],
    onLoad() {

    },
    methods: {
      onHandleRefund() {
        this.navigateTo($routes.REFUND.path);
      },
      onHandlePrint() {
        this.navigateTo($routes.PRINT.path);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
  .container {
    .content {
      .header {
      }
      .body {
        .module {
          margin: 0;
          .module-content {
            .module-header {
              line-height: unit(60, rpx);
              text-align: center;
              .module-icon {
                line-height: unit(160, rpx);
                font-size: @fontSize100;
                color: @theme;
              }
              .module-text {
                font-size: @fontSize52;
                color: @fontColor1;
              }
              .module-state {
                font-size: @fontSize32;
                color: @fontColor3;
              }
            }
            .module-body {
              padding-left: unit(30, rpx);
              .module-row {
                padding-right: unit(30, rpx);
                border-bottom: 0.5px solid @borderColor1;
                font-size: @fontSize32;
                .module-col {
                  line-height: @height;
                  &.col-4 {
                  }
                  &.col-8 {
                    text-align: right;
                  }
                }
                &:last-child {
                  border: none;
                }
              }
            }
            .module-footer {
              text-align: center;
              .module-row {
                padding: unit(30, rpx);
                .module-col {
                  padding: unit(30, rpx);
                  .btn {
                    height: unit(100, rpx);
                    line-height: unit(100, rpx);
                    font-size: @fontSize32;
                    &.btn-refund {
                      border: 1px solid @theme;
                      color: @theme;
                    }
                    &.btn-print {
                      background-color: @theme;
                      color: @white;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
