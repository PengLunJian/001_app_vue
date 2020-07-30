<template>
  <view @click="echarts.onClick" :prop="option"
        :change:prop="echarts.updateEcharts"
        id="echarts" class="echarts"></view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "echarts",
    components: {},
    data() {
      return {}
    },
    props: {
      option: {
        type: Object,
        default: {}
      }
    },
    created() {
    }
  }
</script>

<script type="text/ecmascript-6" module="echarts" lang="renderjs">
  let myChart;
  export default {
    methods: {
      initEcharts() {
        const element = document.getElementById('echarts');
        myChart = echarts.init(element);
        myChart.setOption(this.option);
      },
      updateEcharts(newValue, oldValue, ownerInstance, instance) {
        myChart.setOption(newValue);
      },
      onClick(event, ownerInstance) {
        ownerInstance.callMethod('onViewClick', {
          test: 'test'
        });
      },
      onHandleInit() {
        if (typeof window.echarts === 'function') {
          this.initEcharts();
        } else {
          const script = document.createElement('script');
          script.src = 'static/libs/echarts/echarts.js';
          script.onload = this.initEcharts.bind(this);
          document.head.appendChild(script);
        }
      }
    },
    mounted() {
      this.onHandleInit();
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .echarts {
    height: unit(500, rpx);
  }
</style>