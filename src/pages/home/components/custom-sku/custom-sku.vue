<template>
  <view class="module" @click="onHandleRoute">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-row row">
          <view class="module-col col-12">
            <view class="module-img" :style="styl">
              <lazy-image :src="src" :styl="{width:'30%'}"/>
            </view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Route from '../../../../mixins/route';
  import * as $routes from '../../../../router';

  export default {
    name: "custom-sku",
    data() {
      return {}
    },
    mixins: [Route],
    props: {
      src: {
        type: String,
        default: ''
      },
      styl: {}
    },
    methods: {
      onHandleRoute() {
        this.navigateTo($routes.LOAN.path);
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
        .module-row {
          height: unit(134, rpx);
        }
      }
      .module-footer {
      }
    }
  }
</style>