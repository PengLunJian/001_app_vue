<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="module">
          <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
              <view class="module-row row">
                <view class="module-col col-12">
                  <view class="module-value" @click="onHandleShow">￥{{price}}</view>
                </view>
              </view>
            </view>
            <view class="module-footer"></view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
      <keyboard :isHide="isHide"
                bgMaskColor="transparent"
                @onHandleHide="onHandleHide"
                @onHandleValue="onHandleValue"/>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Keyboard from "../../components/keyboard/keyboard";

  export default {
    components: {
      Keyboard
    },
    data() {
      return {
        price: '',
        isHide: true
      }
    },
    onLoad() {

    },
    methods: {
      onHandleHide() {
        this.isHide = true;
      },
      onHandleShow() {
        this.isHide = false;
      },
      onHandleValue(value) {
        this.price = value;
      },
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
      .footer {
      }
    }
  }
</style>
