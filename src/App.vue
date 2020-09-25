<script type="text/ecmascript-6">
  import * as utils from './utils';
  import * as $routes from './router';

  export default {
    onLaunch: () => {
      const systemTime = Date.now();
      const username = utils.getStorage('username');
      const password = utils.getStorage('password');
      const expireTime = utils.getStorage('expireTime') || 0;
      const isExpire = expireTime > systemTime;
      const isBoolean = isExpire && username && password;
      const path = isBoolean ? $routes.HOME.path : $routes.LOGIN.path;
      utils.reLaunch(path);
      setTimeout(() => {
        plus.navigator.closeSplashscreen();
      }, 3000);
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
