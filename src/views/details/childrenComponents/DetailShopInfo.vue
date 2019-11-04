<template>
  <div class="shop-info">
    <div class="shop-info-top">
      <img :src="shopInfoObj.shopLogo" alt="">
      <h2>{{shopInfoObj.name}}</h2>
    </div>
    <div class="shop-info-center">
      <div class="left">
        <div>
          <span>{{shopInfoObj.cSells | handleCount}}</span>
          <span>总销量</span>
        </div>
        <div>
          <span>{{shopInfoObj.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>

      <div class="middle">
        <div></div>
      </div>

      <div class="right">
        <div v-for="item in shopInfoObj.score" :key="item.name" class="right-item">
          <span>{{item.name}}</span>
          <div :class="{better: item.isBetter}">
            <span class="score">{{item.score}}</span>
            <span class="isHigh">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="shop-info-bottom">
      <span class="toShop">进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    data() {
      return {}
    },
    props: {
      shopInfoObj: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      handleCount(data) {
        if(data < 10000) return data
        else {
          return (data / 10000).toFixed(1) + '万'
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin-top: 10px;
    border-bottom: 3px solid #f0f0f0;
    padding-bottom: 18px;
  }

  .shop-info-top {
    display: flex;
    align-items: center;
  }

  .shop-info-top h2 {
    font-weight: normal;
    font-size: 16px;
    color: #5b5b5b;
    margin-left: 10px;
  }

  .shop-info-top img {
    height: 46px;
    width: 46px;
    border-radius: 50%;
  }

  .shop-info-center {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    color: #4f4f4f;
  }

  .shop-info-center .left {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 4.5;
  }

  .shop-info-center .left div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
  }

  .shop-info-center .middle {
    display: flex;
    justify-content: center;
  }

  .shop-info-center .middle div {
    flex: 0.5;
    height: 40px;
    width: 2px;
    background-color: #ededed;
  }

  .shop-info-center .right {
    flex: 4.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .shop-info-center .right .right-item {
    font-size: 13px;
    margin-bottom: 5px;
    width: 68%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 18px;
    line-height: 18px;
  }

  .score {
    display: inline-block;
    width: 26px;
    text-align: left;
  }

  .score {
    color: green;
  }

  .isHigh {
    background-color: green;
    color: #fff;
    margin-left: 5px;
  }

  .better .score {
    color: #f01;
  }

  .better .isHigh {
    background-color: #f01;
    color: #fff;
  }

  .shop-info-bottom {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
  .toShop {
    width: 45%;
    background-color: #f1f5fb;
    text-align: center;
    height: 28px;
    line-height: 28px;
    display: inline-block;
    border-radius: 8px;
    font-size: 13px;
  }
</style>
