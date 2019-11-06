export default {
  getTotalCount(state) {
    return state.shopCarList.reduce((pre, cur) => pre + cur.count, 0)
  },

  getTotalPrice(state) {
    return state.shopCarList.filter(item => item.checked).reduce((pre, cur) => pre + cur.price * cur.count, 0)
  },

  getRealCount(state) {
    return state.shopCarList.filter(item => item.checked).reduce((pre, cur) => pre + cur.count, 0)
  },

  getSelected(state) {
    return state.selected
  },

  getList(state) {
    return state.shopCarList
  },


}
