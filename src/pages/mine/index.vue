<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <user/>
        <list/>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import List from "./components/list/list";
  import User from "./components/user/user";

  export default {
    components: {
      User,
      List
    },
    data() {
      return {}
    },
    methods: {},
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
      }
      .footer {
      }
    }
  }
</style>
