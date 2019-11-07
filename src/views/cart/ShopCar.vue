<template>
  <div class="shop-cart">
    <shop-cart-nav @isManage="changeManage"></shop-cart-nav>

    <scroll class="scroll-main" :click="true" ref="scroll">
      <shop-list :cartList="list"></shop-list>
    </scroll>

    <cart-bottom-bar :isToManage="handle"></cart-bottom-bar>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import ShopList from './childrenComponents/ShopList'
  import CartBottomBar from './childrenComponents/CartBottomBar'
  import ShopCartNav from './childrenComponents/ShopCartNav'

  import {debounce} from "common/utils";

  import {mapGetters} from 'vuex'

  export default {
    name: 'ShopCar',
    data() {
      return {
        newRefresh: null,
        handle: '管理'
      }
    },
    components: {
      ShopCartNav,
      ShopList,
      CartBottomBar,
      Scroll
    },
    created() {

    },
    computed: {
      ...mapGetters({
        list: 'getList'
      })
    },
    methods: {
      changeManage(data) {
        this.handle = data
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
  .shop-cart {
    height: 100vh;
  }

  .scroll-main {
    margin-top: 44px;
    height: calc(100% - 93px - 44px);
  }
</style>
