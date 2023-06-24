<template>
  <div class="navbar bg-neutral text-gray-200 z-20">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item </a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <router-link to="/"> <a class="btn btn-ghost normal-case text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">FantomDEX</a> </router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0 font-bold">
        <li><a>Trade</a></li>
        <!-- <li tabindex="0">
          <a>
            Farm
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> -->
        <li><a>FDX</a></li>
      </ul>
    </div>
    <div class="navbar-end relative">
      <Drawer @click="click"></Drawer>
      <div :class="zIndex" v-if="chainId_ == 4002">
        <div v-if="store.getters.account == ''">
          <ConnectWallet></ConnectWallet>
        </div>
        <div v-else>
          <DisconnectWallet></DisconnectWallet>
        </div>
      </div>
      <div v-else>
        <WrongNetwork></WrongNetwork>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ethers } from "ethers"
import ConnectWallet from "./ConnectWallet.vue"
import DisconnectWallet from "./DisconnectWallet.vue"
import WrongNetwork from "./WrongNetwork.vue"
import Drawer from "./Drawer.vue"
import store from "../store"
import { ref, watch, onMounted, onUnmounted } from "vue"

const zIndex = ref("z-20")
const chainId_ = ref(0)

const click = () => {
  console.log("click")
  zIndex.value = "z-0"
}
watch(
  () => store.getters.account,
  () => {
    if (store.getters.account != "") {
      console.log("wallet connected", store.getters.account, store.getters.market, store.getters.chainId)
      store.dispatch("updateMarket", { market: store.getters.market, account: store.getters.account, chainId: store.getters.chainId })
    }
  },
)

function onNetworkChange(chainId) {
  store.commit("setNetwork", { chainId })
}

onMounted(() => {
  const getChainId = async () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const { chainId } = await provider.getNetwork()
    chainId_.value = chainId
  }

  getChainId()

  window.ethereum.on("chainChanged", async () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const network = await provider.getNetwork()
    chainId_.value = network.chainId
    if (network.chainId == 4002) {
      window.location.reload()
    }

    onNetworkChange(network.chainId)
  })
  window.ethereum.on("accountsChanged", () => {
    // window.location.reload()
  })
})

onUnmounted(() => {})
</script>

<style></style>
