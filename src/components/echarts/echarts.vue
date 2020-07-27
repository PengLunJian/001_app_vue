<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="echarts">
            <!-- #ifdef APP-PLUS || H5 -->
            <view @click="echarts.onClick" :prop="option"
                  :change:prop="echarts.updateEcharts"
                  id="echarts" class="echarts"></view>
            <button @click="changeOption">更新数据</button>
            <!-- #endif -->
            <!-- #ifndef APP-PLUS || H5 -->
            <view>非 APP、H5 环境不支持</view>
            <!-- #endif -->
          </view>
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
      return {
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    props: {},
    methods: {
      changeOption() {
        const data = this.option.series[0].data
        // 随机更新示例数据
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

<script module="echarts" lang="renderjs">
	let myChart
	export default {
		mounted() {
			if (typeof window.echarts === 'function') {
				this.initEcharts()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/libs/echarts/echarts.js'
				script.onload = this.initEcharts.bind(this)
				document.head.appendChild(script)
			}
		},
		methods: {
			initEcharts() {
				myChart = echarts.init(document.getElementById('echarts'))
				// 观测更新的数据在 view 层可以直接访问到
				myChart.setOption(this.option)
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				myChart.setOption(newValue)
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				ownerInstance.callMethod('onViewClick', {
					test: 'test'
				})
			}
		}
	}
</script>

<style lang="less">
  @import "../../assets/less/common";

  .module {
    .echarts {
      height: unit(500, rpx);
    }
  }
</style>