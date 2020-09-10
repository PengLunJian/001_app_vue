<template>
  <view class="container">
    <view class="content fade-in">
      <view class="header">
        <view class="title">智付侠</view>
      </view>
      <view class="body">
        <view class="context">
          <view class="form-group">
            <label class="form-label iconfont icon-username"></label>
            <input class="form-input" v-model="username" type="number"
                   placeholder="请输入账号">
          </view>
          <view class="form-group">
            <label class="form-label iconfont icon-password"></label>
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
          <view class="form-group">
            <view class="form-desc">提示：智付侠商户管理系统是服务于商户的管理平台，商户需使用平台内部分配账号登录后方可实现数据管理。</view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import * as utils from '../../utils';
  import * as $controller from './controller';

  export default {
    data() {
      return {
        username: '6',
        password: '123456',
        deviceid: '',
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
      utils.getDeviceId()
        .then((res) => {
          this.deviceid = res;
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
          height: unit(400, rpx);
          line-height: @height;
          background-size: auto 15%;
          background-repeat: no-repeat;
          background-position: center unit(150, rpx);
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
          border-radius: @borderRadius30;
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
              font-size: @fontSize46;
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
            .form-desc {
              font-size: @fontSize24;
              text-align: justify;
              color: @fontColor3;
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
