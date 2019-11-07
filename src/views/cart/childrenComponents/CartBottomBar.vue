<template>
  <div class="bottom-menu">
    <div>
      <CheckButton class="select-all" v-model="isSelectAll" @click.native="bottomClick"></CheckButton>
      <span>全选</span>
    </div>
    <div v-if="isManage">
      <span class="total-price">合计: ¥{{totalPrice | handlePrice}}</span>
      <span class="buy-product" @click="settlement">去结算({{cartLength}})</span>
    </div>

    <div v-else>
      <span class="remove-product" @click="removeSelected">删除</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import {mapGetters} from 'vuex'

	export default {
		name: "BottomBar",
    data() {
      return {

      }
    },
    props: {
      isToManage: {
        type: String,
        default: ''
      }
    },
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters({
        totalPrice: 'getTotalPrice',
        cartLength: 'getRealCount',
        list: 'getList'
      }),
      isSelectAll() {
        if (this.list.length === 0) return false
        return this.list.find(item => item.checked === false) === undefined
      },
      isManage() {
        if (this.isToManage === '管理') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
		  bottomClick() {
        const obj = this.list.find(item => !item.checked)

        if (obj) {
          this.list.map(item => item.checked = true)
        } else {
          this.list.map(item => item.checked = false)
        }
      },

      settlement() {
		    const obj = this.list.find(item => item.checked)
        if (obj) return
        else {
		      this.$toast.show('请选择要购买的商品', 2000)
        }
      },

      removeSelected() {
		    this.$store.commit('removeSelectedGood')
      }
    },
    filters: {
      handlePrice(value) {
        return Number(value).toFixed(2)
      }
    },
    destroyed() {
		  this.$toast.remove()
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-right: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 80px;
    margin-right: 10px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    display: inline-block;
    border-radius: 15px;
  }

  .bottom-menu .remove-product {
    width: 50px;
    margin-right: 10px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    display: inline-block;
    border-radius: 15px;
    border: 1px solid #f01;
    color: #f01;
  }
</style>
