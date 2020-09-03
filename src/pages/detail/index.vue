<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <empty :isShow="isSuccess&&!isDetail"/>
        <view class="context fade-in" v-if="isSuccess">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <view class="module">
                <view class="module-content">
                  <view class="module-header">
                    <view class="module-icon iconfont icon-success"></view>
                    <view class="module-text price">{{isDetail.ordermoney}}</view>
                    <view class="module-state">{{isDetail.paystate}}</view>
                  </view>
                  <view class="module-body">
                    <view class="module-row row">
                      <view class="module-col col-4">实收金额</view>
                      <view class="module-col col-8">{{isDetail.realpayamount}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">订单金额</view>
                      <view class="module-col col-8">{{isDetail.ordermoney}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">商家优惠</view>
                      <view class="module-col col-8">{{isDetail.discountamount}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">创建时间</view>
                      <view class="module-col col-8">{{isDetail.createtime}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">订单号</view>
                      <view class="module-col col-8">{{isDetail.orderid}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">支付方式</view>
                      <view class="module-col col-8">{{isDetail.paytype}}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">门店</view>
                      <view class="module-col col-8">{{isDetail.mendianname }}</view>
                    </view>
                    <view class="module-row row">
                      <view class="module-col col-4">收银员</view>
                      <view class="module-col col-8">{{isDetail.siteusername}}</view>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="module-row row">
                      <view class="module-col col-6">
                        <view class="btn btn-refund" v-if="isDetail.paystate==='已支付'"
                              @click="onHandleRefund">退款
                        </view>
                        <view class="btn btn-refund"
                              :class="{'disable':isDetail.paystate!=='已支付'}"
                              v-if="isDetail.paystate!=='已支付'">退款
                        </view>
                      </view>
                      <view class="module-col col-6">
                        <view class="btn btn-print" @click="onHandlePrint">打印</view>
                      </view>
                    </view>
                  </view>
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
  import * as $controller from './controller';

  export default {
    data() {
      return {
        orderid: '',
        isScroll: true
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad(option) {
      const {orderid} = option;
      this.orderid = orderid;
      this.exeAjaxSelectDetail();
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(110, rpx);
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
              .module {
                margin: 0;
                .module-content {
                  .module-header {
                    line-height: unit(60, rpx);
                    text-align: center;
                    .module-icon {
                      line-height: unit(160, rpx);
                      font-size: @fontSize100;
                      color: @theme;
                    }
                    .module-text {
                      font-size: @fontSize52;
                      color: @fontColor1;
                    }
                    .module-state {
                      font-size: @fontSize32;
                      color: @fontColor3;
                    }
                  }
                  .module-body {
                    padding-left: unit(30, rpx);
                    .module-row {
                      padding-right: unit(30, rpx);
                      border-bottom: 0.5px solid @borderColor1;
                      font-size: @fontSize32;
                      .module-col {
                        line-height: @height;
                        &.col-4 {
                        }
                        &.col-8 {
                          text-align: right;
                        }
                      }
                      &:last-child {
                        border: none;
                      }
                    }
                  }
                  .module-footer {
                    text-align: center;
                    .module-row {
                      padding: unit(30, rpx);
                      .module-col {
                        padding: unit(30, rpx);
                        .btn {
                          height: unit(100, rpx);
                          line-height: unit(100, rpx);
                          font-size: @fontSize32;
                          &.btn-refund {
                            border: 1px solid @theme;
                            color: @theme;
                            &.disable {
                              border: none;
                              background-color: @disable;
                              color: @fontColor3;
                            }
                          }
                          &.btn-print {
                            background-color: @theme;
                            color: @white;
                          }
                        }
                      }
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
