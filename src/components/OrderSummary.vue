<template>
  <div class="w-full mt-5 p-1 text-sm">
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Subtotal</span>
      <span>1500.00 {{ store.getters.quoteToken }}</span>
    </div>
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Fee</span>
      <span>1500.00 {{ store.getters.quoteToken }}</span>
    </div>
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Total</span>
      <span>1500.00 {{ store.getters.quoteToken }}</span>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex"
const store = useStore()
</script>
<style></style>
