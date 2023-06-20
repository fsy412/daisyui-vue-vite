<template lang="">
  <div class=" ">
    <label for="my_modal_6" class="btn bg-[#18181b] font-bold"> {{ formatAddress() }}</label>
    <input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked="{false}" />
    <div class="modal text-gray-900">
      <div class="modal-box">
        <div class="flex flex-col">
          <span class="text-center font-bold"> {{ formatAddress() }}</span>
          <button class="btn mt-5" @click="onDisconnect">Disconnect</button>
        </div>
        <div class="modal-action mt-5">
          <label for="my_modal_6" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue"
import store from "../store"
const formatAddress = () => {
  let address = store.getters.account
  return `${address.substring(0, 5)}...${address.substring(address.length - 5)}`
}

const onDisconnect = () => {
  document.querySelector("#my_modal_6").checked = false
  clearAccount()
}

const clearAccount = () => {
  store.commit("clearAccount", {})
}

onMounted(() => {
  console.log("disconnect wallet component")
})
</script>
<style scoped>
.modal-box {
  width: 23rem;
}
</style>
