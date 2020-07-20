<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title">智付侠</view>
      </view>
      <view class="body">
        <view class="form-group">
          <label class="form-label iconfont icon-mobile"></label>
          <input class="form-input" v-model="username" type="number" placeholder="请输入手机号"
                 @input="onHandleCheckEmpty">
        </view>
        <view class="form-group">
          <label class="form-label iconfont icon-lock"></label>
          <input class="form-input" v-model="password" type="password" placeholder="请输入登录密码"
                 @input="onHandleCheckEmpty">
        </view>
        <view class="form-group">
          <label class="form-text" @click="onHandlePassword">忘记密码?</label>
        </view>
        <view class="form-group">
          <view class="btn btn-login" :class="{disable:isDisable}" @click="onHandleLogin">登录</view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Loading from '../../mixins/loading';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import controller from './controller';

  export default {
    data() {
      return {
        username: '',
        password: '',
        isDisable: true
      }
    },
    mixins: [Loading, Toast, Route],
    onLoad() {
    },
    methods: controller
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  @height: unit(80, rpx);
  .container {
    .content {
      height: 100vh;
      background-color: @white;
      .header {
        .title {
          height: unit(400, rpx);
          background-size: auto 16%;
          background-repeat: no-repeat;
          background-position: center center;
          background-image: url('../../assets/images/logo@2x.png');
          text-indent: -999999px;
          line-height: @height;
          padding: 0 unit(30, rpx);
          font-size: @fontSize50;
          font-weight: bold;
          color: @fontColor1;
        }
      }
      .body {
        padding: 0 unit(60, rpx);
        .form-group {
          display: flex;
          position: relative;
          margin-bottom: unit(40, rpx);
          background-color: @white;
          .form-label {
            display: block;
            width: @height;
            height: @height;
            line-height: @height;
            font-size: @fontSize36;
            text-align: center;
            color: @theme;
          }
          .form-input {
            width: 80%;
            height: @height;
            border-bottom: 1px solid @borderColor1;
            font-size: @fontSize28;
          }
          .form-text {
            padding-left: @height;
            font-size: @fontSize26;
            color: @theme;
          }
          .btn-login {
            width: 80%;
            margin: 0 auto;
            height: @height;
            overflow: hidden;
            line-height: @height;
            border-radius: @height;
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
      .footer {
      }
    }
  }
</style>
