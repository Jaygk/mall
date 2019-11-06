<template>
  <div class="shop-list-item">
    <check-button v-model="cartItem.checked" @checkBtnClick="buttonClick"></check-button>
    <div class="left">
      <img :src="cartItem.imgUrl" alt="" @load="cartImageLoad">
    </div>
    <div class="right">
      <h3>{{cartItem.title}}</h3>
      <p class="content">{{cartItem.desc}}</p>
      <div>
        <span class="price">￥{{cartItem.price}}</span>
        <span class="count">x{{cartItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: 'ShopListItem',
    data() {
      return {}
    },
    props: {
      cartItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      buttonClick() {
        this.cartItem.checked = !this.cartItem.checked
        this.$store.commit('handleSelected')
      },

      cartImageLoad() {
        this.$bus.$emit('cartImgLoad')
      }
    }
  }
</script>

<style scoped>
  .shop-list-item {
    width: 100%;
    height: 120px;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 5px;
    align-items: center;
  }

  .left {
    /*flex: 4;*/
    margin-left: 5px;
  }

  .left img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }

  .right {
    height: 100px;
    position: relative;
    /*flex: 6;*/
    margin: 0 10px;
  }

  .right h3,
  .right p {
    font-size: 15px;
    font-weight: normal;
    color: #000;
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*width: 60%;*/
    width: 200px;
  }

  .right p {
    margin-top: 5px;
    font-size: 13px;
  }

  .price {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fc9661;
  }

  .count {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
</style>
