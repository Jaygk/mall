<template>
  <div class="home">
    <!--导航栏-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :list="tabList" class="tab-control1" @tabControlClick="fatherClick" ref="tabControl1" v-show="isFixed"></tab-control>

    <Scroll class="content" ref="scroll" @monPos="getPos" :probe-type="3" :click="true" :pullUpLoad="true" @pullUp="getMore">
      <!--轮播图-->
      <home-swiper :bannerData="banner" @swiperImageLoad="getTabConPos"></home-swiper>

      <recommend-view :recommendData="recommend"></recommend-view>

      <feature-view></feature-view>

      <tab-control :list="tabList" class="tab-control2" @tabControlClick="fatherClick" ref="tabControl2"></tab-control>

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

  import {debounce} from "common/utils";

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
        isShow: false,
        tabConTop: null,
        isFixed: false
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
      // 根据子组件TabControl传过来的下标值,返回对应的type
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

        // 确保两个tabControl组件的下标值一样
        this.$refs.tabControl1.currentIndex = data
        this.$refs.tabControl2.currentIndex = data
      },

      // 返回顶部函数
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 1000)
        // console.log('ok');

      },

      // 获取滚动距离
      getPos(res) {
        this.isShow = (-res.y) > 1000
        this.isFixed = (-res.y) > this.tabConTop
      },

      // 加载更多
      getMore() {
        this._getHomeGoods(this.currentType)
      },

      // 获取TabControl组件的offsetTop
      getTabConPos() {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabConTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求函数
       * @private
       */
      // 获取轮播图和推荐列表数据
      _getMultiData() {
        getMultiData().then(res => {
          // console.log(res);
          this.banner = res.banner.list
          this.recommend = res.recommend.list
        })
      },

      // 获取商品列表数据
      _getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page)
          .then(res => {
            // console.log(res);
            this.goods[type].list.push(...res.list)
            this.goods[type].page++
            this.$refs.scroll.finishPullUp()
          })
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 40)
      // 通过事件总线函数监听图片加载完成后刷新BScroll
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
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

  .content {
    /*overflow: hidden;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control1 {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
</style>
