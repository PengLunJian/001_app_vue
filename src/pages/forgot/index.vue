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
                    <view class="module-title">如果您的智付侠App登录账户/忘记密码了，可以通过以下方式找回</view>
                  </view>
                  <view class="module-body">
                    <view class="module-items">
                      <view class="module-item">1、联系您的老板直接找回</view>
                      <view class="module-item">
                        2、联系财务专员登录商户后台，首先进入基础设置->角色设置->查看收银员账号密码,后台登录地址
                        （<label class="important">https://sh.zhifuxia.net.cn</label>）
                      </view>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">知道啦</view>
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

  export default {
    mixins: [Mixin],
    data() {
      return {
        isScroll: true
      }
    },
    methods: {
      onHandleConfirm() {
        this.navigateBack(1);
      }
    },
    onLoad() {

    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    min-height: 100vh;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        position: relative;
        .context {
          height: 100%;
          .scroll-view {
            height: 100%;
            .scroll-content {
              padding-top: unit(20, rpx);
              .module {
                .module-content {
                  text-align: justify;
                  .module-header {
                    padding: unit(30, rpx);
                    .module-title {
                      line-height: unit(50, rpx);
                      font-size: @fontSize32;
                      color: @fontColor1;
                    }
                  }
                  .module-body {
                    padding: 0 unit(30, rpx) unit(30, rpx);
                    .module-items {
                      line-height: unit(50, rpx);
                      font-size: @fontSize32;
                      color: @fontColor3;
                      .module-item {
                        margin-bottom: unit(10, rpx);
                        .important {
                          color: @theme;
                        }
                      }
                    }
                  }
                  .module-footer {
                    padding: unit(30, rpx);
                    background-color: @bgColor;
                    .btn-confirm {
                      height: unit(110, rpx);
                      line-height: unit(110, rpx);
                      border-radius: @borderRadius15;
                      background-color: @theme;
                      font-size: @fontSize36;
                      text-align: center;
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
