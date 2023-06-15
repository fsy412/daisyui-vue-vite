<template>
  <main class="flex flex-col h-screen">
    <Header />
    <div class="h-5/6">
      <TopBar class="mt-0.5" />
      <TradeMenu />
    </div>
    <FooterBar></FooterBar>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import TopBar from './components/TopBar.vue'
import TradeMenu from './components/TradeMenu.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<style></style>
