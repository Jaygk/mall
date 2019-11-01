<template>
  <div class="swiper">
    <Swiper>
      <swiper-item v-for="item in bannerData" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      bannerData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImgLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper {
    /*margin-top: 44px;*/
  }
</style>
