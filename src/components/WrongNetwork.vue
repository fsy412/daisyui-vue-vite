<template lang="">
  <div class=" ">
    <label for="my_modal_6" class="btn bg-[#18181b] font-bold"> Wrong network</label>
    <input type="checkbox" id="my_modal_6" class="modal-toggle" />
    <div class="modal text-gray-900">
      <div class="modal-box">
        <div class="flex flex-col">
          <!-- <span class="text-center font-bold"> {{ formatAddress() }}</span> -->
          <button class="btn mt-5" @click="onDisconnect">Switch Networks</button>
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

const onDisconnect = () => {
  document.querySelector("#my_modal_6").checked = false
  store.dispatch("connectNetwork")
}

const clearAccount = () => {
  store.commit("clearAccount", {})
}
onMounted(() => {})
</script>
<style scoped>
.modal-box {
  width: 23rem;
}
</style>
