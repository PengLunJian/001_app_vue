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
                  <view class="module-header"></view>
                  <view class="module-body">
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="module-label">退款金额</view>
                      </view>
                      <view class="module-col col-12">
                        <view class="module-input row">
                          <view class="module-label">￥</view>
                          <view class="module-value">{{isDetail.ordermoney}}</view>
                        </view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">实收金额</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isDetail.realpayamount}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">优惠金额</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isDetail.discountamount}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">支付方式</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isDetail.paytype}}</view>
                      </view>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
                  </view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
      <view class="modal" :class="{'hide':isHide}">
        <view class="modal-mask" @click="onHandleCancel"></view>
        <view class="modal-content">
          <view class="modal-header">
            <view class="modal-row row">
              <view class="modal-col col-12">
                <view class="modal-title">密码输入</view>
              </view>
              <view class="modal-col col-12">
                <input class="modal-input" v-model="refundpass" type="password" disabled
                       placeholder="请输入6位退款密码"/>
              </view>
            </view>
          </view>
          <view class="modal-body">
            <view class="modal-row row">
              <view class="modal-col col-9">
                <view class="modal-items row">
                  <view class="modal-item col-4" v-for="(item,index) in items" :key="index">
                    <view class="modal-btn btn" :class="{'disable':item.disable}"
                          @click="onHandleButton(item)">{{item.label}}
                    </view>
                  </view>
                </view>
              </view>
              <view class="modal-col col-3">
                <view class="modal-items row">
                  <view class="modal-item col-12">
                    <view class="modal-btn btn" @click="onHandleDelete">
                      <view class="modal-icon iconfont icon-delete"></view>
                    </view>
                  </view>
                  <view class="modal-item col-12">
                    <view class="modal-btn btn btn-confirm" :class="{'disable':isDisable}"
                          @click="onHandleSubmit">确定
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="modal-footer"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as $controller from './controller';

  export default {
    data() {
      return {
        refundpass: '',
        refundreason: '',
        sign: '',
        isHide: true,
        items: [
          {
            label: '1',
            value: '1',
            disable: false
          },
          {
            label: '2',
            value: '2',
            disable: false
          },
          {
            label: '3',
            value: '3',
            disable: false
          },
          {
            label: '4',
            value: '4',
            disable: false
          },
          {
            label: '5',
            value: '5',
            disable: false
          },
          {
            label: '6',
            value: '6',
            disable: false
          },
          {
            label: '7',
            value: '7',
            disable: false
          },
          {
            label: '8',
            value: '8',
            disable: false
          },
          {
            label: '9',
            value: '9',
            disable: false
          },
          {
            label: '.',
            value: '.',
            disable: true
          },
          {
            label: '0',
            value: '0',
            disable: false
          }
        ],
        isScroll: true,
        isDisable: true
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(100, rpx);
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
          .scroll-view {
            height: 100%;
            .scroll-content {
              padding-top: unit(20, rpx);
              .module {
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
          background-color: @mask;
          transition: all 300ms ease;
        }
        .modal-content {
          .modal-header {
            position: fixed;
            width: 100%;
            left: 50%;
            bottom: unit(700, rpx);
            z-index: 1000;
            width: unit(500, rpx);
            height: unit(300, rpx);
            margin-left: unit(-250, rpx);
            border-radius: @borderRadius20;
            transition: all 300ms ease;
            background-color: @white;
            transform: scale(1.0);
            .modal-row {
              padding: unit(15, rpx);
              .modal-col {
                padding: unit(15, rpx);
                .modal-title {
                  line-height: unit(80, rpx);
                  font-size: @fontSize36;
                  font-weight: bold;
                  text-align: center;
                }
                .modal-input {
                  height: unit(90, rpx);
                  padding: 0 unit(30, rpx);
                  border-radius: @borderRadius10;
                  background-color: @bgColor;
                }
              }
            }
          }
          .modal-body {
            position: fixed;
            width: 100%;
            left: 0;
            bottom: 0;
            z-index: 1000;
            background-color: @bgColor;
            transition: all 300ms ease;
            .modal-row {
              padding: unit(10, rpx);
              .modal-col {
                .modal-items {
                  .modal-item {
                    padding: unit(10, rpx);
                    .modal-btn {
                      overflow: hidden;
                      height: unit(100, rpx);
                      line-height: unit(100, rpx);
                      border-radius: @borderRadius10;
                      background-color: @white;
                      font-size: @fontSize46;
                      text-align: center;
                      color: @fontColor1;
                      .modal-icon {
                        font-size: @fontSize50;
                      }
                      &.btn-confirm {
                        height: unit(340, rpx);
                        line-height: unit(340, rpx);
                        background-color: @theme;
                        font-size: @fontSize40;
                        color: @white;
                        &.disable {
                          opacity: 0.5;
                          background-color: @theme;
                        }
                      }
                      &.disable {
                        background-color: @disable;
                      }
                    }
                  }
                }
                &.col-9 {
                  .modal-item {
                    &:last-child {
                      width: 66.666%;
                    }
                  }
                }
              }
            }
          }
          .modal-footer {
          }
        }
        &.hide {
          .modal-mask {
            opacity: 0;
            visibility: hidden;
          }
          .modal-header {
            opacity: 0;
            visibility: hidden;
            transform: scale(1.2);
          }
          .modal-body {
            visibility: hidden;
            transform: translateY(unit(500, rpx));
          }
        }
      }
    }
  }
</style>
