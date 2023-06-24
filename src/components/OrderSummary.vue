<template>
  <div class="w-full mt-5 p-1 text-sm">
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Subtotal</span>
      <span>{{ subTotal.toFixed(3) }} {{ store.getters.quoteToken }}</span>
    </div>
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Fee(0.1%)</span>
      <span>{{ (subTotal * 0.001).toFixed(3) }} {{ store.getters.quoteToken }}</span>
    </div>
    <div class="flex flex-row justify-between">
      <span class="text-slate-500">Total</span>
      <span>{{ (subTotal * (1 + 0.001)).toFixed(3) }} {{ store.getters.quoteToken }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

const subTotal = ref(1500)
const store = useStore()
</script>
<style></style>
