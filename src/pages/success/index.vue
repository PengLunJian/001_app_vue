<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context fade-in">
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
                        <view class="module-value price">￥16880.5</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-6">
                        <view class="module-label">收款方</view>
                        <view class="module-value">广德米图广告传媒</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-label">收款金额</view>
                        <view class="module-value">￥16880.5</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-6">
                        <view class="module-label">付款方式</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-value">支付宝</view>
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
                    .module-col {
                      padding: unit(30, rpx);
                      line-height: unit(50, rpx);
                      font-size: @fontSize28;
                      .module-label {
                      }
                      .module-value {
                        color: @fontColor1;
                        &.price {
                          line-height: unit(200, rpx);
                          font-size: @fontSize72;
                        }
                      }
                    }
                    &:last-child {
                      .module-label {
                        text-align: left;
                      }
                      .module-value {
                        text-align: right;
                      }
                    }
                  }
                }
                .module-footer {
                  .btn-confirm {
                    width: unit(320, rpx);
                    height: unit(90, rpx);
                    line-height: unit(90, rpx);
                    margin: unit(60, rpx) auto;
                    border-radius: @borderRadius15;
                    background-color: @theme;
                    font-size: @fontSize32;
                    color: @white;
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
