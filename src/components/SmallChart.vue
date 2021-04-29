<template>
  <div class="small-chart">
    <h3 class="small-chart__title"> {{ title }}</h3>
    <VueApexCharts 
      height='300px'
      class="small-chart__chart"
      :options="chartOptions" 
      :series="chartData"/>
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'SmallChart',
    props: {
      title: String,
      chartData: Array,
      chartOptions: Object
    },
    components: {
      VueApexCharts
    }
  }
</script>

<style scoped>
  .small-chart {
    margin-top: 50px;
  }

  .small-chart .small-chart__chart {
    height: 300px;
  }

  @media (min-width: 1008px) {
    .small-chart {
      width: 45%;
    }
  }    
</style>