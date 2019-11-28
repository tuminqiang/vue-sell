<template>
  <div id="app">
    <vheader>头部组件</vheader>
    <div>
      <div>商品</div>
      <div>评论</div>
      <div>商家</div>
    </div>
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
