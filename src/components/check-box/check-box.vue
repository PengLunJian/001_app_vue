<template>
  <view class="check-box" :class="{'checked':checked}" @click="onHandleChecked">
    <view class="check-icon iconfont icon-right"></view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "check-box",
    data() {
      return {}
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onHandleChecked() {
        const {checked} = this;
        this.$emit('onHandleChange', !checked);
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .check-box {
    width: unit(48, rpx);
    height: unit(48, rpx);
    line-height: unit(48, rpx);
    display: inline-block;
    vertical-align: middle;
    background-color: @borderColor1;
    border-radius: @borderRadius100;
    text-align: center;
    color: @white;
    .check-icon {
      font-size: @fontSize24;
    }
    &.checked {
      background-color: @theme;
    }
  }
</style>