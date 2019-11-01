<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar-main></tab-bar-main>
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
