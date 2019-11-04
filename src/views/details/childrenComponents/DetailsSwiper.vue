<template>
  <Swiper>
    <swiper-item v-for="item in imgList" class="details-swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'DetailsSwiper',
    data() {
      return {}
    },
    methods: {

    },
    props: {
      imgList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      SwiperItem,
      Swiper
    }
  }
</script>

<style scoped>
  .details-swiper-item {
    width: 100%;
    height: 250px;
  }

  .details-swiper-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
