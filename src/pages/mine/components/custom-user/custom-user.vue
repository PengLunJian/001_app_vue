<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-3">
            <view class="module-image">
              <lazy-image :src="src"/>
            </view>
          </view>
          <view class="module-col col-7">
            <view class="module-text">财务专员（店长）</view>
            <view class="module-text">13671591608</view>
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

<script>
  import lazyImage from '../../../../components/lazy-image/lazy-image';

  export default {
    name: "custom-user",
    data() {
      return {
        src: require('../../../../assets/images/user@2x.png')
      }
    },
    components: {
      lazyImage
    },
    props: {},
    methods: {}
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