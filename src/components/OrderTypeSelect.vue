<template>
  <div class="flex w-full">
    <div class="dropdown w-full h-8">
      <label tabindex="0" class="outline outline-gray-600 outline-1 rounded-sm flex flex-row flex-start item-center bg-gray-700 text-white items-center w-full text-left e h-full">
        <span class="ml-2 w-full capitalize">{{ store.state.orderType }}</span></label
      >

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
