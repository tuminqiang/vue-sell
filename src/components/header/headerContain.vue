<template>
  <div class="header">
    <div class="headerContain">
      <div class="logo">
        <img :src="sellerList.avatar"/>
      </div>
      <div class="content">
        <div class="store">
          <span class="storeLogo">
            <img src="./images/brand@2x.png"/>
          </span>
          <span class="storeName">{{sellerList.name}}</span>
        </div>
        <div class="descript">{{sellerList.description}}/{{sellerList.deliveryTime}}分钟送达
        </div>
        <div class="decrease">
          <span class="decimg">
            <img src="./images/decrease_2@2x.png"/>
          </span>
          <span class="desc" v-if="sellerList.supports">{{sellerList.supports[0].description}}</span>
        </div>
      </div>
      <div class="number" @click="getDetailShow">5个<span> > </span></div>
    </div>
    <div class="announcement" @click="getDetailShow">
      <span class="bullimg">
        <img src="images/bulletin@2x.png"/>
      </span><span class="bulletin">{{sellerList.bulletin}}</span>
    </div>
    <div class="background">
      <img :src="sellerList.avatar" width="100%" height="100%"/>
    </div>
    <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="detailMain-name">{{sellerList.name}}</h1>
            <div class="detainMain-starts">
              <start :size="48" :score="sellerList.score"></start>
            </div>
            <div class="detainMain-text">
              <div class="detainMain-line"></div>
              <div class="detainMain-title">优惠信息</div>
              <div class="detainMain-line"></div>
            </div>
            <div class="detainMain-free">
              <div class="jian">
              <span>
                <img src="./images/decrease_2@2x.png"/>
              </span>
                <span v-if="sellerList.supports">{{sellerList.supports[0].description}}</span>
              </div>
              <div class="one">
              <span>
                <img src="./images/discount_2@3x.png"/>
              </span>
                <span v-if="sellerList.supports">{{sellerList.supports[2].description}}</span>
              </div>
              <div class="zhe">
              <span>
                <img src="./images/discount_2@2x.png"/>
              </span>
                <span>清肺雪梨汤8折抢购</span>
              </div>
              <div class="te">
              <span>
                <img src="./images/special_2@3x.png"/>
              </span>
                <span>特价饮品八折抢购</span>
              </div>
              <div class="onete">
              <span>
                <img src="./images/special_2@2x.png"/>
              </span>
                <span>单人特色套餐</span>
              </div>
            </div>
            <div class="detainMain-storeAnnounce">
              <div class="line"></div>
              <div class="announce">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="detainMain-announce">{{sellerList.bulletin}}</div>
          </div>
        </div>
        <div class="detail-close">
          <span class="clothremove" @click="delDetailShow">X</span>
        </div>
      </div>
  </div>
</template>

<script>
  import start from '../start/start';
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
      },
      delDetailShow () {
        this.detailShow = false;
      }
    },
    components: {
      start
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
      z-index: 100;
      background-color: rgba(7,17,27,0.8);
      overflow: auto;
      /*&.fade-enter-to{*/
        /*opacity: 1;*/
        /*background-color: rgba(7,17,27,0.8);*/
      /*}*/
      /*&.fade-enter,&.fade-leave{*/
        /*opacity: 0;*/
        /*background-color: rgba(7,17,27,0);*/
      }
      &.clearfix{
        display: inline-block;
        .clearfix:after{
          display: block;
          content: ".";
          height: 0;
          line-height: 0;
          clear: both;
          visibility: hidden;
        }
      }
      .detail-wrapper{
        min-height: 100%;
        width: 100%;
        .detail-main{
          margin-top: 64px;
          padding-bottom: 64px;
          color: rgb(255,255,255);
          .detailMain-name{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            text-align: center;
          }
          .detainMain-starts{
            height: 24px;
            margin: 16px auto 14px auto;
            text-align: center;
          }
          .detainMain-text{
            display: flex;
            width: 80%;
            margin: 28px auto 24px auto;
            .detainMain-line{
              flex: 1;
              position: relative;
              top: -6px;
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            .detainMain-title{
              padding: 0 12px;
              font-size: 14px;
            }
          }
          .detainMain-free{
            margin-left: 10%;
            div{
              margin-bottom: 12px;
              &:last-child{
                margin-bottom: 0;
              }
              span{
                font-size: 12px;
                line-height: 12px;
                vertical-align: top;
                img{
                  margin-left: 12px;
                  vertical-align: top;
                  height: 16px;
                }
              }
            }
          }
          .detainMain-storeAnnounce{
            width: 80%;
            margin: 28px auto 24px auto;
            display: flex;
            .line{
              flex: 1;
              position: relative;
              top: -6px;
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            .announce{
              font-size: 14px;
              line-height: 14px;
              font-weight: 700;
              padding: 0 12px;
            }
          }
          .detainMain-announce{
            margin: 0 10%;
            padding: 0 12px;
            font-size: 12px;
            line-height: 20px;
          }
        }
      }
      .detail-close{
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
      }
  }
</style>
