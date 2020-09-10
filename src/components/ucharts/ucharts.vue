<template>
  <view id="ucharts" class="ucharts">
    <canvas :canvas-id="canvasId" :id="canvasId" class="canvas"></canvas>
  </view>
</template>

<script type="text/ecmascript-6">
  import uCharts from './u-charts';

  export default {
    name: "uCharts",
    data() {
      return {
        cWidth: '',
        cHeight: '',
        pixelRatio: 1
      }
    },
    props: {
      canvasId: {
        type: String,
        default: 'canvas'
      },
      chartData: {
        type: Object,
        default: {}
      }
    },
    created() {
      uni.getSystemInfo({
        success: (res) => {
          if (res.pixelRatio > 1) {
            this.pixelRatio = 1;
          }
        }
      });
      this.cWidth = uni.upx2px(690);
      this.cHeight = uni.upx2px(500);
    },
    methods: {
      showColumn(canvasId, chartData) {
        const {categories, series} = chartData;
        const {cWidth, cHeight, pixelRatio} = this;
        new uCharts({
          $this: this,
          type: 'column',
          canvasId: canvasId,
          legend: {
            show: false
          },
          fontSize: 11,
          animation: false,
          background: '#FFFFFF',
          pixelRatio: pixelRatio,
          categories: categories,
          series: series,
          xAxis: {
            disableGrid: true,
          },
          yAxis: {
            gridType: 'dash'
          },
          dataLabel: true,
          width: cWidth,
          height: cHeight,
          extra: {
            column: {
              type: 'group',
              width: 20
            }
          }
        });
      },
    },
    mounted() {
      const {chartData} = this;
      this.showColumn('canvas', chartData);
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .ucharts {
    width: unit(750, rpx);
    height: unit(500, rpx);
    padding: 0 unit(30, rpx);
    background-color: @white;
    .canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>