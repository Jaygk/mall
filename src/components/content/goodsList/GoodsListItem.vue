<template>
  <div class="goods-item">
    <div class="top">
      <img :src="item.show.img" alt="" @load="imageLoad">
    </div>
    <div class="bot">
      <p>{{item.title}}</p>
      <div class="footer">
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsListItem',
    data() {
      return {}
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style>
  .goods-item {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .top {
    flex: 8.5;
  }

  .bot {
    flex: 1.5;
  }

  .goods-item img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  .goods-item p {
    /*height: 18px;*/
    /*width: 135px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .footer {
    text-align: center;
  }

  .footer span {
    margin: 5px 10px;
    display: inline-block;
  }

  .price {
    color: #f07;
  }

  .cfav {
    position: relative;
  }

  .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
