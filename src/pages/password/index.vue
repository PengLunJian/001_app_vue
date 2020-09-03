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
                      <label class="form-label">原密码</label>
                      <input class="form-input" v-model="oldpassword" type="password"
                             placeholder="请输入原密码"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">新密码</label>
                      <input class="form-input" v-model="newpassword" type="password"
                             placeholder="请输入新密码"/>
                    </view>
                    <view class="form-group">
                      <label class="form-label">确认密码</label>
                      <input class="form-input" v-model="cfmpassword" type="password"
                             placeholder="请再次输入密码"/>
                    </view>
                  </view>
                  <view class="module-footer">
                    <view class="btn btn-confirm" @click="onHandleConfirm">保存</view>
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
        oldpassword: '',
        newpassword: '',
        cfmpassword: '',
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
                        color: @fontColor1;
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
                      &.disable {
                        background-color: @disable;
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
