<template>
  <div class="details">
    <details-nav :nav-list="list" class="detail-nav" @toItem="toIndividItem" ref="detailNav"></details-nav>

    <Scroll class="scroll" ref="scroll" :probeType="3" :click="true" @monPos="onThemeY">
      <details-swiper :imgList="itemInfo.topImages"></details-swiper>

      <detail-base-info :goodsObj="goods"></detail-base-info>

      <detail-shop-info :shopInfoObj="shopInfo"></detail-shop-info>

      <detail-images-info :detail-image-info="detailImage" @detailImageLoad="detailScrollRefresh"></detail-images-info>

      <detail-params-info :detail-item-params="itemParams" ref="paramsInfo"></detail-params-info>

      <detail-rate :detail-rate-list="rateList" ref="detailRate"></detail-rate>

      <detail-recommend :detail-recommend-list="recommendList" ref="detailRecommend"></detail-recommend>
    </Scroll>

    <detail-bottom-bar @addToShopCar="addToCar"></detail-bottom-bar>

    <back-top @click.native="backToTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import DetailsNav from './childrenComponents/DetailsNav'
  import DetailsSwiper from './childrenComponents/DetailsSwiper'
  import DetailBaseInfo from './childrenComponents/DetailBaseInfo'
  import DetailShopInfo from './childrenComponents/DetailShopInfo'
  import DetailImagesInfo from './childrenComponents/DetailImagesInfo'
  import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
  import DetailRate from './childrenComponents/DetailRate'
  import DetailRecommend from './childrenComponents/DetailRecommend'
  import DetailBottomBar from './childrenComponents/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, ItemParams, getRecommendList} from "network/detail"

  import {itemListenerMixin} from "common/mixin";

  export default {
    name: 'Details',
    data() {
      return {
        id: null,
        list: ['商品', '参数', '评论', '推荐'],
        itemInfo: {},
        goods: {},
        shopInfo: {},
        detailImage: [],
        itemParams: {},
        rateList: [],
        recommendList: [],
        themeTop: [],
        currentIndex: 0
      }
    },
    mixins: [itemListenerMixin],
    created() {
      this.id = this.$route.params.id
      this._getDetail()
      this._getRecommendList()
    },
    components: {
      DetailsNav,
      DetailsSwiper,
      DetailBaseInfo,
      Scroll,
      DetailShopInfo,
      DetailImagesInfo,
      DetailParamsInfo,
      DetailRate,
      DetailRecommend,
      DetailBottomBar
    },
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImageListener)
    },
    methods: {
      _getDetail() {
        // console.log(this.id);
        getDetail(this.id)
          .then(res => {
            let result = res.result
            // console.log(res);
            this.itemInfo = result.itemInfo
            this.goods = new Goods(result.columns, result.itemInfo, result.shopInfo)
            this.shopInfo = result.shopInfo
            this.detailImage = result.detailInfo.detailImage
            this.itemParams = new ItemParams(result.itemParams)
            this.rateList = result.rate.list
            // console.log(this.shopInfo);
          })
      },

      _getRecommendList() {
        getRecommendList()
          .then(res => {
            // console.log(res);
            this.recommendList = res.data.list
          })
      },

      detailScrollRefresh() {
        this.newRefresh()

        this.themeTop.push(0)
        this.themeTop.push(this.$refs.paramsInfo.$el.offsetTop)
        this.themeTop.push(this.$refs.detailRate.$el.offsetTop)
        this.themeTop.push(this.$refs.detailRecommend.$el.offsetTop)
        this.themeTop.push(Number.MAX_VALUE)
      },

      toIndividItem(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTop[index], 500)
      },

      onThemeY(pos) {
        this.listenScrollTheme(-pos.y)
        this.isShow = (-pos.y) > 1000
      },

      listenScrollTheme(pos) {
        let length = this.themeTop.length

        for(let i = 0; i < length; i++) {
          let iPos = this.themeTop[i]

          if (pos >= iPos && pos < this.themeTop[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
              this.$refs.detailNav.currentIndex = this.currentIndex
            }
            break;
          }
        }
      },

      addToCar() {
        // console.log('ok');
        let shopCar = {}

        shopCar.id = this.id
        shopCar.imgUrl = this.itemInfo.topImages[0]
        shopCar.title = this.itemInfo.title
        shopCar.desc = this.itemInfo.desc
        shopCar.price = this.itemInfo.lowNowPrice
        shopCar.count = 1
        shopCar.checked = true

        this.$store.commit('addShopToCar', shopCar)
      }
    }
  }
</script>

<style scoped>
  .details {
    height: 100vh;
  }

  .detail-nav {
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
  }

  .scroll {
    margin-top: 44px;
    padding: 0 6px;
    height: calc(100% - 102px);
  }

  .details img {
    border-radius: 6px;
  }
</style>
