<template>
  <div class="tabs tabs-boxed bg-neutral text-gray-200">
    <a class="tab text-gray-200" :class="{ 'tab-active': tab == 1 }" @click="onTab(1)">Open Order</a>
    <a class="tab text-gray-200" :class="{ 'tab-active': tab == 2 }" @click="onTab(2)">Trade History</a>
  </div>
  <div v-if="tab == 1" class="overflow-x-auto w-full">
    <table class="w-full table-md">
      <thead class=" ">
        <tr class="text-gray-300 text-left">
          <th class="sticky top-0 bg-[#18181b]">Market</th>
          <th class="sticky top-0 bg-[#18181b]">Type</th>
          <th class="sticky top-0 bg-[#18181b]">Side</th>
          <th class="sticky top-0 bg-[#18181b]">Size</th>
          <th class="sticky top-0 bg-[#18181b]">Price</th>
          <th class="sticky top-0 bg-[#18181b]">Filled</th>
          <th class="sticky top-0 bg-[#18181b]">Time</th>
          <th class="sticky top-0 bg-[#18181b]">Operation</th>
        </tr>
      </thead>
      <tbody class="text-gray-400">
        <tr v-for="(item, index) in orders" :key="index" class="h-10 hover:bg-slate-700">
          <th class="text-left">{{ store.getters.market }}</th>
          <td>{{ item.Type }}</td>
          <td class="capitalize">{{ item.side }}</td>
          <td>{{ Number(item.quantity).toFixed(3) }}</td>
          <td>{{ Number(item.price).toFixed(2) }}</td>
          <td>{{ Number(0).toFixed(2) }}</td>
          <td>{{ formatTime(item.timestamp) }}</td>
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
        <tr v-for="(item, index) in orders" :key="index" class="h-10 hover:bg-gray-300">
          <th class="text-left">{{ store.getters.market }}</th>
          <td>{{ item.Type }}</td>
          <td class="capitalize">{{ item.side }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td>{{ 0 }}</td>
          <td>{{ formatTime(item.timestamp) }}</td>
          <td class=" "><button class="btn btn-xs">Cancel</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { openOrders } from "../api"
import { useStore } from "vuex"
import moment from "moment"
const store = useStore()
const orders = ref([])
const timer = ref()
const tab = ref(1)

const onTab = (val) => {
  tab.value = val
}

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

const formatTime = (isoStr) => {
  const date = new Date(isoStr)
  const timestamp = date.getTime()
  let offset = new Date() + ""
  let timezone = offset.indexOf("GMT")
  let timezoneId = offset.substring(timezone + 3, timezone + 8)
  let orderDate = moment(timestamp).utcOffset(timezoneId).format("YYYY-MM-DD HH:mm:ss")
  return orderDate
}
</script>

<style scoped></style>
