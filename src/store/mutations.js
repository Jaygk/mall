export default {
  addCounter(state, shop) {
    shop.count++
  },

  addToCart(state, shop) {
    state.shopCarList.push(shop)
  },

  removeShop(state, id) {
    const index = state.shopCarList.findIndex(item => item.id === id)
    state.shopCarList.splice(index, 1)
  },

  increaseCount(state, id) {
    const index = state.shopCarList.findIndex(item => item.id === id)
    state.shopCarList[index].count++
  },

  decreaseCount(state, id) {
    const index = state.shopCarList.findIndex(item => item.id === id)
    state.shopCarList[index].count--
  },
  removeSelectedGood(state) {
    state.shopCarList = state.shopCarList.filter(item => !item.checked)
  }
}
