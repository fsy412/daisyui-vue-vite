<template>
  <div class="flex w-full flex-col mt-2 p-1">
    <span class="text-gray-300">Balance</span>
    <div class="mt-2 flex flex-row justify-evenly text-sm text-gray-500">
      <span class="text-left w-full">Asset</span>
      <span class="text-left w-center">Wallet</span>
      <span class="text-right w-full">Exchange</span>
    </div>
    <div class="mt-1 flex flex-row justify-evenly text-sm text-gray-200">
      <span class="text-left w-full">{{ store.getters.baseToken }}</span>
      <span class="text-left w-center">{{ store.getters.baseWalletAmount }}</span>
      <span class="text-right w-full">0</span>
    </div>
    <div class="mt-1 flex flex-row justify-evenly text-sm text-gray-200">
      <span class="text-left w-full">{{ store.getters.quoteToken }}</span>
      <span class="text-left w-center">{{ store.getters.quoteWalletAmount }}</span>
      <span class="text-right w-full">0</span>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, reactive } from "vue"
import { useStore } from "vuex"
import { onMounted } from "vue";
const store = useStore()
watch(
  () => store.getters.market,
  () => {
    console.log("Asset changes detected", store.getters.market)
  },
)
</script>
<style></style>
