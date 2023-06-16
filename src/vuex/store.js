import { createStore } from "vuex";

export const store = createStore({
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
      console.log("store", state.orderType);
    },
    setMarket(state, payload) {
      console.log("store setMarket", payload);
      let market = payload.market;
      state.market = market;

      let arr = market.split("-");
      console.log("arr", arr);
      state.baseToken = arr[0];
      state.quoteToken = arr[1];
    },
  },
});
