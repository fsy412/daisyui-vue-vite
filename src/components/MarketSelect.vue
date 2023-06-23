<template>
  <div class="dropdown w-1/5 2xl:w-[15%] bg-gray-500">
    <label tabindex="0" class="btn w-full rounded-sm text-2xl">{{ store.getters.market }}</label>
    <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-sm w-full">
      <li>
        <a class="text-center w-full flex flex-row justify-center" @click="handleClick('BTC-USDT')">BTC-USDT</a>
      </li>
      <li>
        <a class="text-center w-full flex flex-row justify-center" @click="handleClick('FTM-USDT')">FTM-USDT</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useStore } from "vuex"
const store = useStore()

function setMarketType(market) {
  store.commit("setMarket", { market })
}

const handleClick = (market) => {
  store.dispatch("updateMarket", { market, account: store.getters.account, chainId: store.getters.chainId })
  const elem = document.activeElement
  elem?.blur()
  setMarketType(market)
}
</script>
<style></style>
