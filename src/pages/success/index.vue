<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
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
                  <view class="btn btn-confirm" @click="onHandleSuccess">完成</view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
      <view class="modal" :class="{'enter':isEnter,'leave':isLeave}">
        <view class="modal-mask"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <view class="modal-info">
              <view class="modal-title">确认开始锻炼身体?</view>
              <view class="modal-desc">经常锻炼身体可以提升啪啪啪</view>
            </view>
          </view>
          <view class="modal-footer">
            <view class="modal-row row">
              <view class="modal-col col-6">
                <view class="modal-btn btn btn-cancel" @click="onHandleCancel">取消</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-btn btn btn-confirm" @click="onHandleConfirm">确认</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    data() {
      return {
        isScroll: true,
        isEnter: false,
        isLeave: false
      }
    },
    onLoad() {

    },
    methods: {
      onHandleSuccess() {
        this.isEnter = true;
        this.isLeave = false;
      },
      onHandleConfirm() {

      },
      onHandleCancel() {
        this.isEnter = false;
        this.isLeave = true;
      }
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
                    overflow: hidden;
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
      .modal {
        .modal-mask {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          background-color: @mask;
        }
        .modal-content {
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 1000;
          width: unit(560, rpx);
          height: unit(300, rpx);
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          margin-top: unit(-150, rpx);
          margin-left: unit(-280, rpx);
          padding-bottom: unit(100, rpx);
          border-radius: @borderRadius30;
          box-shadow: 0 0 15px @boxShadow05;
          background-color: @white;
          text-align: center;
          .modal-header {
          }
          .modal-body {
            height: 100%;
            &:before {
              height: 100%;
              display: inline-block;
              vertical-align: middle;
            }
            .modal-info {
              display: inline-block;
              vertical-align: middle;
              color: @fontColor1;
              .modal-title {
                height: unit(60, rpx);
                line-height: unit(60, rpx);
                font-size: @fontSize34;
                font-weight: 500;
              }
              .modal-desc {
                height: unit(40, rpx);
                line-height: unit(40, rpx);
                margin-top: unit(10, rpx);
                font-size: @fontSize28;
              }
            }
          }
          .modal-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 0.5px solid @borderColor1;
            .modal-btn {
              height: unit(100, rpx);
              line-height: unit(100, rpx);
              font-size: @fontSize34;
              font-weight: 500;
              &.btn-confirm {
                border-left: 0.5px solid @borderColor1;
                color: @theme;
              }
            }
          }
        }
        &.enter {
          .modal-mask {
            animation: modal-mask-enter 300ms ease-out forwards;
          }
          .modal-content {
            animation: modal-content-enter 300ms ease-out forwards;
          }
        }
        &.leave {
          .modal-mask {
            animation: modal-mask-leave 300ms ease-out forwards;
          }
          .modal-content {
            animation: modal-content-leave 300ms ease-out forwards;
          }
        }
      }
    }
  }

  @keyframes modal-mask-enter {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes modal-mask-leave {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes modal-content-enter {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: scale(1.0);
    }
  }

  @keyframes modal-content-leave {
    0% {
      opacity: 1;
      visibility: visible;
      transform: scale(1.0);
    }
    100% {
      opacity: 0;
      visibility: hidden;
      transform: scale(0.6);
    }
  }
</style>
