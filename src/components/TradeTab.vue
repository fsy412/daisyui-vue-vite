<template>
  <div class="tabs tabs-boxed bg-neutral text-gray-200">
    <a class="tab text-gray-200" :class="{ 'tab-active': tab == 1 }" @click="onTab(1)">Open Order</a>
    <a class="tab text-gray-200" :class="{ 'tab-active': tab == 2 }" @click="onTab(2)">Trade History</a>
  </div>
  <div v-if="tab == 1" class="overflow-x-auto w-full">
    <table class="w-full">
      <thead class=" ">
        <tr class="text-gray-300 text-left">
          <th class="">Market</th>
          <th>Type</th>
          <th>Side</th>
          <th>Size</th>
          <th>Price</th>
          <th>Filled</th>
          <th>Time</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody class="text-gray-400">
        <tr v-for="(item, index) in orders" :key="index" class="">
          <th class="text-left">{{ store.getters.market }}</th>
          <td>{{ item.Type }}</td>
          <td class="capitalize">{{ item.side }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td>{{ 0 }}</td>
          <td>{{ item.timestamp }}</td>
          <td class=" "><button class="btn btn-xs">Cancel</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="tab == 2" class="overflow-x-auto w-full">
    <table class="w-full">
      <thead class=" ">
        <tr class="text-gray-300 text-left">
          <th class="">Market</th>
          <th>Type</th>
          <th>Side</th>
          <th>Size</th>
          <th>Price</th>
          <th>Executed</th>
          <th>Total</th>
          <th>Role</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody class="text-gray-400">
        <tr v-for="(item, index) in trades" :key="index" class="">
          <th class="text-left">{{ item.Market }}</th>
          <td>{{ item.Type }}</td>
          <td>{{ item.Side }}</td>
          <td>{{ item.Size }}</td>
          <td>{{ item.Price }}</td>
          <td>{{ item.Filled }}</td>
          <td>{{ 12 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { openOrders } from "../api"
import { useStore } from "vuex"

const store = useStore()
const orders = ref([])

const tab = ref(1)
const onTab = (val) => {
  tab.value = val
}
const trades = [
  {
    Market: "BTC-USDT",
    Type: "Market",
    Side: "Buy",
    Size: "100",
    Price: "100",
    Filled: "0",
  },
]

const timer = ref()
onMounted(() => {
  timer.value = setInterval(async () => {
    try {
      let orderList = await openOrders({ address: store.getters.account, marketId: store.getters.market })
      console.log("open orders", orderList)
      orders.value = orderList
    } catch (error) {}
  }, 1500)
})

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = ""
})
</script>

<style scoped>
.btn {
  min-height: 1rem;
}
</style>
