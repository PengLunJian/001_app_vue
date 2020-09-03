<template>
  <view class="module" @click="onHandleUser">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-3">
            <view class="module-image">
              <lazy-image :src="isUser.headImg||src"/>
            </view>
          </view>
          <view class="module-col col-7">
            <view class="module-text">{{isUser.name}}</view>
            <view class="module-text">{{isUser.mobile}}</view>
          </view>
          <view class="module-col col-2">
            <view class="module-next iconfont icon-next"></view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../../../mixins';
  import lazyImage from '../../../../components/lazy-image/lazy-image';
  import * as $routes from '../../../../router';

  export default {
    name: "user",
    mixins: [Mixin],
    data() {
      return {
        src: require('../../images/user@2x.png')
      }
    },
    components: {
      lazyImage
    },
    props: {
      isUser: {
        type: Object,
        default: {}
      }
    },
    methods: {
      onHandleUser() {
        this.navigateTo($routes.USER.path);
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .module {
    .module-content {
      background-color: @theme;
      color: @white;
      .module-header {
      }
      .module-body {
        .module-row {
          padding: unit(30, rpx);
          .module-col {
            padding: unit(30, rpx);
            .module-image {
              width: unit(110, rpx);
              height: unit(110, rpx);
              overflow: hidden;
              will-change: transform;
              border: 2px solid @white;
              background-color: @white;
              border-radius: @borderRadius100;
            }
            .module-text {
              height: unit(55, rpx);
              line-height: unit(55, rpx);
              font-size: @fontSize32;
            }
            .module-next {
              line-height: unit(110, rpx);
              text-align: right;
            }
          }
        }
      }
      .module-footer {
      }
    }
  }
</style>