<template>
  <div class="flex w-full flex-col mt-2 p-1">
    <span class="text-gray-300">Balance</span>
    <div class="mt-2 flex flex-row justify-evenly text-sm text-gray-500">
      <span class="text-left w-full">Asset</span>
      <span class="text-left w-center">Wallet</span>
      <span class="text-right w-full">Account</span>
    </div>
    <div class="mt-1 flex flex-row justify-evenly text-sm text-gray-200">
      <span class="text-left w-full">{{ store_.state.baseToken }}</span>
      <span class="text-left w-center">100</span>
      <span class="text-right w-full">0</span>
    </div>
    <div class="mt-1 flex flex-row justify-evenly text-sm text-gray-200">
      <span class="text-left w-full">{{ store_.state.quoteToken }}</span>
      <span class="text-left w-center">100</span>
      <span class="text-right w-full">0</span>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, reactive } from "vue"
import { useStore } from "vuex"
import store_ from "../store"
const store = useStore()
watch(
  () => store.getters.market,
  () => {
    console.log("Asset changes detected", store.getters.market)
  },
)
</script>
<style></style>
