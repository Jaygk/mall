<template>
  <div class="shop-list-item">
    <check-button v-model="cartItem.checked" @checkBtnClick="buttonClick"></check-button>
    <div class="left">
      <img :src="cartItem.imgUrl" alt="" @load="cartImageLoad">
    </div>
    <div class="right">
      <h3>{{cartItem.title}}</h3>
      <p class="content">{{cartItem.desc}}</p>
      <div class="bottom">
        <span class="price">￥{{cartItem.price}}</span>
        <span class="remove" @click="removeItem">移除</span>
        <span class="count">
          <button @click="decrease" :disabled="cartItem.count <= 1">-</button>
          {{cartItem.count}}
          <!--<input type="number" name="" id="" v-model="">-->
          <button @click="increase">+</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  import {mapGetters} from 'vuex'

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
      },

      cartImageLoad() {
        this.$bus.$emit('cartImgLoad')
      },
      removeItem() {
        this.$store.commit('removeShop', this.cartItem.id)
      },

      decrease() {
        this.$store.commit('decreaseCount', this.cartItem.id)
      },

      increase() {
        this.$store.commit('increaseCount', this.cartItem.id)
      }
    },
    computed: {
      ...mapGetters({
        list: 'getList'
      })
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

  .right .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    height: 22px;
    line-height: 22px;
    color: #fc9661;
  }

  .count {
    height: 22px;
    line-height: 22px;
  }

  .count button {
    padding: 0 5px;
    font-size: 13px;
    margin: 2px;
  }

  .remove {
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    margin-left: 20px;
    padding: 0 10px;
    background-color: #f01;
    color: #fff;
    border-radius: 8px;
  }
</style>
