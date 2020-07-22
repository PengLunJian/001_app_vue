<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body"></view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
      }
    },
    onLoad() {

    },
    methods: {}
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
  .container {
    .content {
      .header {
      }
      .body {
        .module {
          .module-content {
            .module-header {
            }
            .module-body {
              .module-img {
                width: unit(120, rpx);
                height: unit(120, rpx);
                margin: unit(60, rpx) auto 0;
                background-color: @white;
              }
              .module-info {
                margin-bottom: unit(60, rpx);
                line-height: unit(60, rpx);
                font-size: @fontSize36;
                text-align: center;
                color: #253D7D;
              }
              .module-btn {
                padding-left: unit(30, rpx);
                .module-row {
                  padding-right: unit(30, rpx);
                  border-bottom: 0.5px solid @borderColor1;
                  .module-col {
                    line-height: @height;
                    .module-label {
                      font-size: @fontSize32;
                      color: @fontColor1;
                    }
                    .module-next {
                      color: @borderColor1;
                    }
                    &:last-child {
                      text-align: right;
                    }
                  }
                }
                &:last-child {
                  .module-row {
                    border: none;
                  }
                }
              }
            }
            .module-footer {
            }
          }
          &:first-child {
            margin-top: unit(20, rpx);
          }
        }
      }
      .footer {
      }
    }
  }
</style>
