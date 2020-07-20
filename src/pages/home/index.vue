<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title"></view>
      </view>
      <view class="body">
        <custom-base/>
        <custom-item/>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import customBase from './components/custom-base/custom-base';
  import customItem from './components/custom-item/custom-item';
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import controller from './controller';

  export default {
    components: {
      customBase,
      customItem
    },
    data() {
      return {}
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
