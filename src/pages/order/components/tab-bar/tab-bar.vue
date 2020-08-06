<template>
  <view class="tab-bar">
    <view class="tab-row row">
      <view class="tab-col col-4" :class="{'active':index===tab.activeIndex}"
            v-for="(item,index) in tab.items" :key="index"
            @click="onHandleChange(index)">
        <view class="tab-text">{{item}}</view>
        <view class="tab-icon"></view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "tab-bar",
    data() {
      return {};
    },
    props: {
      tab: {
        type: Object,
        default: []
      }
    },
    methods: {
      onHandleChange(index) {
        this.$emit('change', index);
      }
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .tab-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: @white;
    box-shadow: 0 0 15px @boxShadow05;
    .tab-row {
      .tab-col {
        padding: unit(30, rpx) 0;
        text-align: center;
        color: @fontColor1;
        .tab-text {
          display: inline-block;
          vertical-align: middle;
          line-height: unit(40, rpx);
          font-size: @fontSize28;
        }
        .tab-icon {
          display: inline-block;
          vertical-align: middle;
          margin-left: unit(10, rpx);
          transition: all 300ms ease;
          border-top: unit(12, rpx) solid #000000;
          border-left: unit(8, rpx) solid @transparent;
          border-right: unit(8, rpx) solid @transparent;
        }
        &.active {
          color: @theme;
          .tab-icon {
            border-top-color: @theme;
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>