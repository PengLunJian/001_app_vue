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
                  <view class="module-img">
                    <lazy-image :src="src" mode="aspectFit"/>
                  </view>
                  <view class="module-info">
                    <view class="module-desc">智付侠</view>
                    <view class="module-desc">{{version}}</view>
                  </view>
                </view>
              </view>
            </view>
            <view class="module-footer"></view>
          </view>
        </view>
        <view class="module">
          <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
              <view class="module-btn btn" v-for="(item,index) in items" :key="index"
                    @click="onHandleRoute(item)">
                <view class="module-row row">
                  <view class="module-col col-6">
                    <view class="module-label">{{item.name}}</view>
                  </view>
                  <view class="module-col col-6">
                    <view class="module-next iconfont icon-next"></view>
                  </view>
                </view>
              </view>
            </view>
            <view class="module-footer"></view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as $routes from '../../router';
  import LazyImage from "../../components/lazy-image/lazy-image";

  export default {
    components: {
      LazyImage
    },
    mixins: [Mixin],
    data() {
      return {
        items: [
          {
            name: '版本说明',
            path: $routes.WAITING.path
          },
          {
            name: '功能介绍',
            path: $routes.WAITING.path
          },
          {
            name: '服务协议',
            path: $routes.WAITING.path
          },
          {
            name: '隐私协议',
            path: $routes.WAITING.path
          }
        ],
        src: require('./images/logo@2x.png')
      }
    },
    methods: {
      onHandleRoute(item) {
        const {path} = item;
        this.navigateTo(path);
      }
    },
    onLoad() {
      this.version = plus.runtime.version;
    }
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
