<template>
  <div class="toast" v-show="isShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(msg='默认信息', delay=2000) {
        this.message = msg
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, delay)
      },

      remove() {
        this.isShow = false
      }
    }
  }
</script>

<style scoped>
  .toast {
    /*width: 120px;*/
    display: flex;
    align-items: center;
    padding: 8px 10px;
    height: 40px;
    /*line-height: 40px;*/
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    border-radius: 6px;
  }
</style>
