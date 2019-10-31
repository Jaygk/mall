<template>
  <div class="tab-control">
    <div :class="{active: currentIndex === index}" v-for="(item, index) in list" class="tab-item" @click="TabitemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      TabitemClick(index) {
        // console.log('ok');
        this.currentIndex = index
        this.$emit('tabControlClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    font-size: 15px;
    /*justify-content: space-around;*/
    background-color: #fff;
    /*margin-top: 10px;*/
    height: 40px;
    line-height: 40px;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .active {
    color: #f01;
  }

  .active span {
    border-bottom: 3px solid #f01;
    padding: 4px;
  }
</style>
