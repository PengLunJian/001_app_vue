<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <empty :isShow="isSuccess&&!isData"/>
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <view class="context fade-in" v-if="isSuccess&&isData">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <total :total="isTotal"/>
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
              <items :items="isItems"/>
              <poster/>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import UCharts from "../../components/ucharts/ucharts";
  import Error from "../../components/error/error";
  import Empty from "../../components/empty/empty";
  import Poster from "./components/poster/poster";
  import Total from './components/total/total';
  import Items from './components/items/items';
  import * as $controller from './controller';
  import * as $routes from '../../router';

  export default {
    components: {
      Empty,
      Error,
      UCharts,
      Poster,
      Total,
      Items
    },
    data() {
      return {
        option: {
          xAxis: {
            data: [
              "07-15",
              "07-16",
              "07-17",
              "07-18",
              "07-19"
            ]
          },
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [
                5,
                20,
                36,
                10,
                10
              ],
              itemStyle: {
                color: '#0095FF'
              },
              barWidth: 20
            }
          ]
        },
        isScroll: true,
        chartData: {
          categories: [
            "07-15",
            "07-16",
            "07-17",
            "07-18",
            "07-19"
          ],
          series: [
            {
              data: [
                7200,
                8500,
                7000,
                9200,
                11200
              ]
            }
          ]
        },
        url: $routes.LOAN.path
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onShow() {
      console.log('onShow');
    },
    onLoad() {
      this.exeAjaxSelectIndex();
    }
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
        position: relative;
        .context {
          height: 100%;
          .scroll-view {
            height: 100%;
            .scroll-content {
              padding-bottom: unit(20, rpx);
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
      }
      .footer {
      }
    }
  }
</style>
