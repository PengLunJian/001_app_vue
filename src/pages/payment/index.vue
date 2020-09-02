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
                        <view class="module-value">￥{{price}}</view>
                      </view>
                    </view>
                  </view>
                  <view class="module-footer"></view>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
      <view class="modal">
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <view class="modal-row row">
              <view class="modal-col col-9">
                <view class="modal-items row">
                  <view class="modal-item col-4"
                        v-for="(item,index) in items" :key="index">
                    <view class="modal-btn btn"
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
                    <view class="modal-btn btn btn-confirm"
                          :class="{'disable':isDisable}"
                          @click="onHandleConfirm">确定
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
  import permision from "../../static/libs/jssdk";
  import * as $controller from './controller';

  export default {
    mixins: [Mixin],
    data() {
      return {
        price: '',
        scanCode: '',
        items: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3'
          },
          {
            label: '4',
            value: '4'
          },
          {
            label: '5',
            value: '5'
          },
          {
            label: '6',
            value: '6'
          },
          {
            label: '7',
            value: '7'
          },
          {
            label: '8',
            value: '8'
          },
          {
            label: '9',
            value: '9'
          },
          {
            label: '.',
            value: '.'
          },
          {
            label: '0',
            value: '0'
          }
        ],
        isScroll: true,
        isDisable: true
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

  @height: unit(100, rpx);
  .container {
    min-height: 100%;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        background-color: @white;
        .context {
          height: 100%;
          .scroll-view {
            height: 100%;
            .scroll-content {
              .module {
                .module-content {
                  .module-header {
                  }
                  .module-body {
                    padding: unit(120, rpx) unit(60, rpx);
                    .module-row {
                      padding: unit(30, rpx);
                      .module-col {
                        padding: unit(30, rpx);
                        line-height: unit(120, rpx);
                        .module-value {
                          border-bottom: 2px solid @black;
                          padding-left: unit(30, rpx);
                          font-size: @fontSize76;
                        }
                      }
                    }
                  }
                  .module-footer {
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
        .modal-content {
          position: fixed;
          width: 100%;
          left: 0;
          bottom: 0;
          z-index: 1000;
          background-color: @bgColor;
          transition: all 300ms ease;
          .modal-header {
          }
          .modal-body {
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
                        }
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
      }
    }
  }
</style>
