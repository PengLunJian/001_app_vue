<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="module">
          <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
              <view class="form-group">
                <label class="form-label">旧密码</label>
                <input class="form-input" v-model="oldPassword" type="text"
                       placeholder="请输入旧密码"
                       @input="onHandleCheckEmpty"/>
              </view>
              <view class="form-group">
                <label class="form-label">新密码</label>
                <input class="form-input" v-model="newPassword" type="text"
                       placeholder="请输入新密码"
                       @input="onHandleCheckEmpty"/>
              </view>
              <view class="form-group">
                <label class="form-label">确认密码</label>
                <input class="form-input" v-model="cfmPassword" type="text"
                       placeholder="请再次输入密码"
                       @input="onHandleCheckEmpty"/>
              </view>
            </view>
            <view class="module-footer">
              <view class="btn btn-confirm" :class="{'disable':isDisable}"
                    @click="onHandleConfirm">保存
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        cfmPassword: '',
        isDisable: true
      }
    },
    methods: {
      onHandleCheckEmpty() {
        const {
          oldPassword,
          newPassword,
          cfmPassword
        } = this;
        this.isDisable = !(
          oldPassword &&
          newPassword &&
          cfmPassword
        );
      },
      onHandleConfirm() {
        const {
          oldPassword,
          newPassword,
          cfmPassword,
          isDisable
        } = this;
        if (!isDisable) {

        }
      }
    },
    onLoad() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(100, rpx);
  .container {
    .content {
      .header {
      }
      .body {
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
                  font-size: @fontSize28;
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
                font-size: @fontSize32;
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
      .footer {
      }
    }
  }
</style>
