import { createStore } from "vuex"
import network from "./network"
import { ethers } from "ethers"

import { getWalletBalance } from "../utils/balance"

export default createStore({
  state() {
    return {
      orderType: "limit",
      market: "BTC-USDT",
      baseToken: "BTC",
      quoteToken: "USDT",
      baseWalletAmount: 0,
      quoteWalletAmount: 0,
      baseExchangeAmount: 0,
      quoteExchangeAmount: 0,
    }
  },

  actions: {
    async updateMarket({ state }, payload) {
      let market = payload.market
      state.market = market
      let arr = market.split("-")
      state.baseToken = arr[0]
      state.quoteToken = arr[1]

      state.baseWalletAmount = Number(ethers.utils.formatEther(await getWalletBalance(payload.account, arr[0], payload.chainId))).toFixed(3)
      state.quoteWalletAmount = Number(ethers.utils.formatEther(await getWalletBalance(payload.account, arr[1], payload.chainId))).toFixed(3)
    },
  },
  getters: {
    market: (state) => state.market,
    baseToken: (state) => state.baseToken,
    quoteToken: (state) => state.quoteToken,
    baseWalletAmount: (state) => state.baseWalletAmount,
    quoteWalletAmount: (state) => state.quoteWalletAmount,
    baseExchangeAmount: (state) => state.baseExchangeAmount,
    quoteExchangeAmount: (state) => state.quoteExchangeAmount,
  },
  mutations: {
    setOrderType(state, payload) {
      state.orderType = payload.orderType
    },
    setMarket(state, payload) {
      let market = payload.market
      state.market = market
      let arr = market.split("-")
      state.baseToken = arr[0]
      state.quoteToken = arr[1]
    },
  },
  modules: [network],
})
