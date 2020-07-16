<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title">智付侠</view>
      </view>
      <view class="body">
        <view class="form-group">
          <label class="form-label iconfont icon-mobile"></label>
          <input class="form-input" v-model="username" type="number" placeholder="请输入手机号">
        </view>
        <view class="form-group">
          <label class="form-label iconfont icon-lock"></label>
          <input class="form-input" v-model="password" type="password" placeholder="请输入登录密码">
        </view>
        <view class="form-group">
          <view class="btn btn-login" @click="onHandleLogin">登录</view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import controller from './controller';
  import Toast from '../../mixins/toast';
  import Route from '../../mixins/route';
  import Loading from '../../mixins/loading';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mixins: [Loading, Toast, Route],
    onLoad() {
    },
    methods: controller
  }
</script>

<style scoped lang="less">
  @import "../../assets/less/common";

  @height: unit(100, rpx);
  .container {
    .content {
      .header {
        .title {
          height: unit(80, rpx);
          background-size: auto 80%;
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
        .form-group {
          position: relative;
          margin-bottom: unit(20, rpx);
          background-color: @white;
          .form-label {
            display: block;
            width: @height;
            height: @height;
            line-height: @height;
            font-size: @fontSize28;
            text-align: center;
          }
          .form-input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding-left: @height;
            font-size: @fontSize28;
          }
          .btn-login {
            height: @height;
            line-height: @height;
            background-color: @theme;
            font-size: @fontSize32;
            letter-spacing: 2px;
            text-align: center;
            color: @white;
          }
        }
      }
      .footer {
      }
    }
  }
</style>
