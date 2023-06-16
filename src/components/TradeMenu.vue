<template>
  <div class="p-1 tabs text-gray-300 md:w-1/5 2xl:w-[15%] flex flex-col justify-start">
    <div class="flex w-full flex-col">
      <span class="text-left">Create Order</span>
      <div class="tabs tabs-boxed bg-neutral text-gray-200">
        <a class="tab tab-active w-1/2" @click="onSideClick('buy')" ref="buy">Buy</a>
        <a class="tab text-gray-200 w-1/2" @click="onSideClick('sell')" ref="sell">Sell</a>
      </div>
    </div>
    <div class="mx-auto mt-2 w-full">
      <OrderType></OrderType>
      <div class="form-control rounded-none bg-neutral mt-2">
        <div class="input-group">
          <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Price</span>
          <input type="text" placeholder="10" class="input input-bordered h-8 w-28 rounded-none bg-neutral" />
          <span class="w-20 rounded-none bg-neutral">USD</span>
        </div>
      </div>
      <div class="form-control rounded-none bg-neutral">
        <div class="input-group">
          <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Amount</span>
          <input type="text" placeholder="10" class="input input-bordered h-8 w-28 rounded-none bg-neutral" />
          <span class="w-20 rounded-none bg-neutral">USD</span>
        </div>
      </div>
    </div>
    <div class="w-full px-2 mt-6">
      <input type="range" min="0" max="100" value="25" class="range range-xs h-3" step="25" />
      <div class="w-full flex justify-between text-xs px-2">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
    <Asset></Asset>
    <!-- <div class="mt-20 w-full px-2">
      <button class="py-2 w-full bg-neutral rounded-sm">Connect Wallet</button>
    </div> -->

    <div class="mt-5 w-full px-2">
      <button class="w-full btn bg-green-500">Place Order</button>
    </div>
  </div>
</template>

<script setup>
import OrderType from "./OrderTypeSelect.vue";
import Asset from "./Asset.vue";
import { ref, onMounted } from "vue";
const buy = ref(null);
const sell = ref(null);

const onSideClick = (side) => {
  if (side == "buy") {
    sell.value.classList.remove("tab-active");
    buy.value.classList.add("tab-active");
  } else {
    buy.value.classList.remove("tab-active");
    sell.value.classList.add("tab-active");
  }
};
</script>
<style scoped>
/* .input-group :first-child {
  background-color: rgb(48, 52, 64);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
} */
</style>
