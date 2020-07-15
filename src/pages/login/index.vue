<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <view class="title">登录</view>
      </view>
      <view class="body">
        <view class="form-group">
          <label class="form-label">账号</label>
          <input class="form-input" v-model="username" type="text" placeholder="请输入用户名">
        </view>
        <view class="form-group">
          <label class="form-label">密码</label>
          <input class="form-input" v-model="password" type="text" placeholder="请输入密码">
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
  import Route from '../../mixins/route';
  import * as $routes from '../../router';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    mixins: [Route],
    onLoad() {

    },
    methods: {
      onHandleLogin() {
        this.navigateTo($routes.INDEX.path);
      }
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
        .form-group {
          position: relative;
          border-radius: @height;
          .form-label {
            height: @height;
            line-height: @height;
          }
          .form-input {
            position: absolute;
          }
        }
      }
      .footer {
      }
    }
  }
</style>
