<template>
  <div class="contain">
    <vheader :sellerList="sellerList">头部组件</vheader>
    <div class="middle">
      <router-link to="/goods">商品</router-link>
      <router-link to="/comments">评论</router-link>
      <router-link to="/store">商家</router-link>
    </div>
    <router-view :goodsList="goodsList"></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import headerContain from './components/header/headerContain';
  import footerContain from './components/footer/footerContain';

  export default {
    data () {
      return {
        sellerList: [],
        goodsList: []
      };
    },
    created () {
      this.getSeller();
      this.getGoods();
    },
    methods: {
      getSeller () {
        this.axios.get('api/seller').then(res => {
          if (res.status === 200) {
            this.sellerList = res.data.value;
          }
        });
      },
      getGoods () {
        this.axios.get('api/goods').then(res => {
          if (res.status === 200) {
            this.goodsList = res.data.value;
          }
        });
      }
    },
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
    }
  }
</style>
