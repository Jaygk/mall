<template>
  <div class="shop-car-nav">
    <nav-bar>
      <div slot="center">购物车({{$store.getters.getTotalCount}})</div>
      <div slot="right" class="right" @click="changeHandle">
        {{handle}}
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: 'ShopCartNav',
    data() {
      return {
        handle: '管理'
      }
    },
    components: {
      NavBar
    },
    methods: {
      changeHandle() {
        if (this.handle === '管理') {
          this.handle = '完成'
        } else {
          this.handle = '管理'
        }

        this.$emit('isManage', this.handle)
      }
    }
  }
</script>

<style scoped>
  .shop-car-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .right {
    font-size: 14px;
  }
</style>
