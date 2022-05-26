<template>
  <Header />
  <TopBar class="mt-0.5" />

  <div class="contentWrapper">
    <div class="left w-1/6 py-4 h-full">
      <TradeMenu />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TopBar from './components/TopBar.vue'
import TradeMenu from './components/TradeMenu.vue'

export default {
  components: {
    Header,
    TopBar,
    TradeMenu,
  },
}
</script>

<style></style>
