<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <tab-bar :tab="tab" @change="onHandleChange"/>
      </view>
      <view class="body">
        <scroll-view class="scroll-view" :scroll-y="isScroll">
          <view class="scroll-content">
            <order-item v-for="(item,index) in isData" :item="item" :key="index"/>
          </view>
        </scroll-view>
      </view>
      <view class="footer"></view>
      <view class="modal" id="modalA" :class="{'hide':tab.activeIndex!==0}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <view class="modal-row row btn" :class="{'active':btnShop.activeIndex===index}"
                    v-for="(item,index) in btnShop.items" :key="index"
                    @click="onHandleFilter(index)">
                <view class="modal-col col-6">
                  <view class="modal-text">{{item}}</view>
                </view>
                <view class="modal-col col-6">
                  <view class="modal-icon iconfont icon-right"></view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer">
            <view class="modal-row row">
              <view class="modal-col col-4">
                <view class="btn btn-reset" @click="onHandleReset">重置</view>
              </view>
              <view class="modal-col col-8">
                <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="modal" id="modalB" :class="{'hide':tab.activeIndex!==1}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <view class="modal-row row">
                <view class="modal-col col-12">
                  <view class="modal-label">收款方式</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">微信</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">支付宝</view>
                </view>
              </view>
              <view class="modal-row row">
                <view class="modal-col col-12">
                  <view class="modal-label">交易状态</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">已支付</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">未支付</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">已退款</view>
                </view>
              </view>
              <view class="modal-row row">
                <view class="modal-col col-12">
                  <view class="modal-label">收款人员</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter active">店员</view>
                </view>
                <view class="modal-col col-3">
                  <view class="modal-btn btn-filter">店长</view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer">
            <view class="modal-row row">
              <view class="modal-col col-4">
                <view class="btn btn-reset" @click="onHandleReset">重置</view>
              </view>
              <view class="modal-col col-8">
                <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="modal" id="modalC" :class="{'hide':tab.activeIndex!==2}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <view class="modal-row row btn" :class="{'active':btnSort.activeIndex===index}"
                    v-for="(item,index) in btnSort.items" :key="index"
                    @click="onHandleSort(index)">
                <view class="modal-col col-12">
                  <view class="modal-text">{{item.label}}</view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import OrderItem from "./components/order-item/order-item";
  import TabBar from "./components/tab-bar/tab-bar";
  import Mixin from '../../mixins';
  import * as $controller from './controller';

  export default {
    components: {
      TabBar,
      OrderItem
    },
    mixins: [Mixin],
    data() {
      return {
        isScroll: true,
        tab: {
          activeIndex: -1,
          items: ['店铺', '筛选', '排序']
        },
        btnShop: {
          activeIndex: -1,
          items: [
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
            '南京分店',
          ]
        },
        btnSort: {
          activeIndex: -1,
          items: [
            {
              label: '默认排序',
              value: 0
            },
            {
              label: '金额从小到大',
              value: 1
            },
            {
              label: '金额从大到小',
              value: 2
            }
          ]
        }
      }
    },
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
      this.exeAjaxSelectOrder();
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
  .container {
    min-height: 100vh;
    .content {
      height: 100vh;
      padding-top: unit(100, rpx);
      .header {
      }
      .body {
        height: 100%;
        .scroll-view {
          height: 100%;
          .scroll-content {

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
          z-index: 998;
          background-color: @mask;
          transition: all 300ms ease-out;
        }
        .modal-content {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          height: unit(800, rpx);
          padding: unit(100, rpx) 0;
          transition: all 400ms ease-out;
          box-shadow: 0 0 15px @boxShadow05;
          background-color: @white;
          .modal-header {
          }
          .modal-body {
            height: 100%;
            .scroll-view {
              height: 100%;
            }
          }
          .modal-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            width: 100%;
            background-color: @white;
            .btn {
              height: unit(100, rpx);
              line-height: unit(100, rpx);
              font-size: @fontSize32;
              letter-spacing: 1px;
              text-align: center;
              color: @fontColor1;
              &.btn-reset {
                border-top: 0.5px solid @borderColor1;
              }
              &.btn-confirm {
                background-color: @theme;
                color: @white;
              }
            }
          }
        }
        &.hide {
          .modal-mask {
            opacity: 0;
            visibility: hidden;
          }
          .modal-content {
            visibility: hidden;
            transform: translateY(unit(-800, rpx));
          }
        }
        &#modalA {
          .modal-body {
            .modal-row {
              padding: 0 unit(30, rpx);
              line-height: unit(100, rpx);
              border-bottom: 0.5px solid @borderColor1;
              .modal-text {
                font-size: @fontSize28;
              }
              .modal-icon {
                display: none !important;
                font-size: @fontSize24;
                text-align: right;
                color: @theme;
              }
              &.active {
                color: @theme;
                .modal-icon {
                  display: block !important;
                }
              }
            }
          }
        }
        &#modalB {
          .modal-body {
            .modal-row {
              padding: unit(15, rpx);
              .modal-col {
                padding: unit(15, rpx);
                .modal-label {
                  height: unit(40, rpx);
                  line-height: unit(40, rpx);
                  font-size: @fontSize28;
                  color: @fontColor2;
                }
                .btn-filter {
                  height: unit(60, rpx);
                  line-height: unit(60, rpx);
                  border-radius: unit(60, rpx);
                  background-color: @bgColor;
                  font-size: @fontSize24;
                  text-align: center;
                  color: @fontColor2;
                  &.active {
                    background-color: rgba(0, 149, 255, .05);
                    color: @theme;
                  }
                }
              }
            }
          }
        }
        &#modalC {
          .modal-content {
            height: unit(400, rpx);
            padding-bottom: 0;
            .modal-row {
              padding: 0 unit(30, rpx);
              line-height: unit(100, rpx);
              border-bottom: 0.5px solid @borderColor1;
              text-align: center;
              .modal-text {
                font-size: @fontSize28;
              }
              .modal-icon {
                display: none !important;
                font-size: @fontSize24;
                text-align: right;
                color: @theme;
              }
              &:last-child {
                border: none;
              }
              &.active {
                color: @theme;
              }
            }
          }
          &.hide {
            .modal-content {
              visibility: hidden;
              transform: translateY(unit(-400, rpx));
            }
          }
        }
      }
    }
  }
</style>
