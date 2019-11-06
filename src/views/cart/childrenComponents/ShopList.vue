<template>
  <div class="shop-list" v-if="$store.state.shopCarList.length">
    <shop-list-item v-for="item in cartList" :cartItem="item"></shop-list-item>
  </div>
</template>

<script>
  import ShopListItem from './ShopListItem'

  export default {
    name: 'ShopList',
    data() {
      return {}
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      ShopListItem
    }
  }
</script>

<style scoped>
  .shop-list {
    width: 100%;
  }
</style>
