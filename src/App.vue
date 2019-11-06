<template>
  <div id="app">
    <keep-alive exclude="Details,ShopCar">
      <router-view/>
    </keep-alive>
    <tab-bar-main v-show="$route.meta.showGuide"></tab-bar-main>
  </div>
</template>

<script>
  import TabBarMain from 'components/content/mainTabbar/TabBarMain'
  export default {
    components: {
      TabBarMain
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
