<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <tab-bar :tab="tab" @change="onHandleChange"/>
      </view>
      <view class="body">
        <error :isShow="isFailure&&!isOrder.rows.length" @refresh="onRefresh"/>
        <empty :isShow="isSuccess&&!isOrder.rows.length"/>
        <view class="context fade-in" v-if="isOrder.rows.length">
          <scroll-view class="scroll-view"
                       :scroll-y="isScroll"
                       @scrolltolower="onHandleScrollToLower">
            <view class="scroll-content">
              <view class="items">
                <order-item v-for="(item,index) in isOrder.rows" :item="item" :key="index"/>
              </view>
              <loading-more :length="isOrder.rows.length" :totalCount="isOrder.totalcount"/>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
      <view class="modal" id="modalA" :class="{'hide':tab.activeIndex!==0}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <empty :isShow="!btnShop.items.length"/>
              <view class="modal-row row btn" :class="{'active':btnShop.activeIndex===index}"
                    v-for="(item,index) in btnShop.items" :key="index"
                    @click="onHandleShop(index)">
                <view class="modal-col col-6">
                  <view class="modal-text">{{item.shopname}}</view>
                </view>
                <view class="modal-col col-6">
                  <view class="modal-icon iconfont icon-right"></view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer">
            <view class="modal-row row">
              <view class="modal-col col-4">
                <view class="btn btn-reset" @click="onHandleReset">重置</view>
              </view>
              <view class="modal-col col-8">
                <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="modal" id="modalB" :class="{'hide':tab.activeIndex!==1}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <view class="scroll-content">
                <view class="modal-row row">
                  <view class="modal-col col-12">
                    <view class="modal-label">收款方式</view>
                  </view>
                  <view class="modal-col col-3" v-for="(item,index) in btnMethod.items" :key="index">
                    <view class="modal-btn btn-filter" :class="{'active':index===btnMethod.activeIndex}"
                          @click="onHandleMethod(index)">{{item.label}}
                    </view>
                  </view>
                </view>
                <view class="modal-row row">
                  <view class="modal-col col-12">
                    <view class="modal-label">交易状态</view>
                  </view>
                  <view class="modal-col col-3" v-for="(item,index) in btnStatus.items" :key="index">
                    <view class="modal-btn btn-filter" :class="{'active':index===btnStatus.activeIndex}"
                          @click="onHandleStatus(index)">{{item.label}}
                    </view>
                  </view>
                </view>
                <view class="modal-row row" v-if="btnPerson.items.length">
                  <view class="modal-col col-12">
                    <view class="modal-label">收款人员</view>
                  </view>
                  <view class="modal-col col-3" v-for="(item,index) in btnPerson.items" :key="index">
                    <view class="modal-btn btn-filter" :class="{'active':index===btnPerson.activeIndex}"
                          @click="onHandlePerson(index)">{{item.siteusername}}
                    </view>
                  </view>
                </view>
                <view class="modal-row row">
                  <view class="modal-col col-12">
                    <view class="modal-label">支付时间</view>
                  </view>
                  <view class="modal-col col-6">
                    <picker mode="date" id="beginDate" :value="begindate" @change="onHandleChangeDate">
                      <input class="modal-input" v-model="begindate" disabled
                             placeholder="账单开始日期"/>
                    </picker>
                  </view>
                  <view class="modal-col col-6">
                    <picker mode="date" id="endDate" :value="enddate" @change="onHandleChangeDate">
                      <input class="modal-input" v-model="enddate" disabled
                             placeholder="账单结束日期"/>
                    </picker>
                  </view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer">
            <view class="modal-row row">
              <view class="modal-col col-4">
                <view class="btn btn-reset" @click="onHandleReset">重置</view>
              </view>
              <view class="modal-col col-8">
                <view class="btn btn-confirm" @click="onHandleConfirm">确认</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="modal" id="modalC" :class="{'hide':tab.activeIndex!==2}">
        <view class="modal-mask" @click="onHandleClose"></view>
        <view class="modal-content">
          <view class="modal-header"></view>
          <view class="modal-body">
            <scroll-view class="scroll-view" scroll-y="true">
              <view class="modal-row row btn" :class="{'active':btnSort.activeIndex===index}"
                    v-for="(item,index) in btnSort.items" :key="index"
                    @click="onHandleSort(index)">
                <view class="modal-col col-12">
                  <view class="modal-text">{{item.label}}</view>
                </view>
              </view>
            </scroll-view>
          </view>
          <view class="modal-footer"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import Empty from "../../components/empty/empty";
  import Error from "../../components/error/error";
  import LoadingMore from "../../components/loading-more/loading-more";
  import OrderItem from "./components/order-item/order-item";
  import TabBar from "./components/tab-bar/tab-bar";
  import * as $controller from './controller';

  export default {
    components: {
      Error,
      Empty,
      LoadingMore,
      TabBar,
      OrderItem
    },
    mixins: [Mixin],
    data() {
      return {
        isScroll: true,
        tab: {
          activeIndex: -1,
          items: ['店铺', '筛选', '排序']
        },
        btnShop: {
          activeIndex: -1,
          value: 0,
          items: []
        },
        btnSort: {
          activeIndex: -1,
          value: {
            sorttype: 0,
            sort: 0
          },
          items: [
            {
              label: '默认排序',
              value: {
                sorttype: 0,
                sort: 0
              }
            },
            {
              label: '金额从小到大',
              value: {
                sorttype: 1,
                sort: 1
              }
            },
            {
              label: '金额从大到小',
              value: {
                sorttype: 1,
                sort: 2
              }
            },
            {
              label: '时间从远到近',
              value: {
                sorttype: 2,
                sort: 1
              }
            },
            {
              label: '时间从近到远',
              value: {
                sorttype: 2,
                sort: 2
              }
            }
          ]
        },
        btnMethod: {
          activeIndex: -1,
          value: 0,
          items: [
            {
              label: '微信',
              value: 1
            },
            {
              label: '支付宝',
              value: 2
            },
            {
              label: '其它',
              value: 3
            }
          ]
        },
        btnStatus: {
          activeIndex: -1,
          value: 0,
          items: [
            {
              label: '已支付',
              value: 1
            },
            {
              label: '未支付',
              value: 2
            },
            {
              label: '已退款',
              value: 3
            }
          ]
        },
        btnPerson: {
          activeIndex: -1,
          value: 0,
          items: []
        },
        pageindex: 1,
        pagesize: 10,
        begindate: '',
        enddate: ''
      }
    },
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
      this.SELECT_ORDER_REPLACE();
      this.exeAjaxSelectShops();
      this.exeAjaxSelectClerk();
      this.exeAjaxSelectOrder();
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
  .container {
    min-height: 100vh;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        position: relative;
        .context {
          height: 100%;
          padding-top: unit(100, rpx);
          .scroll-view {
            height: 100%;
            .scroll-content {

            }
          }
        }
      }
      .footer {
      }
      .modal {
        .modal-mask {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 998;
          background-color: @mask;
          transition: all 300ms ease-out;
        }
        .modal-content {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          height: unit(800, rpx);
          padding: unit(100, rpx) 0;
          transition: all 400ms ease-out;
          box-shadow: 0 0 15px @boxShadow05;
          background-color: @white;
          .modal-header {
          }
          .modal-body {
            height: 100%;
            .scroll-view {
              height: 100%;
            }
          }
          .modal-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            width: 100%;
            background-color: @white;
            .btn {
              height: unit(100, rpx);
              line-height: unit(100, rpx);
              font-size: @fontSize32;
              letter-spacing: 1px;
              text-align: center;
              color: @fontColor1;
              &.btn-reset {
                border-top: 0.5px solid @borderColor1;
              }
              &.btn-confirm {
                background-color: @theme;
                color: @white;
              }
            }
          }
        }
        &.hide {
          .modal-mask {
            opacity: 0;
            visibility: hidden;
          }
          .modal-content {
            visibility: hidden;
            transform: translateY(unit(-800, rpx));
          }
        }
        &#modalA {
          .modal-body {
            .modal-row {
              padding: 0 unit(30, rpx);
              line-height: unit(100, rpx);
              border-bottom: 0.5px solid @borderColor1;
              .modal-text {
                font-size: @fontSize28;
              }
              .modal-icon {
                display: none !important;
                font-size: @fontSize24;
                text-align: right;
                color: @theme;
              }
              &.active {
                color: @theme;
                .modal-icon {
                  display: block !important;
                }
              }
            }
          }
        }
        &#modalB {
          .modal-body {
            .scroll-view {
              .scroll-content {
                padding-bottom: unit(40, rpx);
                .modal-row {
                  padding: unit(15, rpx);
                  .modal-col {
                    padding: unit(15, rpx);
                    .modal-label {
                      height: unit(40, rpx);
                      line-height: unit(40, rpx);
                      font-size: @fontSize28;
                      color: @fontColor2;
                    }
                    .modal-input {
                      height: unit(80, rpx);
                      font-size: @fontSize28;
                    }
                    .btn-filter {
                      height: unit(60, rpx);
                      line-height: unit(60, rpx);
                      border-radius: unit(60, rpx);
                      background-color: @bgColor;
                      font-size: @fontSize24;
                      text-align: center;
                      color: @fontColor3;
                      &.active {
                        background-color: rgba(0, 149, 255, .05);
                        color: @theme;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        &#modalC {
          .modal-content {
            height: unit(600, rpx);
            padding-bottom: 0;
            .modal-row {
              padding: 0 unit(30, rpx);
              line-height: unit(100, rpx);
              border-bottom: 0.5px solid @borderColor1;
              text-align: center;
              .modal-text {
                font-size: @fontSize28;
              }
              .modal-icon {
                display: none !important;
                font-size: @fontSize24;
                text-align: right;
                color: @theme;
              }
              &:last-child {
                border: none;
              }
              &.active {
                color: @theme;
              }
            }
          }
          &.hide {
            .modal-content {
              visibility: hidden;
              transform: translateY(unit(-600, rpx));
            }
          }
        }
      }
    }
  }
</style>
