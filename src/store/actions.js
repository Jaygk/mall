export default {
  addShopToCar(context, shop) {
    return new Promise(resolve => {
      let obj = context.state.shopCarList.find(item => item.id === shop.id)
      if (obj) {
        // obj.count++
        context.commit('addCounter', obj)
        // resolve('商品数量+1')
      } else {
        // state.shopCarList.push(shop)
        context.commit('addToCart', shop)
      }
      resolve('加入购物车成功')
    })
  }

}
