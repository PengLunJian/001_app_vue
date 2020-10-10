<script type="text/ecmascript-6">
  import * as utils from './utils';

  export default {
    onLaunch: () => {
      utils.onHandleVersion();
      utils.onHandleAutoLogin();
    },
    onShow: () => {
    },
    onHide: () => {
    }
  }
</script>

<style lang="less">
  .container {
    .content {

    }
  }
</style>
