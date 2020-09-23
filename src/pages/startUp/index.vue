<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context fade-in">
          <view class="logo"></view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as $controller from './controller';

  export default {
    components: {},
    data() {
      return {
        isScroll: true
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
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
          .logo {
            position: fixed;
            left: 0;
            bottom: unit(60, rpx);
            width: 100%;
            height: unit(50, rpx);
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("./images/logo.png");
          }
        }
      }
      .footer {
      }
    }
  }
</style>
