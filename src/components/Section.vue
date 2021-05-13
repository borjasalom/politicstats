<template>
  <section class="section">
    <div class="section__title">
      <h3 > {{ title }}</h3>    
    </div>
    <VueApexCharts 
      height='500px'
      with='100%'
      class="section__chart"
      :options="chartOptions" 
      :series="chartData"/>
  </section>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: 'Section',
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
.section {
    width: 90%;
    padding: 50px 10px;
    margin-top: 50px;

    background-color: white;
  
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
  }

  .section .section__title {
    margin-bottom: 20px;
    padding: 0px 25px;
    display: flex;
    justify-content: center;
  }

  .section .section__chart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 641px) {
    
  }

  @media (min-width: 1008px) {
    .section {
      max-width: 1024px;
      padding: 50px 50px;
    }
  }
</style>