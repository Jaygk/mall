import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null,
      isShow: false,
    }
  },
  methods: {
    debounce(func, delay=30) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    // 返回顶部函数
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000)
      // console.log('ok');

    }
  },
  mounted() {
    this.newRefresh = this.debounce(this.$refs.scroll.refresh, 40)

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
