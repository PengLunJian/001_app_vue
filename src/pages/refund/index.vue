<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="module">
          <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
              <view class="module-row row">
                <view class="module-col col-12">
                  <view class="module-label">退款金额</view>
                </view>
                <view class="module-col col-12">
                  <view class="module-input row">
                    <view class="module-label">￥</view>
                    <view class="module-value">{{price}}</view>
                  </view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">实收金额</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">168.00</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">优惠金额</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">0.0</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">支付方式</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">支付宝</view>
                </view>
              </view>
            </view>
            <view class="module-footer">
              <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
      <keyboard :isHide="isHide" @onHandleHide="onHandleHide"/>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Keyboard from "../../components/keyboard/keyboard";

  export default {
    components: {Keyboard},
    data() {
      return {
        price: '168.00',
        isHide: true
      }
    },
    methods: {
      onHandleHide(){
        this.isHide = true;
      },
      onHandleConfirm() {
        this.isHide = false;
      }
    },
    onLoad() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(100, rpx);
  .container {
    .content {
      .header {
      }
      .body {
        .module {
          margin-top: unit(20, rpx);
          background-color: @transparent;
          .module-content {
            .module-header {
            }
            .module-body {
              padding-left: unit(30, rpx);
              background-color: @white;
              .module-row {
                border-bottom: 0.5px solid @borderColor1;
                padding-right: unit(30, rpx);
                line-height: unit(110, rpx);
                font-size: @fontSize32;
                .module-input {
                  height: unit(110, rpx);
                  font-size: @fontSize60;
                }
                .col-4 {
                }
                .col-8 {
                  text-align: right;
                }
                &:last-child {
                  border: none;
                }
              }
            }
            .module-footer {
              padding: unit(60, rpx);
              .btn-confirm {
                overflow: hidden;
                height: unit(100, rpx);
                line-height: unit(100, rpx);
                border-radius: @borderRadius15;
                background-color: @theme;
                font-size: @fontSize32;
                letter-spacing: 2px;
                text-align: center;
                color: @white;
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
