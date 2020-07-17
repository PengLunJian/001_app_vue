<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title"></view>
      </view>
      <view class="body">
        <uni-home-info/>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import uniHomeInfo from '../../components/uni-home-info/uni-home-info';
  import uniHomeEchart from '../../components/uni-home-echart/uni-home-echart';
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import controller from './controller';

  export default {
    components: {
      uniHomeInfo,
      uniHomeEchart
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
