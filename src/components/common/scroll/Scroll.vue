<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default() {
          return 0
        }
      },
      click: {
        type: Boolean,
        default: false
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad
      })

      this.scroll.on('scroll', pos => {
        // console.log(pos.y);
        this.$emit('monPos', pos)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullUp')
      })
    },
    methods: {
      scrollTo(x, y, time=500) {
        // console.log(this.scroll.scrollTo);
        // console.log(x, y);
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },

      refresh() {
        this.scroll && this.scroll.refresh()
        // console.log('---');
      },

      getSaveY() {
        return this.scroll.y ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
