<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <tab-bar :tab="tab" @change="onHandleChange"/>
      </view>
      <view class="body">
        <scroll-view class="scroll-view" :scroll-y="isScroll">
          <order-item/>
          <order-item/>
          <order-item/>
          <order-item/>
          <order-item/>
          <order-item/>
        </scroll-view>
      </view>
      <view class="footer"></view>
      <view class="modal" id="modalA" :class="{'hide':tab.activeIndex!==0}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <view class="modal-row row btn">
              <view class="modal-col col-6">
                <view class="modal-text">南京分店</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row btn active">
              <view class="modal-col col-6">
                <view class="modal-text">南京分店</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row btn">
              <view class="modal-col col-6">
                <view class="modal-text">南京分店</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row btn">
              <view class="modal-col col-6">
                <view class="modal-text">南京分店</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row btn">
              <view class="modal-col col-6">
                <view class="modal-text">南京分店</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
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
          <view class="modal-body"></view>
          <view class="modal-footer"></view>
        </view>
      </view>
      <view class="modal" id="modalC" :class="{'hide':tab.activeIndex!==2}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <view class="modal-row row active">
              <view class="modal-col col-6">
                <view class="modal-text">默认排序</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row">
              <view class="modal-col col-6">
                <view class="modal-text">金额从小到大</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
              </view>
            </view>
            <view class="modal-row row">
              <view class="modal-col col-6">
                <view class="modal-text">金额从大到小</view>
              </view>
              <view class="modal-col col-6">
                <view class="modal-icon iconfont icon-right"></view>
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
  import OrderItem from "./components/order-item/order-item";
  import TabBar from "./components/tab-bar/tab-bar";

  export default {
    components: {
      TabBar,
      OrderItem
    },
    data() {
      return {
        isScroll: true,
        tab: {
          activeIndex: -1,
          items: ['店铺', '筛选', '排序']
        }
      }
    },
    onLoad() {

    },
    methods: {
      onHandleReset() {
      },
      onHandleConfirm() {
      },
      onHandleChange(index) {
        const {activeIndex} = this.tab;
        if (activeIndex === index) {
          this.tab.activeIndex = -1;
          this.isScroll = true;
        } else {
          this.tab.activeIndex = index;
          this.isScroll = false;
        }
      },
      onHandleClose() {
        this.tab.activeIndex = -1;
        this.isScroll = true;
      }
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
          height: unit(600, rpx);
          z-index: 999;
          height: unit(800, rpx);
          padding: unit(100, rpx) 0;
          transition: all 400ms ease-out;
          box-shadow: 0 0 15px @boxShadow05;
          background-color: @white;
          .modal-header {
          }
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
                .modal-icon {
                  display: block !important;
                }
              }
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
        }
        &#modalB {
        }
        &#modalC {

        }
      }
    }
  }
</style>
