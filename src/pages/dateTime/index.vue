<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="context fade-in">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <view class="module">
                <view class="module-content">
                  <view class="module-header"></view>
                  <view class="module-body">
                    <view class="module-items">
                      <view class="module-row row">
                        <view class="module-col col-12">
                          <picker mode="date" id="beginDate" :value="begindate" @change="onHandleChangeDate">
                            <input class="module-input" v-model="begindate" disabled
                                   placeholder="请选择开始日期"/>
                          </picker>
                        </view>
                      </view>
                      <view class="module-row row">
                        <view class="module-col col-12">
                          <picker mode="date" id="endDate" :value="enddate" @change="onHandleChangeDate">
                            <input class="module-input" v-model="enddate" disabled
                                   placeholder="请选择结束日期"/>
                          </picker>
                        </view>
                      </view>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">确定</view>
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
    components: {},
    data() {
      return {
        isScroll: true,
        begindate: '',
        enddate: ''
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
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
          .scroll-view {
            height: 100%;
            .scroll-content {
              padding-top: unit(20, rpx);
              .module {
                background-color: @transparent;
                .module-content {
                  .module-header {
                  }
                  .module-body {
                    .module-items {
                      .module-row {
                        margin-bottom: unit(20, rpx);
                        .module-col {
                          .module-input {
                            height: @height;
                            line-height: @height;
                            padding: 0 unit(30, rpx);
                            background-color: @white;
                            font-size: @fontSize32;
                          }
                        }
                        &:last-child {
                          margin: 0;
                        }
                      }
                    }
                  }
                  .module-footer {
                    padding: unit(30, rpx);
                    .btn-confirm {
                      height: @height;
                      line-height: @height;
                      border-radius: @borderRadius10;
                      background-color: @theme;
                      font-size: @fontSize36;
                      text-align: center;
                      color: @white;
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
