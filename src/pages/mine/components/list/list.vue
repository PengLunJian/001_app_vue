<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-btn btn" v-for="(item,index) in items" :key="index"
              @click="onHandleRoute(item)">
          <view class="module-row row">
            <view class="module-col col-6">
              <view class="module-text">{{item.name}}</view>
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
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../../../mixins';
  import * as $routes from '../../../../router';
  import * as utils from '../../../../utils';

  export default {
    name: "list",
    mixins: [Mixin],
    data() {
      return {
        items: [
          {
            name: $routes.PRINT.name,
            path: $routes.PRINT.path
          },
          {
            name: $routes.SUGGEST.name,
            path: $routes.SUGGEST.path
          },
          {
            name: $routes.PASSWORD.name,
            path: $routes.PASSWORD.path
          },
          {
            name: $routes.ABOUT.name,
            path: $routes.ABOUT.path
          },
          {
            name: '退出登录',
            path: $routes.LOGIN.path
          }
        ]
      }
    },
    props: {},
    methods: {
      onHandleRoute(item) {
        const {path, name} = item;
        if (name === '退出登录') {
          this.removeItem('token');
          this.removeItem('siteName');
          this.removeItem('username');
          this.removeItem('password');
          this.reLaunch(path);
        } else {
          this.navigateTo(path);
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .module {
    .module-content {
      .module-header {
      }
      .module-body {
        .module-btn {
          padding-left: unit(30, rpx);
          .module-row {
            padding-right: unit(30, rpx);
            border-bottom: 0.5px solid @borderColor1;
            .module-col {
              line-height: unit(110, rpx);
              .module-text {
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
  }
</style>