import BackTop from 'components/content/backTop/BackTop'
import {debounce} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null,
      isShow: false,
    }
  },
  methods: {
    // 返回顶部函数
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
      // console.log('ok');

    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 40)

    this.itemImageListener = () => {
      this.newRefresh()
    }
    // 通过事件总线函数监听图片加载完成后刷新BScroll
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  },
  components: {
    BackTop
  }
}
