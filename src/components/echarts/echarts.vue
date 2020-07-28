<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header">
        <view class="module-title">{{title}}</view>
      </view>
      <view class="module-body">
        <view @click="echarts.onClick" :prop="option"
              :change:prop="echarts.updateEcharts"
              id="echarts" class="echarts"></view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "echarts",
    components: {},
    data() {
      return {}
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      option: {
        type: Object,
        default: {}
      }
    },
    methods: {
      changeOption() {
        const data = this.option.series[0].data
        data.forEach((item, index) => {
          data.splice(index, 1, Math.random() * 40)
        });
      },
      onViewClick(options) {
        console.log(options)
      }
    },
    created() {
    }
  }
</script>

<script type="text/ecmascript-6" module="echarts" lang="renderjs">
  let myChart;
  export default {
    mounted() {
      if (typeof window.echarts === 'function') {
        this.initEcharts();
      } else {
        const script = document.createElement('script');
        script.src = 'static/libs/echarts/echarts.js';
        script.onload = this.initEcharts.bind(this);
        document.head.appendChild(script);
      }
    },
    methods: {
      initEcharts() {
        myChart = echarts.init(document.getElementById('echarts'));
        myChart.setOption(this.option);
      },
      updateEcharts(newValue, oldValue, ownerInstance, instance) {
        myChart.setOption(newValue);
      },
      onClick(event, ownerInstance) {
        ownerInstance.callMethod('onViewClick', {
          test: 'test'
        });
      }
    }
  }

</script>

<style lang="less">
  @import "../../assets/less/common";

  .module {
    position: relative;
    .module-content {
      .module-header {
        .module-title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          padding: 0 unit(30, rpx);
          line-height: unit(80, rpx);
          font-size: @fontSize24;
          color: @fontColor2;
        }
      }
      .module-body {
        .echarts {
          height: unit(500, rpx);
        }
      }
      .module-footer {
      }
    }
  }
</style>