<template>
  <main class="flex flex-col h-screen">
    <Header />
    <TopBar class="mt-0.5" />
    <div class="h-5/6">
      <div class="flex flex-row h-full">
        <TradeMenu />
        <Orderbook />
        <div class="flex flex-col w-[70%]">
          <TradingViewSimple class="h-[60%] w-full" :market="'BTC-USDT'"></TradingViewSimple>
          <TradeTab class="h-[40%] w-full" />
        </div>
      </div>
    </div>

    <FooterBar></FooterBar>
  </main>
</template>

<script setup>
import Header from "../components/Header.vue"
import TopBar from "../components/TopBar.vue"
import TradeMenu from "../components/TradeMenu.vue"
import FooterBar from "../components/FooterBar.vue"
import Orderbook from "../components/Orderbook.vue"
import TradingViewSimple from "../components/TradingViewSimple.vue"
import TradeTab from "../components/TradeTab.vue"
</script>

<style></style>
