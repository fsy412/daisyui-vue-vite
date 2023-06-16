<template>
    <div class="tabs tabs-boxed bg-neutral text-gray-200">
        <a class="tab tab-active">Open Order</a>
        <a class="tab text-gray-200">Order History</a>
        <a class="tab text-gray-200">Trade History</a>
    </div>
    <div class="overflow-x-auto w-full">
        <table class="w-full">
            <thead class=" ">
                <tr class="text-gray-300 text-left">
                    <th class="">Market</th>
                    <th>Type</th>
                    <th>Side</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Filled</th>
                    <th>  Time</th>

                    <th>  Operation</th>
                </tr>
            </thead>
            <tbody class="text-gray-400">
                <tr v-for="(item, index) in trades" :key="index" class="">
                    <th class="text-left"> {{ item.Market }}</th>
                    <td>{{ item.Type }}</td>
                    <td>{{ item.Side }}</td>
                    <td>{{ item.Size }}</td>
                    <td>{{ item.Price }}</td>
                    <td>{{ item.Filled }}</td>
                    <td>{{ '2023-5-7 11:20:43' }}</td>
                    <td>cancel</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const trades = [
    {
        Market: "BTC-USDT",
        Type: "Market",
        Side: "Buy",
        Size: "100",
        Price: "100",

        Filled: "0",
    },
];
</script>

<style scoped></style>
