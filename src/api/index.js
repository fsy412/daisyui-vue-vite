import request from "../utils/axios"

export function placeOrder(data) {
  return request({
    url: "/order/place",
    method: "post",
    data,
  })
}

export function cancelOrder(data) {
  return request({
    url: "/order/cancel",
    method: "post",
    data,
  })
}

export function openOrder(data) {
  return request({
    url: "/order/open",
    method: "post",
    data,
  })
}

export function orderbook(data) {
  return request({
    url: "/orderbook",
    method: "post",
    data,
  })
}

export function kline(data) {
  return request({
    url: "/kline",
    method: "post",
    data,
  })
}

export function confirmOrder(data) {
  return request({
    url: "/confirm",
    method: "post",
    data,
  })
}

export function confirmExecute(data) {
  return request({
    url: "/execute",
    method: "post",
    data,
  })
}

export function openOrders(data) {
  return request({
    url: "/open_orders",
    method: "post",
    data,
  })
}
