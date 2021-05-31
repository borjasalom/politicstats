<template>
  <main class="main">
    <SectionList 
      title="Grupos Parlamentarios"
      :list="groupsList" 
      parentPaht='/groups/'/>
    <SectionChart 
      title="Numero de diputados de cada Grupo Parlamentario"
      :chartData='groupsData'
      :chartOptions='groupsOptions' />
  </main>
</template>

<script>
  import groupsList from '@/assets/json/groupsApp.json'
  import { groupsChart } from '@/assets/js/charts.js'  
  import SectionList from '@/components/SectionList.vue'
  import SectionChart from '@/components/SectionChart.vue'
  

  export default {
    name: 'Groups', 
    data: function(){
      return {
        groupsList: groupsList,

        groupsData: groupsChart.series,
        groupsOptions: groupsChart.chartOptions,
      }
    },
    components: {
      SectionChart,
      SectionList
    },
  }
</script>

<style scoped>
  .section-list__item:hover {
    opacity: 0.75;
  }
</style>