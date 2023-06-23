<template>
  <div class="tabs text-gray-300 md:w-1/5 2xl:w-[15%] flex flex-col justify-start p-1">
    <span class="w-full">Order Book</span>
    <div class="w-full justify-between flex text-xs text-gray-500">
      <span>Price({{ store.state.quoteToken }})</span>
      <span>Size({{ store.state.baseToken }})</span>
    </div>

    <div v-for="(order, index) in askOrders_" :key="index" class="relative h-[18px] w-full bg-red-600 text-xs mb-0.5">
      <div class="relative flex h-[18px] items-center justify-center bg" :style="{ width: 100 - (Number(order.quantity) / totalVolume_) * 100 + '%' }">
        <span class="absolute left-2 text-white">{{ Number(order.price).toFixed(3) }}</span>
      </div>
      <span class="absolute right-0.5 top-0 text-white">{{ Number(order.quantity).toFixed(2) }}</span>
    </div>
    <div class="mb-1 text-center text-base font-medium text-blue-700 dark:text-blue-500">Spread</div>
    <div v-for="(order, index) in bidOrders_" :key="index" class="relative h-[18px] w-full bg-green-500 text-xs mb-0.5">
      <div class="relative flex h-[18px] items-center justify-center bg" :style="{ width: 100 - (Number(order.quantity) / totalVolume_) * 100 + '%' }">
        <span class="absolute left-2 text-white">{{ Number(order.price).toFixed(3) }}</span>
      </div>
      <span class="absolute right-0.5 top-0 text-white">{{ Number(order.quantity).toFixed(2) }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { orderbook } from "../api"
import { useStore } from "vuex"

const store = useStore()
const timer = ref()
const bidOrders_ = ref([])
const askOrders_ = ref([])
const totalVolume_ = ref(0)

onMounted(() => {
  timer.value = setInterval(async () => {
    try {
      let ret = await orderbook({
        marketID: store.getters.market,
      })

      let bids = ret[1]
      let asks = ret[0]
      let totalVolume = 0

      bids.map((item) => (totalVolume += Number(item.quantity)))
      asks.map((item) => (totalVolume += Number(item.quantity)))

      bidOrders_.value = bids
      askOrders_.value = asks
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
