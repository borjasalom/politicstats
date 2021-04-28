<template>
  <div class="big-chart">
    <h3> {{ title }}</h3>
    <VueApexCharts 
      height='500px'
      class="big-chart__chart"
      :options="chartOptions" 
      :series="chartData"/>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'BigChart',
  props: {
      title: String,
      chartData: Array,
      chartOptions: Object
  },
  components: {
    VueApexCharts
  },
}
</script>

<style scoped>
  .big-chart__chart{
    height: 500px;
  }
</style>