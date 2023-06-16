<template>
    <div class="tabs text-gray-300 md:w-1/5 2xl:w-[15%] flex flex-col justify-start p-1">
        <span class="w-full">Order Book</span>
        <div class="relative h-[18px] w-full bg-red-600 text-xs">
            <div class="relative flex h-[18px] items-center justify-center bg" style="width: 70%">
                <span class="absolute left-0 text-white">1200</span>
            </div>
            <span class="absolute right-0.5 top-0 text-white">200</span>
        </div>
        <div class="relative mt-[1px] h-[18px] w-full bg-red-600 text-xs">
            <div class="relative flex h-[18px] justify-center bg" style="width: 90%">
                <span class="absolute left-0 text-white">1200</span>
            </div>
            <span class="absolute right-0.5 top-0 text-white">10</span>
        </div>
        <div class="mb-1 text-center text-base font-medium text-blue-700 dark:text-blue-500">
            Spread
        </div>
        <div class="relative h-[18px] w-full bg-green-500 text-xs">
            <div class="relative flex h-[18px] items-center justify-center bg" style="width: 90%">
                <span class="absolute left-0 text-white">1200</span>
            </div>
            <span class="absolute right-0.5 top-0 text-white">200</span>
        </div>
        <div class="relative mt-[1px] h-[18px] w-full bg-green-500 text-xs">
            <div class="relative flex h-[18px] justify-center bg" style="width: 20%">
                <span class="absolute left-0 text-white">1200</span>
            </div>
            <span class="absolute right-0.5 top-0 text-white">10</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
    background-color: rgb(24 24 27);
}
</style>
