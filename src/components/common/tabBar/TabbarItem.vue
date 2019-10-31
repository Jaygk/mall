<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-svg"></slot>
    </div>
    <div v-else>
      <slot name="item-svg-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    data() {
      return {
        // isActive: true
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path)
      },
      activeStyle() {
        return !this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    height: 49px;
    /*font-size: 18px;*/
    /*line-height: 49px;*/
    text-align: center;
    flex: 1;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  /*.tab-bar-item div {*/
    /*height: 25px;*/
    /*width: 50px;*/
  /*}*/
  .active {
    color: red;
  }
</style>
