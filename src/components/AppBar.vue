<script setup>
import store from "../store"
</script>

<template>
  <div>
    <!-- NavBar / Header -->
    <div class="navbar flex flex-row md:mb-2 shadow-lg bg-neutral text-neutral-content">
      <div class="navbar-start">
        <router-link to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
          <div class="hidden sm:inline w-22 h-22 md:p-2"></div>
        </router-link>
      </div>

      <!-- Nav Links -->
      <div class="hidden md:inline md:navbar-center">
        <div class="flex items-stretch">
          <router-link to="/">
            <a class="btn btn-ghost btn-sm rounded-btn"> Home </a>
          </router-link>
          <router-link to="/basic">
            <a class="btn btn-ghost btn-sm rounded-btn"> Basics </a>
          </router-link>
        </div>
      </div>

      <!-- Wallet & Settings -->
      <div class="navbar-end">
        <div class="dropdown">
          <div tabIndex="{0}" class="w-8 h-8 mr-4 btn btn-square btn-ghost text-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <ul tabIndex="{0}" class="p-2 shadow bg-neutral menu dropdown-content bg-base-100 rounded-box sm:w-52">
            <li>
              <div class="form-control">
                <label class="cursor-pointer label">
                  <a class="mr-4">Autoconnect</a>
                  <input type="checkbox" @click="flipAutoConnect" class="toggle" />
                </label>
              </div>
            </li>
          </ul>
        </div>
        <wallet-multi-button></wallet-multi-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
