<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context fade-in" v-if="isSuccess">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <view class="module">
                <view class="module-content">
                  <view class="module-header">
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="module-icon iconfont icon-success"></view>
                        <view class="module-text">支付成功</view>
                      </view>
                    </view>
                  </view>
                  <view class="module-body">
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="module-value price">￥{{isData.paymoney}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-6">
                        <view class="module-label">收款方</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-label">收款金额</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-value">{{isData.sitename}}</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-value">￥{{isData.paymoney}}</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-label">付款方式</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-value">{{isData.paytype}}</view>
                      </view>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">完成</view>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as $controller from './controller';

  export default {
    mixins: [Mixin],
    data() {
      return {
        isScroll: true
      }
    },
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {

    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

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
          background-color: @white;
          .scroll-view {
            height: 100%;
            .scroll-content {
              .module {
                .module-content {
                  padding: unit(100, rpx) 0;
                  text-align: center;
                  .module-header {
                    .module-icon {
                      font-size: unit(100, rpx);
                      color: @theme;
                    }
                    .module-text {
                      height: unit(40, rpx);
                      line-height: unit(40, rpx);
                      font-size: @fontSize32;
                      color: @theme;
                    }
                  }
                  .module-body {
                    .module-row {
                      padding: unit(15, rpx);
                      .module-col {
                        padding: unit(15, rpx);
                        font-size: @fontSize32;
                        text-align: center;
                        .module-label {
                          color: @fontColor3;
                        }
                        .module-value {
                          color: @fontColor1;
                          &.price {
                            line-height: unit(200, rpx);
                            font-size: @fontSize72;
                          }
                        }
                      }
                    }
                  }
                  .module-footer {
                    .btn-confirm {
                      width: unit(320, rpx);
                      height: unit(100, rpx);
                      line-height: unit(100, rpx);
                      margin: unit(60, rpx) auto;
                      border-radius: @borderRadius15;
                      background-color: @theme;
                      font-size: @fontSize36;
                      letter-spacing: 2px;
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
