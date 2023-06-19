<template lang="">
  <div class=" ">
    <label for="my_modal_6" class="btn bg-[#18181b]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mr-3 h-4 w-4 md:h-6 md:w-6 bg-gray-300"
        alt="wallet"
      >
        <path
          d="M10 16V8C10
  7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6H21V5C21 3.9 20.1
  3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3
  19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C20.1 21 21
  20.1 21 19V18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304
  10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5
  14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5
  12.83 16.83 13.5 16 13.5Z"
          fill="#202020"
        ></path>
      </svg>

      {{ formatAddress() }}</label
    >
    <input
      type="checkbox"
      id="my_modal_6"
      class="modal-toggle"
      bind:checked="{false}"
    />
    <div class="modal text-gray-900">
      <div class="modal-box">
        <div class="flex flex-col">
          <span class="text-center"> {{ formatAddress() }}</span>
          <button class="btn mt-5" @click="onDisconnect">Disconnect</button>
        </div>
        <div class="modal-action mt-5">
          <label
            for="my_modal_6"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import store from "../store";
const formatAddress = () => {
  let address = store.getters.account;
  return `${address.substring(0, 5)}...${address.substring(
    address.length - 5
  )}`;
};

const onClick = () => {
  console.log("onClick");
};

const onDisconnect = () => {
  document.querySelector("#my_modal_6").checked = false;
  clearAccount();
};

const clearAccount = () => {
  store.commit("clearAccount", {});
};
onMounted(() => {
  console.log("disconnect wallet component");
});
</script>
<style scoped>
.modal-box {
  width: 23rem;
}
</style>
