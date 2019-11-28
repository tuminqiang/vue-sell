<template>
  <div id="app">
    <vheader>头部组件</vheader>
    <div>中间组件</div>
    <div>尾部组件</div>
  </div>
</template>

<script>
  import headerContain from './components/header/headerContain.vue';

  export default {
    components: {
      vheader: headerContain
    }
  };

</script>

<style lang="scss" scoped>
</style>
