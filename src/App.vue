<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  created() {
    if (this.$router) {
      this.$router.afterEach(() => {
        window.scrollTo(0, 0)
      })
    }
  }
}
</script>

<style lang="less">
@import '../src/style/base/import.all.less';

.mx_reset();

#app {
  height: 100%;
  width: 100%;
  background-image: radial-gradient(ellipse at 50% 10%, #acc8b4 30%, #5b816e);
  min-height: 736px;
}
</style>
