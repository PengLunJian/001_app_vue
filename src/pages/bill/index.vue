<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <view class="context fade-in">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <view class="module">
                <view class="module-content">
                  <view class="module-body">
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="tab-bar">
                          <view class="tab-row row">
                            <view class="tab-col col-4"
                                  :class="{'active':index===tab.activeIndex}"
                                  v-for="(item,index) in tab.items" :key="index"
                                  @click="onHandleTabChange(index)">
                              <view class="tab-text">{{item.label}}</view>
                            </view>
                          </view>
                        </view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="module-time" @click="onHandleChangeDate">
                          <view class="module-text">
                            <view class="module-large">{{begindate}}</view>
                            <view class="module-large">{{enddate}}</view>
                          </view>
                          <view class="module-icon iconfont icon-date"></view>
                        </view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-12">
                        <view class="module-label">共交易(元)</view>
                        <view class="module-value price">{{isTotal.totalmoney||0.00}}</view>
                      </view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-6">
                        <view class="module-label">交易笔数</view>
                        <view class="module-value">{{isTotal.paycnt||0}}</view>
                      </view>
                      <view class="module-col col-6">
                        <view class="module-label">顾客数</view>
                        <view class="module-value">{{isTotal.customercnt||0}}</view>
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="module">
                <view class="module-content">
                  <view class="module-header">
                    <view class="module-title">交易方式</view>
                    <view class="module-desc">{{getBegindate}}-{{getEnddate}}</view>
                  </view>
                  <view class="module-body">
                    <view class="module-chart">
                      <empty :isShow="isSuccess&&!isChart"/>
                      <uchart-pie v-if="isChart" :chartData="isChart"/>
                    </view>
                  </view>
                  <view class="module-footer"></view>
                </view>
              </view>
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
  import Error from "../../components/error/error";
  import Empty from "../../components/empty/empty";
  import UchartPie from "./components/uchart-pie/uchart-pie";
  import * as $controller from './controller';

  export default {
    components: {
      Empty,
      Error,
      UchartPie
    },
    mixins: [Mixin],
    data() {
      return {
        tab: {
          activeIndex: 0,
          items: [
            {
              label: '日报',
              value: 1
            },
            {
              label: '周报',
              value: 7
            },
            {
              label: '月报',
              value: 30
            }
          ]
        },
        isShow: false,
        isScroll: true,
        begindate: '',
        enddate: ''
      }
    },
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
      this.SELECT_BILL_REPLACE();
      this.onHandleInitDate();
      this.exeAjaxSelectBill();
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
                    padding: unit(30, rpx);
                    line-height: unit(50, rpx);
                    .module-title {
                      font-size: @fontSize32;
                    }
                    .module-desc {
                      font-size: @fontSize28;
                    }
                  }
                  .module-body {
                    .tab-bar {
                      font-size: @fontSize28;
                      text-align: center;
                      color: @fontColor1;
                      .tab-row {
                        .tab-col {
                          position: relative;
                          .tab-text {
                            height: unit(80, rpx);
                            line-height: unit(80, rpx);
                          }
                          &.active {
                            color: @theme;
                            &:after {
                              content: '';
                              position: absolute;
                              left: 50%;
                              bottom: 0;
                              width: unit(100, rpx);
                              border-top: unit(6, rpx) solid @theme;
                              margin-left: unit(-50, rpx);
                            }
                          }
                        }
                      }
                    }
                    .module-row {
                      padding-bottom: unit(50, rpx);
                      .module-col {
                        position: relative;
                        text-align: center;
                        .module-time {
                          display: inline-block;
                          vertical-align: middle;
                          border: 0.5px solid @borderColor1;
                          .module-text {
                            display: inline-block;
                            vertical-align: middle;
                            padding: unit(20, rpx) unit(30, rpx);
                            .module-large {
                              height: unit(40, rpx);
                              line-height: unit(40, rpx);
                              font-size: @fontSize28;
                              color: @fontColor1;
                            }
                            .module-small {
                              height: unit(40, rpx);
                              line-height: unit(40, rpx);
                              font-size: @fontSize22;
                              color: @fontColor3;
                            }
                          }
                          .module-icon {
                            display: inline-block;
                            vertical-align: middle;
                            line-height: unit(80, rpx);
                            padding: unit(20, rpx) unit(30, rpx);
                            border-left: 0.5px solid @borderColor1;
                          }
                        }
                        .module-label {
                          height: unit(40, rpx);
                          line-height: unit(40, rpx);
                          font-size: @fontSize24;
                          color: @fontColor3;
                        }
                        .module-value {
                          font-size: @fontSize40;
                          &.price {
                            font-size: @fontSize52;
                          }
                        }
                        &.col-6 {
                          &:first-child {
                            &:after {
                              position: absolute;
                              top: 50%;
                              right: 0;
                              height: unit(40, rpx);
                              margin-top: unit(-20, rpx);
                              border-right: 0.5px solid @borderColor1;
                            }
                          }
                        }
                      }
                    }
                    .module-chart {
                      position: relative;
                      min-height: unit(450, rpx);
                    }
                  }
                  .module-footer {
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
