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
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        probeType: this.probeType,
        click: true,
        pullUpLoad: true
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
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
