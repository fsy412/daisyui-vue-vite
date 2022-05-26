<template>
  <div class="tabs">
    <a class="w-1/2 tab tab-bordered">Limit</a>
    <a class="w-1/2 tab tab-bordered tab-active">Market</a>

    <div class="mx-auto   ">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Enter amount</span>
        </label>
        <label class="input-group h-8">
          <span>Price</span>
          <input
            type="text"
            placeholder="10"
            class="input input-bordered h-8 w-28"
          />
          <span class="w-20">USD</span>
        </label>
      </div>

      <div class="form-control mx-au">
        <label class="label w-40">
          <span class="label-text">Enter amount</span>
        </label>
        <label class="input-group h-8 w-20">
          <span>Price</span>
          <input
            type="text"
            placeholder="10"
            class="input input-bordered h-8 w-28"
          />
          <span class="w-20 flex-wrap">USDT</span>
        </label>
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
