<template>
  <div class="tabs text-gray-300 md:w-1/5 2xl:w-[15%] flex flex-col justify-start p-1">
    <span class="w-full">Order Book</span>
    <div class="w-full justify-between flex text-sm text-gray-500">
      <span>Price</span>
      <span>Size</span>
    </div>

    <div v-for="(order, index) in askOrders_" :key="index" class="relative h-[18px] w-full bg-red-600 text-xs mb-0.5">
      <div class="relative flex h-[18px] items-center justify-center bg" :style="{ width: 100 - (+order.volume / totalVolume_) * 100 + '%' }">
        <span class="absolute left-2 text-white">{{ (+order.price).toFixed(3) }}</span>
      </div>
      <span class="absolute right-0.5 top-0 text-white">{{ (+order.volume).toFixed(2) }}</span>
    </div>
    <div class="mb-1 text-center text-base font-medium text-blue-700 dark:text-blue-500">Spread</div>
    <div v-for="(order, index) in bidOrders_" :key="index" class="relative h-[18px] w-full bg-green-500 text-xs mb-0.5">
      <div class="relative flex h-[18px] items-center justify-center bg" :style="{ width: 100 - (+order.volume / totalVolume_) * 100 + '%' }">
        <span class="absolute left-2 text-white">{{ (+order.price).toFixed(3) }}</span>
      </div>
      <span class="absolute right-0.5 top-0 text-white">{{ (+order.volume).toFixed(2) }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { orderbook } from "../api"
import store from "../store"
const timer = ref()
const bidOrders_ = ref([])
const askOrders_ = ref([])
const totalVolume_ = ref(0)

onMounted(() => {
  timer.value = setInterval(async () => {
    try {
      let ret = await orderbook({
        marketID: store.state.market,
      })

      let book = JSON.parse(ret)
      console.log("book", book)
      let bids = book.bids
      let asks = book.asks

      let totalVolume = 0

      // ----- bid orders -----
      let bidOrders = []
      Object.keys(bids.prices).map((price) => {
        bidOrders.push(bids.prices[price])
        totalVolume += +bids.prices[price].volume
      })
      bidOrders_.value = bidOrders.reverse()

      // ----- ask orders -----
      let askOrders = []
      Object.keys(asks.prices).map((price) => {
        askOrders.push(asks.prices[price])
        totalVolume += +asks.prices[price].volume
      })
      askOrders_.value = askOrders.reverse()
      totalVolume_.value = totalVolume
    } catch (error) {
      bidOrders_.value = []
      askOrders_.value = []
    }
  }, 1500)
})

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = ""
})
</script>

<style scoped>
.bg {
  background-color: rgb(24 24 27);
}
</style>
