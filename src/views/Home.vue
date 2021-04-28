<template>
  <div class="home">
    <div class="home__big-chart">
      <BigChart 
        title='Top 10: Temáticas' 
        v-bind:chartData='themesData'
        v-bind:chartOptions='themesOptions'
      />
    </div>
    <div class="home__small-chart">
      <SmallChart
        title='Genero Diputados' 
        v-bind:chartData='genderData'
        v-bind:chartOptions='genderOptions'
      />
      <SmallChart
        title='Edad Diputados' 
        v-bind:chartData='agesData'
        v-bind:chartOptions='agesOptions'
      />
    </div>
  </div>
</template>

<script>
  import BigChart from '@/components/BigChart.vue'
  import SmallChart from '@/components/SmallChart.vue'
  import { themesHome, genderHome, agesHome } from '@/assets/charts.js'

  export default {
    name: 'Home', 
    data: function(){
      return {
        themesData: themesHome.series,
        themesOptions: themesHome.chartOptions,

        genderData: genderHome.series,
        genderOptions: genderHome.chartOptions,

        agesData: agesHome.series,
        agesOptions: agesHome.chartOptions
      } 
    },
    components: {
      BigChart,
      SmallChart
    },
  }
</script>

<style scoped>
  .home{
    max-width: 1024px;
    padding: 50px 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .home__big-chart, .home__small-chart{
    width: 90%;
  }
  
  .home__small-chart{
    display: flex;
    flex-flow: column;
  }

  @media (min-width: 1008px) {
    .home__small-chart{
      flex-flow: row;
      justify-content: space-between;
    }
  } 
</style>
