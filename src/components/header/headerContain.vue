<template>
  <div class="header">
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
        <div class="descript">{{sellerList.description}}/{{sellerList.deliveryTime}}分钟送达
        </div>
        <div class="decrease">
          <span class="decimg">
            <img src="./decrease_2@2x.png"/>
          </span>
          <span class="desc">{{sellerList.supports[0].description}}</span>
        </div>
      </div>
      <div class="number" @click="getDetailShow">5个<span> > </span></div>
    </div>
    <div class="announcement" @click="getDetailShow">
      <span class="bullimg">
        <img src="./bulletin@2x.png"/>
      </span><span class="bulletin">{{sellerList.bulletin}}</span>
    </div>
    <div class="background">
      <img :src="sellerList.avatar" width="100%" height="100%"/>
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detailName">{{sellerList.name}}</div>
      <div>stttd</div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerContain',
    // 将父组件中的sellerList传给子组件使用
    props: ['sellerList'],
    data () {
      return {
        detailShow: false
      };
    },
    methods: {
      getDetailShow () {
        this.detailShow = true;
      }
    }
  };
</script>

<style scoped lang="scss">
  .header{
    background-color: rgba(7,17,27,0.5);
    color: #fff;
    overflow: hidden;
    position: relative;
    .headerContain{
      display: flex;
      position: relative;
      .logo{
        img{
          width: 70px;
          height: 70px;
          margin: 24px 16px 18px 24px;
          border-radius: 2px;
        }
      }
      .content{
        margin: 26px 0 20px 0;
        height: 64px;
        .store{
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
            font-size: 16px;
            font-weight: bold;
            line-height: 18px;
          }
        }
        .descript{
          font-size: 12px;
          font-weight: 200;
          margin: 8px 0 10px 0;
        }
        .decrease{
          .decimg{
            vertical-align: top;
            img{
              width: 16px;
              height: 16px;
            }
          }
          .desc{
            font-size: 10px;
            font-weight: 200;
            vertical-align: top;
          }
        }
      }
      .number{
        height: 24px;
        border-radius: 14px;
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 7px 8px;
        line-height: 24px;
        font-weight: 200;
      }
    }
    .announcement{
      height: 28px;
      line-height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 22px 0 12px;
      background-color: rgba(0,0,0,0.2);
      .bulletin{
        font-size: 10px;
        font-weight: 200;
        margin: 0 4px 0 4px;
        vertical-align: top;
      }
      .bullimg{
        img{
          width: 22px;
          height: 14px;
          vertical-align: top;
          margin-top: 7px;
        }
      }
    }
    .background{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);
    }
    .detail{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(7,17,27,0.8);
      filter: blur(10px);
      z-index: 100;
      overflow: auto;
    }
  }
</style>
