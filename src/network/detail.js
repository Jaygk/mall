import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function getRecommendList() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(columns, itemInfo, shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services.slice(1)
  }
}

export class ItemParams {
  constructor(itemParams) {
    this.tables = itemParams.rule.tables[0]
    this.model = itemParams.info.set
  }
}

