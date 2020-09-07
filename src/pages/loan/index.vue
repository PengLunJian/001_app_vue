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
                    <view class="form-group">
                      <label class="form-label">用户姓名</label>
                      <input class="form-input" v-model="name" type="text"
                             placeholder="请输入您的姓名"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">身份证号</label>
                      <input class="form-input" v-model="idcard" type="number"
                             placeholder="请输入您的证件号码"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">联系电话</label>
                      <input class="form-input" v-model="mobile" type="number"
                             placeholder="请输入您的手机号"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">营业时间</label>
                      <picker mode="date" :value="businesshours" @change="onHandleSelectDate">
                        <input class="form-input" v-model="businesshours" disabled
                               placeholder="请输入您的营业时间"/>
                      </picker>
                    </view>
                    <view class="form-group">
                      <label class="form-label">月营业额</label>
                      <input class="form-input" v-model="monthturnover" type="number"
                             placeholder="请输入您的月营业额"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">经营地址</label>
                      <input class="form-input" v-model="businessaddress" type="text"
                             placeholder="请输入您的经营地址"/>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">提交</view>
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
        name: '',
        idcard: '',
        mobile: '',
        businesshours: '',
        monthturnover: '',
        businessaddress: '',
        isScroll: true
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
              .module {
                background-color: @transparent;
                .module-content {
                  .module-header {
                  }
                  .module-body {
                    .form-group {
                      background-color: @white;
                      .form-label {
                        display: block;
                        height: unit(70, rpx);
                        line-height: unit(70, rpx);
                        background-color: @bgColor;
                        padding: 0 unit(30, rpx);
                        font-size: @fontSize28;
                        font-weight: bold;
                      }
                      .form-input {
                        height: @height;
                        padding: 0 unit(30, rpx);
                        font-size: @fontSize32;
                      }
                      .textarea {
                        height: unit(300, rpx);
                        padding: unit(30, rpx);
                        .form-input {
                          padding: 0;
                          width: 100%;
                          height: 100%;
                        }
                      }
                    }
                  }
                  .module-footer {
                    padding: unit(60, rpx);
                    .btn-confirm {
                      overflow: hidden;
                      height: @height;
                      line-height: @height;
                      border-radius: @borderRadius15;
                      background-color: @theme;
                      font-size: @fontSize36;
                      letter-spacing: 2px;
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
