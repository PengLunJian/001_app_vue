<template>
  <view class="container">
    <view class="content fade-in">
      <view class="header">
        <view class="title">智付侠</view>
      </view>
      <view class="body">
        <view class="context">
          <view class="form-group">
            <label class="form-label iconfont icon-mobile"></label>
            <input class="form-input" v-model="username" type="number"
                   placeholder="请输入手机">
          </view>
          <view class="form-group">
            <label class="form-label iconfont icon-lock"></label>
            <input class="form-input" v-model="password" type="password"
                   placeholder="请输入密码">
          </view>
          <view class="form-group">
            <view class="form-forgot">
              <label class="form-text" @click="onHandlePassword">忘记密码</label>
            </view>
          </view>
          <view class="form-group">
            <view class="btn btn-login" @click="onHandleLogin">登录</view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as $controller from './controller';
  import * as utils from '../../utils';

  export default {
    data() {
      return {
        username: '',
        password: '',
        deviceid: '',
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
      const result = this.getSystemInfo();
      const {model} = result;
      utils.getDeviceId()
        .then((res) => {
          const {uuid} = res;
          this.deviceid = model + uuid;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(105, rpx);
  .container {
    min-height: 100vh;
    .content {
      height: 100vh;
      background-color: @white;
      .header {
        background-color: @theme;
        .title {
          height: unit(480, rpx);
          line-height: @height;
          background-size: auto 15%;
          background-repeat: no-repeat;
          background-position: center unit(180, rpx);
          background-image: url('../../assets/images/logo@2x.png');
          padding: 0 unit(30, rpx);
          text-indent: -999999px;
          font-size: @fontSize50;
          font-weight: bold;
          color: @fontColor1;
        }
      }
      .body {
        padding: 0 unit(45, rpx);
        .context {
          position: relative;
          top: unit(-100, rpx);
          padding: unit(100, rpx) unit(45, rpx);
          box-shadow: 0 0 15px @boxShadow05;
          border-radius: @borderRadius20;
          background-color: @white;
          font-size: @fontSize32;
          .form-group {
            position: relative;
            margin-bottom: unit(60, rpx);
            .form-label {
              position: absolute;
              top: 0;
              left: 0;
              width: @height;
              height: @height;
              line-height: @height;
              font-size: @fontSize44;
              text-align: center;
            }
            .form-input {
              height: @height;
              padding-left: @height;
              border-radius: @height;
              background-color: @bgColor;
            }
            .form-forgot {
              padding-right: unit(10, rpx);
              text-align: right;
              .form-text {
                text-decoration: underline;
              }
            }
            .form-text {
              height: unit(40, rpx);
              line-height: unit(40, rpx);
            }
            .btn-login {
              height: @height;
              overflow: hidden;
              line-height: @height;
              border-radius: @height;
              background-color: @theme;
              font-size: @fontSize36;
              letter-spacing: 2px;
              text-align: center;
              color: @white;
            }
            &:last-child {
              margin: 0;
            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
