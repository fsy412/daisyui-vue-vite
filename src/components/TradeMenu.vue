<template>
  <div class="tabs text-gray-300 w-1/5 ">
    <a class="w-1/2 tab tab-bordered tab-active text-gray-300">Limit</a>
    <a class="w-1/2 tab tab-bordered  text-gray-300">Market</a>
    <div class="mx-auto  mt-1">
    
        <OrderType></OrderType>
   
      <div class="form-control rounded-none bg-neutral">
        <div class="input-group ">
          <span class="rounded-none  bg-neutral text-gray-300 w-[80px]">Price</span>
          <input type="text" placeholder="10" class="input input-bordered h-8 w-28 rounded-none bg-neutral" />
          <span class="w-20 rounded-none bg-neutral">USD</span>
        </div>
      </div>
      <div class="form-control rounded-none bg-neutral">
        <div class="input-group ">
          <span class="rounded-none  bg-neutral text-gray-300 w-[80px]">Amount</span>
          <input type="text" placeholder="10" class="input input-bordered h-8 w-28 rounded-none bg-neutral" />
          <span class="w-20 rounded-none bg-neutral">USD</span>
        </div>
      </div>
    </div>
    <!-- <div class="w-full px-2 mt-6">
      <input type="range" min="0" max="100" value="25" class="range range-xs h-3" step="25" />
      <div class="w-full flex justify-between text-xs px-2">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import OrderType from "./OrderType.vue"
</script>

<style scoped>
.input-group :first-child {
  background-color: rgb(48, 52, 64);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
