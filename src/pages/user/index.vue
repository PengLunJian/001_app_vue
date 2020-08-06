<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <view class="module">
          <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">头像</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-photo">
                    <lazy-image :src="src"/>
                  </view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">姓名</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">财务专员</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">账号</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">6</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">手机号</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">18130278679</view>
                </view>
              </view>
              <view class="module-row row" @click="onHandlePassword">
                <view class="module-col col-4">
                  <view class="module-label">修改密码</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value iconfont icon-next"></view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">商户名称</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">南京市许老爹餐饮管理有限公司</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">门店名称</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value">南京分店</view>
                </view>
              </view>
              <view class="module-row row">
                <view class="module-col col-4">
                  <view class="module-label">门店地址</view>
                </view>
                <view class="module-col col-8">
                  <view class="module-value address">江苏省南京市建邺区江东中路98号建邺万达广场购物中心3F层322-B/323号商铺</view>
                </view>
              </view>
            </view>
            <view class="module-footer"></view>
          </view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">

  import Mixin from '../../mixins';
  import LazyImage from "../../components/lazy-image/lazy-image";
  import * as $routes from '../../router';

  export default {
    components: {LazyImage},
    mixins: [Mixin],
    data() {
      return {
        src: require('../mine/images/user@2x.png')
      }
    },
    methods: {
      onHandlePassword() {
        this.navigateTo($routes.PASSWORD.path);
      }
    },
    onLoad() {

    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    .content {
      .header {
      }
      .body {
        .module {
          margin-top: unit(20, rpx);
          .module-content {
            .module-header {
            }
            .module-body {
              .module-row {
                padding: 0 unit(30, rpx);
                border-bottom: 0.5px solid @borderColor1;
                .module-col {
                  line-height: unit(110, rpx);
                  .module-label {
                    font-size: @fontSize28;
                  }
                  .module-value {
                    font-size: @fontSize28;
                    &.icon-next {
                      color: @borderColor1;
                    }
                    &.address {
                      padding: unit(30, rpx) 0;
                      line-height: unit(40, rpx);
                    }
                  }
                  .module-photo {
                    width: unit(70, rpx);
                    height: unit(70, rpx);
                    display: inline-block;
                    vertical-align: middle;
                    overflow: hidden;
                    border-radius: @borderRadius100;
                  }
                  &:last-child {
                    text-align: right;
                  }
                }
                &:last-child {
                  border: none;
                }
              }
            }
            .module-footer {
            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
