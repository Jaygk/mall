<template>
  <div class="detail-recommend">
    <goods-list :list="detailRecommendList"></goods-list>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goodsList/GoodsList'

  export default {
    name: 'DetailRecommend',
    data() {
      return {}
    },
    props: {
      detailRecommendList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .detail-recommend {
    margin-top: 15px;
  }
</style>
