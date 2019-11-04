<template>
  <div class="shop-info">
    <h2>{{goodsObj.title}}</h2>
    <div class="price">
      <span>{{goodsObj.price}}</span>
      <span v-if="goodsObj.oldPrice" class="oldPrice">{{goodsObj.oldPrice}}</span>
      <span v-if="goodsObj.discountDesc" class="disDesc">{{goodsObj.discountDesc}}</span>
    </div>

    <div class="count">
      <span v-for="item in goodsObj.columns">
        {{item}}
      </span>
    </div>

    <div class="serve">
      <span v-for="item in goodsObj.services" :key="item.name">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    data() {
      return {
        isSplice: false
      }
    },
    props: {
      goodsObj: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {

    },
    created() {
      // if(!this.isSplice) {
      //   this.goodsObj.services.splice(0, 1)
      //   this.isSplice = true
      // }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin-top: 10px;
  }
  .shop-info h2 {
    font-size: 16px;
    color: #202020;
  }

  .price {
    margin: 10px 0;
    display: flex;
    /*flex-direction: column;*/
    align-items: center;
  }

  .price span:first-child {
    font-size: 22px;
    color: red;
  }

  .oldPrice {
    text-decoration: line-through;
    font-size: 13px;
    margin: 0 7px;
  }

  .disDesc {
    display: inline-block;
    /*position: relative;*/
    /*width: 30px;*/
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    height: 20px;
    /*top: -8px;*/
    /*left: 0;*/
    padding: 0 2px;
    border-radius: 5px;
    background-color: #ff6c7a;
    color: #fff;
  }

  .count {
    font-size: 13px;
    color: #a7a7a7;
    display: flex;
    justify-content: space-between;
    height: 28px;
    line-height: 28px;
    border-bottom: 1px solid #f2f2f2;
  }

  .serve {
    margin: 15px 0;
    color: #3b3b3b;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 3px solid #f2f2f2;
  }
  .serve img {
    height: 10px;
    width: 10px;
    position: relative;
    top: 1px;
  }
</style>
