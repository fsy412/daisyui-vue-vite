<template>
  <div class="relative w-full h-screen">
    <div class="w-full h-full bg-[url('src/assets/background.png')] bg-cover bg-center blur-lg"></div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
      <h1 class="btn btn-ghost normal-case text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195] h-[60px]">FantomDEX</h1>
      <h1 class="mt-5 text-center text-6xl text-white font-semibold drop-shadow-lg">YOUR KEY, YOUR CRYPTO</h1>
      <h1 class="mt-5 text-center text-6xl text-white font-semibold drop-shadow-lg">SAY BYE TO CEX</h1>

      <router-link to="trade"> <button class="btn btn-primary mt-20">Trade Now</button></router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
