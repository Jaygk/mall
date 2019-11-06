<template>
  <div class="shop-cart">
    <nav-bar class="shop-car-nav"><div slot="center">购物车({{$store.getters.getTotalCount}})</div></nav-bar>

    <scroll class="scroll-main" :click="true" ref="scroll">
      <shop-list :cartList="list"></shop-list>
    </scroll>

    <cart-bottom-bar :isSelected="selected" @cartBottomClick="bottomClick"></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import ShopList from './childrenComponents/ShopList'
  import CartBottomBar from './childrenComponents/CartBottomBar'

  import {mapGetters} from 'vuex'

  import {debounce} from "common/utils";

  export default {
    name: 'ShopCar',
    data() {
      return {
        newRefresh: null
      }
    },
    components: {
      NavBar,
      ShopList,
      CartBottomBar,
      Scroll
    },
    created() {
      this.$store.commit('handleSelected')
      // console.log('create');
      // console.log(this.list.length);
    },
    computed: {
      ...mapGetters({
        list: 'getList',
        selected: 'getSelected'
      })
    },
    methods: {
      bottomClick() {
        this.$store.commit('changeSelected')
      }
    },
    mounted() {
      this.newRefresh = debounce(this.$refs.scroll.refresh, 40)

      this.itemImageListener = () => {
        this.newRefresh()
      }
      // 通过事件总线函数监听图片加载完成后刷新BScroll
      this.$bus.$on('cartImgLoad', this.itemImageListener)
    }
  }
</script>

<style>
  .shop-car-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .shop-cart {
    height: 100vh;
  }

  .scroll-main {
    margin-top: 44px;
    height: calc(100% - 93px - 44px);
  }
</style>
