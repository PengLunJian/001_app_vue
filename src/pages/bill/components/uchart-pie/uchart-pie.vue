<template>
    <view id="ucharts" class="ucharts">
        <canvas :canvas-id="canvasId" :id="canvasId" class="canvas"></canvas>
    </view>
</template>

<script type="text/ecmascript-6">
    import uCharts from '../../../../static/libs/ucharts/u-charts';

    export default {
        name: "uchart-pie",
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
            showPie(canvasId, chartData) {
                const {series} = chartData;
                const {cWidth, cHeight, pixelRatio} = this;
                new uCharts({
                    $this: this,
                    canvasId: canvasId,
                    type: 'pie',
                    fontSize: 11,
                    legend: true,
                    background: '#FFFFFF',
                    pixelRatio: pixelRatio,
                    series: series,
                    animation: false,
                    width: cWidth * pixelRatio,
                    height: cHeight * pixelRatio,
                    dataLabel: true,
                    extra: {
                        pie: {
                            lableWidth: 15
                        }
                    },
                });
            },
        },
        mounted() {
            const {chartData} = this;
            this.showPie('canvas', chartData);
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/less/common";

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