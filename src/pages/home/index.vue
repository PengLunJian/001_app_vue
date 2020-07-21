<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title"></view>
      </view>
      <view class="body">
        <custom-base/>
        <custom-item/>
        <custom-sku :src="imgUrl01" :styl="sku01" :url="url01"/>
        <custom-sku :src="imgUrl02" :styl="sku02"/>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import customBase from './components/custom-base/custom-base';
  import customItem from './components/custom-item/custom-item';
  import CustomSku from "./components/custom-sku/custom-sku";
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import * as $routes from '../../router';
  import controller from './controller';

  export default {
    components: {
      CustomSku,
      customBase,
      customItem
    },
    data() {
      return {
        url01: $routes.LOAN.path,
        sku01: {'height': '134rpx'},
        sku02: {'height': '170rpx'},
        imgUrl01: require('./images/sku01@2x.png'),
        imgUrl02: require('./images/sku02@2x.png')
      }
    },
    mixins: [Loading, Toast, Route],
    onLoad() {
    },
    methods: controller
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    .content {
      height: 100vh;
      .header {
      }
      .body {
      }
      .footer {
      }
    }
  }
</style>
