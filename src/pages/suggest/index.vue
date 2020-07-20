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
                <label class="form-label">反馈标题</label>
                <input class="form-input" v-model="title" @input="onHandleInput" placeholder="请输入标题"/>
              </view>
              <view class="form-group">
                <label class="form-label">问题和建议</label>
                <view class="textarea">
                <textarea class="form-input" v-model="textarea" @input="onHandleInput"
                          placeholder="请将您遇到的问题或建议反馈给我们，我们会尽快为您解决。"/>
                </view>
              </view>
              <view class="form-group">
                <label class="form-label">联系人</label>
                <input class="form-input" v-model="contact" @input="onHandleInput" placeholder="请输入您的称呼"/>
              </view>
              <view class="form-group">
                <label class="form-label">联系方式</label>
                <input class="form-input" v-model="phone" @input="onHandleInput" placeholder="请输入您的联系方式"/>
              </view>
            </view>
            <view class="module-footer">
              <view class="btn btn-confirm" :class="{'disable':isDisable}" @click="onHandleConfirm">提交</view>
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
        title: '',
        textarea: '',
        contact: '',
        phone: '',
        isDisable: true
      }
    },
    onLoad() {

    },
    methods: {
      onHandleInput() {
        const {title, textarea, contact, phone} = this;
        this.isDisable = !(title && textarea && contact && phone);
      },
      onHandleConfirm() {
        const {title, textarea, contact, phone, isDisable} = this;
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
