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
                <label class="form-label">姓名</label>
                <input class="form-input" v-model="name" type="text"
                       placeholder="请输入您的名字"
                       @input="onHandleCheckInput"/>
              </view>
              <view class="form-group">
                <label class="form-label">身份证号码</label>
                <input class="form-input" v-model="idCard" type="number"
                       placeholder="请输入您的证件号码"
                       @input="onHandleCheckInput"/>
              </view>
              <view class="form-group">
                <label class="form-label">手机号</label>
                <input class="form-input" v-model="phone" type="number"
                       placeholder="请输入您的手机号"
                       @input="onHandleCheckInput"/>
              </view>
              <view class="form-group">
                <label class="form-label">营业时间</label>
                <picker mode="date" :value="date" @change="onHandleSelectDate">
                  <input class="form-input" v-model="date" disabled
                         placeholder="请输入您的营业时间"/>
                </picker>
              </view>
              <view class="form-group">
                <label class="form-label">月营业额</label>
                <input class="form-input" v-model="price" type="number"
                       placeholder="请输入您的月营业额"
                       @input="onHandleCheckInput"/>
              </view>
              <view class="form-group">
                <label class="form-label">经营地址</label>
                <input class="form-input" v-model="address" type="text"
                       placeholder="请输入您的经营地址"
                       @input="onHandleCheckInput"/>
              </view>
            </view>
            <view class="module-footer">
              <view class="btn btn-confirm" :class="{'disable':isDisable}"
                    @click="onHandleConfirm">提交
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
        name: '',
        idCard: '',
        phone: '',
        date: '',
        price: '',
        address: '',
        isDisable: true
      }
    },
    onLoad() {

    },
    methods: {
      onHandleSelectDate(e) {
        const {value} = e.detail;
        this.date = value;
        this.onHandleCheckInput();
      },
      onHandleCheckInput() {
        const {
          name, idCard,
          phone, date,
          price, address
        } = this;
        this.isDisable = !(name && idCard && phone && date && price && address);
      },
      onHandleConfirm() {
        const {
          name, idCard,
          phone, date,
          price, address,
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
