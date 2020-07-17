<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header">
      </view>
      <view class="module-body">
        <view class="echart">
          <canvas canvas-id="canvasColumn" width="750" id="canvasColumn" class="charts"/>
        </view>
      </view>
      <view class="module-footer">
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import uCharts from '../../components/u-charts/u-charts';

  export default {
    name: "uni-home-uchart",
    data() {
      return {
        pixelRatio: 2,
        chartWidth: '',
        chartHeight: ''
      }
    },
    methods: {
      showColumn(canvasId, chartData) {
        new uCharts({
          $this: this,
          canvasId,
          type: 'column',
          legend: true,
          fontSize: 6,
          pixelRatio: 2,
          animation: true,
          background: '#FFFFFF',
          series: chartData.series,
          categories: chartData.categories,
          xAxis: {
            disableGrid: true,
          },
          yAxis: {},
          dataLabel: true,
          width: 375,
          height: 400,
          extra: {
            column: {
              width: 20
            }
          }
        });
      },
    },
    created() {
      const chartData = {
        "categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
        "series": [{
          "name": "成交量1",
          "data": [15, {"value": 20,"color": "#f04864"}, 45, 37, 43, 34]
        }, {
          "name": "成交量2",
          "data": [30, {"value": 40,"color": "#facc14"}, 25, 14, 34, 18]
        }]
      };
      this.showColumn("canvasColumn", chartData);
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .module {
    .module-content {
      .module-header {
      }
      .module-body {
        .echart {
          height: unit(400, rpx);
        }
      }
      .module-footer {
      }
    }
  }
</style>