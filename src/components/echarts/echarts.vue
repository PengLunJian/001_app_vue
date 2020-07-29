<template>
  <view @click="echarts.onClick" :prop="option"
        :change:prop="echarts.updateEcharts"
        :id="id" class="echarts"></view>
</template>

<script type="text/ecmascript-6" module="echarts" lang="renderjs">
  export default {
    name: "echarts",
    components: {},
    data() {
      return {
        myChart: null
      }
    },
    props: {
      option: {
        type: Object,
        default: {}
      },
      id: {
        type: String,
        default: 'echarts'
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
        // console.log(options)
      },
      initEcharts() {
        const {id, option} = this;
        const element = document.getElementById(id);
        this.myChart = echarts.init(element);
        this.myChart.setOption(option);
      },
      updateEcharts(newValue, oldValue, ownerInstance, instance) {
        this.myChart.setOption(newValue);
      },
      onClick(event, ownerInstance) {
        ownerInstance.callMethod('onViewClick', {
          test: 'test'
        });
      }
    },
    created() {
    },
    mounted() {
      if (typeof window.echarts === 'function') {
        this.initEcharts();
      } else {
        const script = document.createElement('script');
        script.src = 'static/libs/echarts/echarts.js';
        script.onload = this.initEcharts.bind(this);
        document.head.appendChild(script);
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .echarts {
    height: unit(500, rpx);
  }
</style>