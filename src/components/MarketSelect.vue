<template >
    <div class="dropdown w-1/5  2xl:w-[15%] bg-gray-500">
        <label tabindex="0" class="btn w-full rounded-none text-2xl">{{ store.state.market }}</label>
        <ul tabindex="0" class="dropdown-content menu shadow bg-base-100 rounded-none w-full">
            <li>
                <a class="text-center w-full flex flex-row justify-center" @click="handleClick('BTC-USDT')">BTC-USDT</a>
            </li>
            <li>
                <a class="text-center w-full flex flex-row justify-center" @click="handleClick('BNB-USDT')">BNB-USDT</a>
            </li>
        </ul>
    </div>
</template>
<script setup>
import store from '../store'

function setMarketType(market) {
    store.commit('setMarket', { market });
}

const handleClick = (market) => {
    const elem = document.activeElement;
    elem?.blur();
    setMarketType(market)
};

</script>
<style></style>