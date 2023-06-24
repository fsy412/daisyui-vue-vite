<template>
  <div class="mt-4 flex items-center md:mt-0">
    <div class="mr-4 flex flex-col items-start gap-y-2 border-r border-gray-text pr-4 md:mr-6 md:flex-row md:items-center md:gap-y-0 md:border-0 md:pr-0">
      <p class="font-bold text-gray-400">1.2</p>
      <p class="text-xs md:ml-2 text-success">+0.00</p>
    </div>
    <div class="mr-4 flex flex-col items-start gap-y-2 text-right md:mr-6 md:gap-y-0">
      <p class="text-xs text-black">24h High</p>
      <p class="text-xs font-bold md:text-[14px] text-gray-400">0.0</p>
    </div>
    <div class="mr-4 flex flex-col items-start gap-y-2 text-right md:mr-6 md:gap-y-0">
      <p class="text-xs text-black">24h Low</p>
      <p class="text-xs font-bold md:text-[14px] text-gray-400">0.0</p>
    </div>
    <div class="mr-0 flex flex-col items-start gap-y-2 text-right md:mr-6 md:gap-y-0">
      <p class="text-xs text-black">24h Volume ({{ store.getters.baseToken }})</p>
      <p class="text-xs font-bold md:text-[14px] text-gray-400">0.0 {{ store.getters.baseToken }}</p>
    </div>
    <div class="mr-0 flex flex-col items-start gap-y-2 text-right md:mr-6 md:gap-y-0">
      <p class="text-xs text-black">24h Volume</p>
      <p class="text-xs font-bold md:text-[14px] text-gray-400">$0.0</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex"
const store = useStore()
</script>
<style></style>
