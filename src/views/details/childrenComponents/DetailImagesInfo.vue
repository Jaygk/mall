<template>
  <div class="image-info">
    <div v-for="item in detailImageInfo" :key="item.key" class="image-info-item">
      <h3>{{item.key}}</h3>
      <div class="desc">
        <div class="left">
          <span class="dot"></span>
          <span class="line"></span>
        </div>
        <br>
        <div class="desc-text">{{item.desc ? item.desc : '暂无描述'}}</div>

        <div class="right">
          <span class="line"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div class="image">
        <div v-for="imageItem in item.list" :key="imageItem">
          <img :src="imageItem" alt="" @load="detailImgLoad">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailImagesInfo',
    data() {
      return {
        count: 0,
        imagesLength: 0
      }
    },
    props: {
      detailImageInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      detailImgLoad() {
        if (++this.count === this.imagesLength) {
          this.$emit('detailImageLoad')
        }
      }
    },
    watch: {
      detailImageInfo() {
        this.imagesLength = this.detailImageInfo[0].list.length
      }
    }
  }
</script>

<style scoped>
  .image-info {
    margin-top: 8px;
    width: 100%;
  }

  .image-info-item .desc {
    width: 100%;
    /*height: 80px;*/
  }

  .desc {
    margin-bottom: 10px;
    padding: 0 8px;
  }

  .desc span {
    display: inline-block;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: #000000;
  }

  .line {
    height: 1px;
    width: 80px;
    background-color: #1a1a1a;
  }

  .desc-text {
    font-size: 13px;
  }

  .image {
    width: 100%;
    /*margin: 10px 0;*/
    margin-top: 30px;
  }

  .image-info h3 {
    padding-left: 8px;
    font-size: 14px;
    margin: 10px 0;
    font-weight: normal;
  }

  .image img {
    width: 100%;

  }
</style>
