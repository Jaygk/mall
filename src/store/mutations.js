export default {
  addShopToCar(state, shop) {
    let obj = state.shopCarList.find(item => item.id === shop.id)
    if (obj) {
      obj.count++
    } else {
      state.shopCarList.push(shop)
    }
  },

  handleSelected(state) {
    // console.log(state.shopCarList.length);
    let obj = state.shopCarList.find(item => item.checked === false)

    if (obj) {
      state.selected = false
    } else {
      state.selected = true
    }

    if (state.shopCarList.length === 0) {
      // console.log('ok');
      state.selected = false
    }
  },

  changeSelected(state) {
    state.selected = !state.selected

    state.shopCarList.map(item => item.checked = state.selected)
  }
}
