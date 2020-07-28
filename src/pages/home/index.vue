<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <scroll-view class="scroll-view" scroll-y="true">
          <custom-base/>
          <echarts :option="option" title="经营报表>>>"/>
          <custom-item/>
          <custom-loan/>
        </scroll-view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import customBase from './components/custom-base/custom-base';
  import customItem from './components/custom-item/custom-item';
  import CustomLoan from "./components/custom-loan/custom-loan";
  import Echarts from "../../components/echarts/echarts";
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import * as $routes from '../../router';
  import controller from './controller';

  export default {
    components: {
      Echarts,
      CustomLoan,
      customBase,
      customItem
    },
    data() {
      return {
        option: {
          xAxis: {
            data: ["07-15", "07-16", "07-17", "07-18", "07-19"]
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10],
              itemStyle: {
                color: '#0095FF'
              },
              barWidth: 20
            }
          ]
        },
        url: $routes.LOAN.path
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
        height: 100%;
        .scroll-view {
          height: 100%;
        }
      }
      .footer {
      }
    }
  }
</style>
