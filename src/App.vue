<template>
  <div class="contain">
    <vheader>头部组件</vheader>
    <div class="middle">
      <router-link to="/goods">商品</router-link>
      <router-link to="/comments">评论</router-link>
      <router-link to="/store">商家</router-link>
    </div>
    <hr>
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import headerContain from './components/header/headerContain';
  import footerContain from './components/footer/footerContain';

  export default {
    components: {
      vheader: headerContain,
      vfooter: footerContain
    }
  };

</script>

<style lang="scss" scoped>
  .contain{
    .middle{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      a{
        flex: 1;
        text-align: center;
        color: rgb(77,85,93);
        font-size: 14px;
      }
      .router-link-exact-active,router-link-active{
        color: rgb(240,20,20);
      }
      hr{
        color: rgb(7,17,27);
      }
    }
  }
</style>
