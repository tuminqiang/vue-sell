<template>
    <div class="headerContain">
      <div class="logo">
        <img :src="sellerList.avatar"/>
      </div>
      <div class="content">
        <div class="store">
          <span class="storeLogo">
            <img src="./brand@2x.png"/>
          </span>
          <span class="storeName">{{sellerList.name}}</span>
        </div>
        <div class="descript">{{sellerList.description}}/{{sellerList.deliveryTime}}分钟送达</div>
        <div></div>
      </div>
      <div class="announcement"></div>
    </div>
</template>

<script>
  export default {
    name: 'headerContain',
    // 将父组件中的sellerList传给子组件使用
    props: ['sellerList']
  };
</script>

<style scoped lang="scss">
  .headerContain{
    display: flex;
    background-color: green;
    .logo{
      img{
        width: 64px;
        height: 64px;
        margin: 24px 16px 18px 24px;
        border-radius: 2px;
      }
    }
    .content{
      margin: 26px 0 20px 0;
      .store{
        font-size: 16px;
        font-weight: bold;
        color: rgb(255,255,255);
        line-height: 18px;
        .storeLogo{
          display: inline-block;
          img{
            width: 30px;
            height: 18px;
          }
        }
        .storeName{
          display: inline-block;
          vertical-align: top;
        }
      }
      .descript{
        font-size: 12px;
        color: rgb(255,255,255);
        font-weight: 200;
        margin: 8px 0 10px 0;
      }
    }
  }
</style>
