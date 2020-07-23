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
                <view class="module-col col-8">
                  <view class="module-label small">开启后可连接周围的蓝牙打印机</view>
                  <view class="module-label">连接蓝牙打印机</view>
                </view>
                <view class="module-col col-4">
                  <switch class="switch" color="#0095FF" @change="onHandleSwitch"/>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-8">
                  <view class="module-label">自动打印小票</view>
                  <view class="module-label small">收款退款时将自动打印小票</view>
                </view>
                <view class="module-col col-4">
                  <check-box class="checkbox" :checked="checked" @onHandleChange="onHandleChange"/>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-8">
                  <view class="module-label">选择打印小票数量</view>
                </view>
                <view class="module-col col-4">
                  <label class="module-text">1张</label>
                  <label class="module-next iconfont icon-next"></label>
                </view>
              </view>
            </view>
            <view class="module-footer">
              <view class="btn btn-confirm">保存</view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  import CheckBox from "../../components/check-box/check-box";

  export default {
    components: {
      CheckBox
    },
    data() {
      return {
        checked: false
      }
    },
    onLoad() {

    },
    methods: {
      onHandleSwitch() {

      },
      onHandleChange(value) {
        this.checked = value;
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    .content {
      .header {
      }
      .body {
        .module {
          margin-top: unit(20, rpx);
          background-color: @transparent;
          .module-content {
            .module-header {
            }
            .module-body {
              .module-row {
                padding: 0 unit(30, rpx);
                margin-bottom: unit(20, rpx);
                background-color: @white;
                .module-col {
                  padding: unit(30, rpx) 0;
                  .module-label {
                    height: unit(50, rpx);
                    line-height: unit(50, rpx);
                    font-size: @fontSize32;
                    color: @fontColor1;
                    &.small {
                      font-size: @fontSize24;
                      color: @fontColor3;
                    }
                  }
                  &.col-4 {
                    line-height: unit(100, rpx);
                    text-align: right;
                    font-size: 0;
                    .module-text {
                      height: unit(50, rpx);
                      line-height: unit(50, rpx);
                      display: inline-block;
                      margin-right: unit(20, rpx);
                      font-size: @fontSize32;
                    }
                    .module-next {
                      color: @borderColor1;
                    }
                    .checkbox {
                      margin-right: unit(10, rpx);
                    }
                  }
                }
                &:last-child {
                  margin: 0;
                  .col-4 {
                    line-height: normal;
                  }
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
      .footer {
      }
    }
  }
</style>
