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
                      <view class="module-col col-4">
                        <view class="module-label">用户头像</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-photo">
                          <lazy-image :src="isUser.headImg"/>
                        </view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">用户姓名</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isUser.name}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">登录账号</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isUser.account}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">联系电话</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isUser.mobile}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">商户名称</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isUser.siteName}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">门店名称</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value">{{isUser.shopName}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">
                        <view class="module-label">门店地址</view>
                      </view>
                      <view class="module-col col-8">
                        <view class="module-value address">{{isUser.shopAddress}}</view>
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
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import LazyImage from "../../components/lazy-image/lazy-image";
  import Mixin from '../../mixins';
  import * as $controller from './controller';

  export default {
    components: {
      LazyImage
    },
    mixins: [Mixin],
    data() {
      return {
        isScroll: true,
        src: require('../mine/images/user@2x.png')
      }
    },
    computed: $controller.states,
    methods: {},
    onLoad() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    min-height: 100vh;
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
                .module-content {
                  .module-header {
                  }
                  .module-body {
                    .module-row {
                      padding: 0 unit(30, rpx);
                      border-bottom: 0.5px solid @borderColor1;
                      .module-col {
                        line-height: unit(110, rpx);
                        .module-label {
                          font-size: @fontSize32;
                        }
                        .module-value {
                          font-size: @fontSize32;
                          &.icon-next {
                            color: @borderColor1;
                          }
                          &.address {
                            padding: unit(30, rpx) 0;
                            line-height: unit(50, rpx);
                          }
                        }
                        .module-photo {
                          width: unit(70, rpx);
                          height: unit(70, rpx);
                          overflow: hidden;
                          display: inline-block;
                          vertical-align: middle;
                          will-change: transform;
                          border-radius: @borderRadius100;
                        }
                        &:last-child {
                          text-align: right;
                        }
                      }
                      &:last-child {
                        border: none;
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
    }
  }
</style>
