<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item, index) in navList" class="nav-item" :class="{active: currentIndex === index}" @click="itemClick(index)">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: 'DetailsNav',
    data() {
      return {
        // isActive: null,
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    props: {
      navList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('toItem', index)
      }
    }
  }
</script>

<style scoped>
  .center {
    font-size: 13px;
    display: flex;
    justify-content: space-around;
  }

  .left img {
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }

  .active {
    color: #f01;
  }
</style>
