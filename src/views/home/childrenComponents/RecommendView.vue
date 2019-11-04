<template>
  <div class="recommend-view">
    <div v-for="item in recommendData" :key="item.link" class="recommend-item">
      <a :href="item.link" class="main">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    data() {
      return {}
    },
    props: {
      recommendData: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend-view {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
    justify-content: space-around;
  }

  .recommend-item {
    /*flex: 1;*/
    text-align: center;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
