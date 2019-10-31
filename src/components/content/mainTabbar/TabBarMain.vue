<template>
  <div>
    <tab-bar>
      <tab-bar-item :path="'/home'">
        <img src="~assets/img/tabbar/home.svg" slot="item-svg" />
        <img src="~assets/img/tabbar/home_active.svg" slot="item-svg-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item :path="'/category'">
        <img src="~assets/img/tabbar/category.svg" slot="item-svg" />
        <img src="~assets/img/tabbar/category_active.svg" slot="item-svg-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item :path="'/shopCar'">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-svg" />
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-svg-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item :path="'/profile'">
        <img src="~assets/img/tabbar/profile.svg" slot="item-svg" />
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-svg-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../../common/tabBar/Tabbar'
  import TabBarItem from '../../common/tabBar/TabbarItem'
  export default {
    name: 'TabBarMain',
    data() {
      return {}
    },
    components: {
      TabBar,
      TabBarItem
    },
    methods: {

    }
  }
</script>

<style>

</style>
