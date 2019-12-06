<template>
<div class="goodsContain">
  <div class="goods-menu">
    <ul class="goods-menu-ul">
      <!--goodsList代表循环整个数据中的goods数组-->
      <!--goodsItem代表的循环是数组中的每一个对象-->
      <li v-for="goodsItem in goodsList" :key="goodsItem.index" class="goods-menu-li">{{goodsItem.name}}</li>
    </ul>
  </div>
  <div class="goods-information">
    <ul>
      <!--itemFoods代表循环goodsItem对象中的每个foods数组-->
      <li v-for="itemFoods in goodsList" :key="itemFoods.name" class="goodsInfo-foods">
        <h1>{{itemFoods.name}}</h1>
        <ul>
          <!--itemFoodsInfo代表的是itemFoods数组中的每个对象-->
          <li v-for="itemFoodsInfo in itemFoods.foods" :key="itemFoodsInfo.name" class="foodsInfo">
            <div class="foodsInfo-img">
              <img :src="itemFoodsInfo.icon" width="58" height="58"/>
            </div>
            <div class="foodsInfo-info">
              <h1>{{itemFoodsInfo.name}}</h1>
              <p>{{itemFoodsInfo.description}}</p>
              <p class="foodsInfo-count">
                <span class="foodsInfoSellCount">月售{{itemFoodsInfo.sellCount}}份</span>
                <span class="foodsInfoRating">好评率{{itemFoodsInfo.rating}}%</span>
              </p>
              <p class="foodsInfo-price">
                <span class="nowPrice">￥{{itemFoodsInfo.price}}</span>
                <span class="oldPrice">￥20</span>
              </p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    name: 'goods',
    props: {
      goodsList: {
        type: Array
      }
    }
  };
</script>

<style scoped lang="scss">
.goodsContain{
  display: flex;
  position: absolute;
  top: 182px;
  bottom: 46px;
  width: 100%;
  .goods-menu{
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    /*background-color: green;*/
    .goods-menu-ul{
      .goods-menu-li{
        height: 54px;
        width: 56px;
        font-size: 12px;
        line-height: 14px;
        margin: 0 12px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
      }
    }
  }
  .goods-information{
    flex: 1;
    .goodsInfo-foods{
      .foodsInfo{
        display: flex;
        justify-content: space-between;
        .foodsInfo-img{}
        .foodsInfo-info{}
      }
    }
  }
}
</style>
