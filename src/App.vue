<template>
  <div id="app">
    <router-view/>
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
