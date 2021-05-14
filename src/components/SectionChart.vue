<template>
  <section class="section-chart">
    <div class="section-chart__title">
      <h3 > {{ title }}</h3>    
    </div>
    <VueApexCharts 
      height='500px'
      with='100%'
      class="section-chart__chart"
      :options="chartOptions" 
      :series="chartData"/>
  </section>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'SectionChart',
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
.section-chart {
    width: 90%;
    padding: 50px 10px;
    margin: 50px;

    background-color: white;
  
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
  }

  .section-chart .section-chart__title {
    margin-bottom: 20px;
    padding: 0px 25px;
    display: flex;
    justify-content: center;
  }

  .section-chart .section-chart__chart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 641px) {
    
  }

  @media (min-width: 1008px) {
    .section-chart {
      max-width: 1024px;
      padding: 50px 50px;
    }
  }
</style>