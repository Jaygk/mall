<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar'
  }
</script>

<style scoped>
  /*@import "assets/css/base.css";*/
  #tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    /*height: 35px;*/
    /*width: 100%;*/
    background-color: #f6f6f6;
    display: flex;
    /*justify-content: space-around;*/
    /*align-items: center;*/
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
</style>
