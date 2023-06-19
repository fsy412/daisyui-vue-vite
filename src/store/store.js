import { createStore } from "vuex";
import wallet from "./wallet";

export const store = createStore({
  modules: [wallet],
  state() {
    return {
      orderType: "limit",
      market: "BTC-USDT",
      quoteToken: "BTC",
      baseToken: "USDT",
    };
  },
  getters: {
    market(state) {
      return state.market;
    },
    // orderType(state) {
    //   return state.orderType
    // }
  },
  mutations: {
    setOrderType(state, payload) {
      state.orderType = payload.orderType;
    },
    setMarket(state, payload) {
      let market = payload.market;
      state.market = market;
      let arr = market.split("-");
      state.baseToken = arr[0];
      state.quoteToken = arr[1];
    },
  },
});
