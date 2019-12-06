<template>
 <div class="start" :class="startType">
   <span v-for="itemClass in itemClasses" :key="itemClass.index" :class="itemClass" class="startItem"></span>
 </div>
</template>

<script>
  const LENGTH = 5;
  const CLI_ON = 'on';
  const CLI_OFF = 'off';
  const CLI_HALF = 'half';
  export default {
    name: 'start',
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    // 计算属性
    computed: {
      // 计算星星大小的类型，有24,36,48三种大小，分别对应三种不同样式
      startType () {
        return 'start-' + this.size;
      },
      itemClasses () {
        let result = [];
        let scores = Math.floor(this.score * 2) / 2;
        let integer = Math.floor(scores);
        let decimal = scores % 1 !== 0;
        for (let i = 0; i < integer; i++) {
          result.push(CLI_ON);
        }
        if (decimal) {
          result.push(CLI_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLI_OFF);
        }
        return result;
      }
    }
  };
</script>

<style scoped lang="scss">
  .start{
    font-size: 0;
    .startItem{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.start-48 {
        .startItem{
          width: 20px;
          height: 20px;
          margin-right: 22px;
          background-size: 20px 20px;
          &:last-child {
            margin-right: 0;
          }
          &.on {
            background-image: url("./images/star48_on@2x.png");
          }
          &.off {
            background-image: url("./images/star48_off@2x.png");
          }
          &.half {
            background-image: url("./images/star48_half@2x.png");
          }
        }
      }
    &.start-36 {
       .startItem{
         width: 15px;
         height: 15px;
         margin-right: 6px;
         background-size: 15px 15px;
         &:last-child {
           margin-right: 0;
         }
         &.on {
           background-image: url("./images/star36_on@2x.png");
         }
         &.off {
           background-image: url("./images/star36_off@2x.png");
         }
         &.half {
           background-image: url("./images/star36_half@2x.png");
         }
       }
     }
    &.start-24 {
      .startItem{
        width: 10px;
        height: 10px;
        margin-right: 3px;
        background-size: 10px 10px;
        &:last-child {
          margin-right: 0;
        }
        &.on {
          background-image: url("./images/star24_on@2x.png");
        }
        &.off {
          background-image: url("./images/star24_off@2x.png");
        }
        &.half {
          background-image: url("./images/star24_half@2x.png");
        }
      }
    }
  }
</style>
