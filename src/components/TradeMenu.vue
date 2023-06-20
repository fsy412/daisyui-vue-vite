<template>
  <div class="p-1 tabs text-gray-300 md:w-1/5 2xl:w-[15%] flex flex-col justify-start relative">
    <div v-if="store.getters.account == ''" class="top-0 left-0 absolute h-full w-full flex flex-col justify-center items-center opacity-90 bg-[#18181b] z-10">
      <span class="mb-3 font-bold">Please connect wallet to use</span>
      <ConnectWallet class="z-20"></ConnectWallet>
    </div>
    <div class="flex w-full flex-col">
      <span class="text-left cursor-pointer">Create Order</span>
      <div class="tabs tabs-boxed bg-neutral text-gray-200">
        <a class="tab tab-active text-gray-200 w-1/2" @click="onSideClick('buy')" ref="buy">Buy</a>
        <a class="tab text-gray-200 w-1/2" @click="onSideClick('sell')" ref="sell">Sell</a>
      </div>
    </div>
    <div class="mx-auto mt-2 w-full">
      <OrderType></OrderType>

      <!-- limit order -->
      <div v-if="store.state.orderType == 'limit'">
        <div class="form-control rounded-none bg-neutral mt-2">
          <div class="input-group">
            <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Price</span>
            <input type="text" placeholder="0.0" class="input input-bordered h-8 w-28 rounded-none bg-neutral" v-model="price" />
            <span class="w-20 rounded-none bg-neutral">USD</span>
          </div>
        </div>
        <div class="form-control rounded-none bg-neutral">
          <div class="input-group">
            <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Amount</span>
            <input type="text" placeholder="0.0" class="input input-bordered h-8 w-28 rounded-none bg-neutral" v-model="amount" />
            <span class="w-20 rounded-none bg-neutral">USD</span>
          </div>
        </div>
      </div>
      <!-- market order tab -->
      <div v-if="store.state.orderType == 'market'">
        <div class="form-control rounded-none bg-neutral mt-2">
          <div class="input-group">
            <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Price</span>
            <input type="text" placeholder="0.0" class="input input-bordered h-8 w-28 rounded-none bg-neutral" v-model="price" />
            <span class="w-20 rounded-none bg-neutral">USD</span>
          </div>
        </div>
        <div class="form-control rounded-none bg-neutral">
          <div class="input-group">
            <span class="rounded-none bg-neutral text-gray-300 w-[80px]">Amount</span>
            <input type="text" placeholder="0.0" class="input input-bordered h-8 w-28 rounded-none bg-neutral" v-model="amount" />
            <span class="w-20 rounded-none bg-neutral">USD</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full px-2 mt-3">
      <input type="range" min="0" max="100" value="0" class="range range-xs h-3" step="25" />
      <div class="w-full flex justify-between text-xs px-2">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100% </span>
      </div>
    </div>
    <Asset></Asset>
    <div class="mt-5 w-full px-2">
      <button class="w-full btn bg-green-500" :class="{ 'blur-sm': store.getters.account == '' }" @click="onPlaceOrder">Place Order</button>
    </div>
  </div>
</template>

<script setup>
import { ethers } from "ethers"
import { ref, onMounted, computed } from "vue"
import OrderType from "./OrderTypeSelect.vue"
import Asset from "./Asset.vue"
import { placeOrder } from "../api"
import store from "../store"
import ConnectWallet from "./ConnectWallet.vue"
import { ORDER } from "../constants/orderbook"
import { getPermitSignature } from "../utils/sign"

import getExchangeContract from "../contract/exchange"
import getERC20 from "../contract/erc20"

const buy = ref(null)
const sell = ref(null)
const orderSide = ref("buy")

// import { defineEmits, defineProps } from 'vue';
// const props = defineProps({
//   modelValue: String,
// });

const price = ref(0)
const amount = ref(0)
// const price = computed({
//   get: function () {
//     return this.modelValue;
//   },
//   set: function (value) {
//     console.log("11111111111111111111111", value);
//     // this.$emit("update:modelValue", value);
//   },
// });

// const amount = computed({
//   get: function () {
//     return this.modelValue;
//   },
//   set: function (value) {
//     console.log("2222222222222222222222", value);
//   },
// });

const onSideClick = (side) => {
  if (side == "buy") {
    sell.value.classList.remove("tab-active")
    buy.value.classList.add("tab-active")
    orderSide.value = "buy"
  } else {
    buy.value.classList.remove("tab-active")
    sell.value.classList.add("tab-active")
    orderSide.value = "sell"
  }
}

const onPlaceOrder = async () => {
  let side = orderSide.value == "buy" ? 0 : 1
  let qty = +amount.value
  let price_ = +price.value
  console.log("onPlaceOrder", side, price_, amount, side, orderSide.value)
  let ret = await placeOrder({
    address: store.getters.account,
    marketId: store.getters.market,
    side: side,
    price: price_,
    qty: qty,
    orderType: "limit",
  })
  console.log("111", ret)

  if (ret.matchResult == ORDER.Posted) {
    console.log("call contract createOrder", side, price_, qty)
    const exchangeContract = getExchangeContract()
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const token = getERC20("0x2c6Ff2Dec3c6e6c1EF241bA48F33C7F3aC5cc1ED")
    const amount_ = ethers.utils.parseEther(amount.value)
    const deadline = 2656860541
    const { v, r, s } = await getPermitSignature(signer, store.getters.account, token, exchangeContract.address, amount_, deadline)

    const tx = await exchangeContract.createOrderWithPermit(side, price_, qty, amount_, deadline, v, r, s)
    await tx.wait()
  }
}
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
