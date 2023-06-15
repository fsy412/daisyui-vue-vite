<template>
  <div class="bg-red-200  w-full ">
    <div class="md:h-full h-full bg-[#111827]">
      <!-- <div class="ml-1 w-[14rem] bg-[#111827] sm:absolute top-[6.5rem] z-20">
        <ul class="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400 space-x-2">
          <li class=" ">
            <a href="javascript:void(0)" class="inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 hover:text-white"
              v-bind:class="{ 'bg-gray-800': span === '5m' }" @click="timeSpan('5m')">5m</a>
          </li>
          <li class=" ">
            <a href="javascript:void(0)" class="inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 hover:text-white"
              v-bind:class="{ 'bg-gray-800': span === '15m' }" @click="timeSpan('15m')">15m</a>
          </li>
          <li class=" ">
            <a href="javascript:void(0)" class="inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 hover:text-white"
              v-bind:class="{ 'bg-gray-800': span === '1h' }" @click="timeSpan('1h')">1h</a>
          </li>
          <li class=" ">
            <a href="javascript:void(0)" class="inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 hover:text-white"
              v-bind:class="{ 'bg-gray-800': span === '4h' }" @click="timeSpan('4h')">4h</a>
          </li>
        </ul>
      </div> -->
      <div id="tvchart" class="h-full" ref="chart"></div>
    </div>
  </div>
</template>

<script>
import { klines } from '../api/api.js'
const CONTAINER_ID = 'vue-trading-view'

export default {
  name: 'VueTradingView',
  data() {
    return {
      container_id: CONTAINER_ID,
      widget: null,
      symbol: 'BTCUSDT',
      chart: null,
      candleSeries: null,
      chartProperties: {
        theme: 'Dark',
        // width: 1500,
        // height: 600,
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
        layout: {
          background: { color: '#18181b' },
          textColor: '#C3BCDB',
        },
        grid: {
          vertLines: { color: '#17181b' },
          horzLines: { color: '#162034' },
          // horzLines: { color: '#363c4e' },
        },
      },
      span: '5m',
    }
  },
  props: ['market'],
  watch: {
    market: function (newVal, oldVal) {
      const currentLocale = window.navigator.languages[0]
      console.log('currentLocale', currentLocale)
      // Create a number format using Intl.NumberFormat
      // const myPriceFormatter = Intl.NumberFormat(currentLocale, {
      //   style: 'currency',
      //   currency: 'USD', // Currency for data points
      // }).format
      // Apply the custom priceFormatter to the chart

      this.fetchKline(newVal)
    },
  },
  methods: {
    timeSpan(val) {
      console.log(val)
      this.span = val
      this.fetchKline(this.market)
    },
    cls(span) {
      span === this.span ? 'inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 text-white bg-gray-800' : 'inline-block w-[3rem] py-1 rounded-md hover:bg-gray-800 hover:text-white"'
    },
    fetchKline(market) {
      this.chart.applyOptions({
        priceScale: false,
        localization: {
          // priceFormatter: myPriceFormatter,
        },
      })


      let arr = market.split('-')
      let base = arr[0]
      let quote = arr[1].split('|')[0]
      console.log('kline =======>', `${base}${quote}`)

      if (base == "WBTC") {
        base = "BTC"
      }
      if (quote == 'USDC') {
        quote = "USDT"
      }


      klines({ symbol: `${base}${quote}`, interval: this.span })
        .then((res) => {
          let data = JSON.parse(res);
          const cdata = data.map((d) => {
            return { time: d[0] / 1000, open: d[1], high: d[2], low: d[3], close: d[4] }
          })
          this.candleSeries.setData(cdata)
        })
        .catch((err) => console.log(err))

    },
  },
  mounted() {
    const domElement = document.getElementById('tvchart')
    let chart = LightweightCharts.createChart(domElement, this.chartProperties)
    this.chart = chart
    const currentLocale = window.navigator.languages[0]
    // Create a number format using Intl.NumberFormat
    // const myPriceFormatter = Intl.NumberFormat(currentLocale, {
    //   style: 'currency',
    //   currency: ' ', // Currency for data points
    // }).format
    // Apply the custom priceFormatter to the chart
    chart.applyOptions({
      autoScale: false,
      localization: {
        // priceFormatter: myPriceFormatter,
      },
    })



    let candleSeries = chart.addCandlestickSeries()
    this.candleSeries = candleSeries

    this.fetchKline('BTC-USDT')
  },
}
</script>
