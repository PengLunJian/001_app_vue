<template>
  <view class="keyboard" :class="{'hide':isHide}">
    <view class="keyboard-mask" :style="{'backgroundColor':bgMaskColor}" @click="onHandleHide"></view>
    <view class="keyboard-content">
      <view class="keyboard-header"></view>
      <view class="keyboard-body">
        <view class="keyboard-row row">
          <view class="keyboard-col col-9">
            <view class="keyboard-col-row row">
              <view class="keyboard-col-col col-4" v-for="(item,index) in items" :key="index">
                <view class="keyboard-col-btn btn" :class="{'disable':item.disable}" @click="onHandleItem(item)">
                  {{item.label}}
                </view>
              </view>
            </view>
          </view>
          <view class="keyboard-col col-3">
            <view class="keyboard-col-row row">
              <view class="keyboard-col-col col-12">
                <view class="keyboard-col-btn btn">
                  <view class="keyboard-icon iconfont icon-delete"></view>
                </view>
              </view>
              <view class="keyboard-col-col col-12">
                <view class="keyboard-col-btn btn btn-confirm">确定</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="keyboard-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "keyboard",
    data() {
      return {
        value: '',
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
        ]
      }
    },
    props: {
      bgMaskColor: {
        type: String,
        default: 'rgba(0,0,0,.5)'
      },
      isHide: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onHandleHide() {
        this.$emit('onHandleHide');
      },
      onHandleItem(item) {
        const {value, disable} = item;
        if (!disable) {
          this.$emit('onHandleValue', value);
        }
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .keyboard {
    .keyboard-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-color: @mask;
      transition: all 300ms ease;
    }
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
                  }
                  &.disable {
                    background-color: @disable;
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
    &.hide {
      .keyboard-mask {
        opacity: 0;
        visibility: hidden;
      }
      .keyboard-content {
        visibility: hidden;
        transform: translateY(unit(500, rpx));
      }
    }
  }
</style>