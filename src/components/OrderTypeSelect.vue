<template>
  <div class="flex w-full">
    <div class="dropdown w-full h-8">
      <label tabindex="0" class="outline outline-gray-600 outline-1 rounded-sm flex flex-row flex-start item-center bg-gray-700 text-white items-center w-full text-left e h-full">
        <span class="ml-2 w-full capitalize">{{ store.state.orderType }}</span>
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#98A1C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </label>

      <ul tabindex="0" class="dropdown-content menu shadow w-full h-full">
        <li class="w-full bg-gray-400">
          <a class="w-full h-full py-1 capitalize" @click="handleClick('limit')">limit</a>
        </li>
        <li class="w-full bg-gray-400">
          <a class="w-full h-full py-1 capitalize" @click="handleClick('market')">market</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import store from "../store"

function setOrderType(orderType) {
  store.commit("setOrderType", { orderType })
}

const handleClick = (orderType) => {
  setOrderType(orderType)
  const elem = document.activeElement
  elem?.blur()
}
</script>
<style></style>
