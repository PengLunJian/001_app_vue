<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
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
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
      <view class="keyboard">
        <view class="keyboard-content">
          <view class="keyboard-header"></view>
          <view class="keyboard-body">
            <view class="keyboard-row row">
              <view class="keyboard-col col-9">
                <view class="keyboard-col-row row">
                  <view class="keyboard-col-col col-4"
                        v-for="(item,index) in items" :key="index">
                    <view class="keyboard-col-btn btn"
                          @click="onHandleButton(item)">{{item.label}}
                    </view>
                  </view>
                </view>
              </view>
              <view class="keyboard-col col-3">
                <view class="keyboard-col-row row">
                  <view class="keyboard-col-col col-12">
                    <view class="keyboard-col-btn btn" @click="onHandleDelete">
                      <view class="keyboard-icon iconfont icon-delete"></view>
                    </view>
                  </view>
                  <view class="keyboard-col-col col-12">
                    <view class="keyboard-col-btn btn btn-confirm"
                          :class="{'disable':isDisable}"
                          @click="onHandleConfirm">确定
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="keyboard-footer"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Toast from '../../mixins/toast';

  export default {
    components: {},
    mixins: [Toast],
    data() {
      return {
        price: '',
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
    onLoad() {

    },
    methods: {
      onHandleButton(item) {
        const {price} = this;
        const {value} = item;
        const regExp1 = /\./;
        const regExp2 = /^[0]$/;
        const regExp3 = /^\d+\.\d{2}$/;
        if (regExp1.test(price)) {
          if (value === '.') {
            return;
          }
        }
        if (regExp2.test(price)) {
          if (value !== '.') {
            return;
          }
        }
        if (regExp3.test(price)) {
          return;
        }
        if (value === '.') {
          if (price === '') {
            this.price = '0';
          }
        }
        this.price += value;
        this.isDisable = !this.price;
      },
      onHandleDelete() {
        const len = this.price.length - 1;
        this.price = this.price.substr(0, len);
        this.isDisable = !this.price;
      },
      onHandleDisable() {
        const {price} = this;
        if (price) {
          this.isDisable = true;
        } else {
          this.isDisable = false;
        }
      },
      onHandleConfirm() {
        const value = parseFloat(price);
        if (value <= 0) {
          this.showToast('输入金额错误');
          return;
        }

        uni.scanCode({
          onlyFromCamera: true,
          success: (res) => {
            res = res || {};
            console.log(res);
          }
        });
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
                        border-bottom: 1px solid @black;
                        font-size: @fontSize76;
                        text-align: center;
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
      .footer {
      }
      .keyboard {
        .keyboard-content {
          position: fixed;
          width: 100%;
          left: 0;
          bottom: 0;
          z-index: 1000;
          background-color: @bgColor;
          transition: all 300ms ease;
          .keyboard-header {
          }
          .keyboard-body {
            .keyboard-row {
              padding: unit(10, rpx);
              .keyboard-col {
                .keyboard-col-row {
                  .keyboard-col-col {
                    padding: unit(10, rpx);
                    .keyboard-col-btn {
                      overflow: hidden;
                      height: unit(100, rpx);
                      line-height: unit(100, rpx);
                      border-radius: @borderRadius10;
                      background-color: @white;
                      font-size: @fontSize46;
                      text-align: center;
                      color: @fontColor1;
                      .keyboard-icon {
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
                  .keyboard-col-col {
                    &:last-child {
                      width: 66.666%;
                    }
                  }
                }
              }
            }
          }
          .keyboard-footer {
          }
        }
      }
    }
  }
</style>
