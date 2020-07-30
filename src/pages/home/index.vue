<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <custom-base/>
            <view class="module">
              <view class="module-content">
                <view class="module-header">
                  <view class="module-title">经营报表>>></view>
                </view>
                <view class="module-body">
                  <u-charts :chartData="chartData"/>
                </view>
                <view class="module-footer"></view>
              </view>
            </view>
            <custom-item/>
            <custom-loan/>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import CustomBase from './components/custom-base/custom-base';
  import CustomItem from './components/custom-item/custom-item';
  import CustomLoan from "./components/custom-loan/custom-loan";
  import UCharts from "../../components/ucharts/ucharts";
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import * as $routes from '../../router';
  import controller from './controller';

  export default {
    components: {
      UCharts,
      CustomLoan,
      CustomBase,
      CustomItem
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
        isScroll: true,
        chartData: {
          categories: ["07-15", "07-16", "07-17", "07-18", "07-19"],
          series: [
            {
              data: [7200, 8500, 7000, 9200, 11200]
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
    min-height: 100%;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        .context {
          height: 100%;
          .scroll-view {
            height: 100%;
            .module {
              .module-content {
                .module-header {
                  .module-title {
                    width: 100%;
                    height: unit(80, rpx);
                    line-height: unit(80, rpx);
                    padding: 0 unit(30, rpx);
                    font-size: @fontSize24;
                    color: @fontColor2;
                  }
                }
              }
            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
