<template>
  <div class="home">
    <!--导航栏-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <Scroll class="content" ref="scroll" @monPos="getPos" :probe-type="3" @pullUp="getMore">
      <!--轮播图-->
      <home-swiper :bannerData="banner"></home-swiper>

      <recommend-view :recommendData="recommend"></recommend-view>

      <feature-view></feature-view>

      <tab-control :list="tabList" class="tab-control" @tabControlClick="fatherClick"></tab-control>

      <goods-list :list="goods[currentType].list"></goods-list>

    </Scroll>

    <back-top @click.native="backToTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import HomeSwiper from './childrenComponents/HomeSwiper'
  import RecommendView from './childrenComponents/RecommendView'
  import FeatureView from './childrenComponents/FeatureView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getMultiData, getHomeGoods} from "network/home";

  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend: [],
        tabList: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: false
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this._getMultiData()

      this._getHomeGoods('pop')
      this._getHomeGoods('new')
      this._getHomeGoods('sell')
    },
    methods: {
      fatherClick(data) {
        switch (data) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 1000)
        // console.log('ok');

      },

      getPos(res) {
        this.isShow = (-res.y) > 1000
      },

      getMore() {
        this._getHomeGoods(this.currentType)
      },

      _getMultiData() {
        getMultiData().then(res => {
          // console.log(res);
          this.banner = res.banner.list
          this.recommend = res.recommend.list
        })
      },
      _getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page)
          .then(res => {
            // console.log(res);
            this.goods[type].list.push(...res.list)
            this.goods[type].page++
            this.$refs.scroll.scroll.finishPullUp()
          })
      }
    },
    mounted() {
      // this.getPos()
      // console.log(this.position);
    }
  }
</script>

<style scoped>
  .home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .content {
    /*overflow: hidden;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
