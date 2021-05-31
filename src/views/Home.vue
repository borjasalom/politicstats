<template>    
  <main class="main">
    <Header 
      :title='title' 
      :subTitle='subTitle' 
      :description='description'
      image='home'/>
    
    <SectionChart
      title="¿Sobre que temáticas preguntar más los diputados?"
      :chartData='topicsData'
      :chartOptions='topicsOptions'
    />

    <SectionChart 
      title="¿Cuantas Mujeres y Hombres hay en el congreso?"
      :chartData='genderData'
      :chartOptions='genderOptions'
    />

    <SectionChart 
      title="¿En que rango de edades hay más diputados?"
      :chartData='agesData'
      :chartOptions='agesOptions'
    />
  </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import SectionChart from '@/components/SectionChart.vue'
  import { homeTopicsChart, homeGenderChart, homeAgesChart } from '@/assets/js/charts.js'

  export default {
    name: 'Home', 
    data: function(){
      return {
        // Header Information
        title: 'Preguntas Parlamentarias',
        subTitle: 'Datos sobre',
        description: 'Recopilamos información oficial sobre cada una de las preguntas que realizan\
        los diputados al gobierno en el parlamento y te la facilitamos con gráficas de\
        forma totalmente neutral.',

        // Topics Chart
        topicsData: homeTopicsChart.series,
        topicsOptions: homeTopicsChart.chartOptions,

        // Gender Chart
        genderData: homeGenderChart.series,
        genderOptions: homeGenderChart.chartOptions,

        // Age Chart
        agesData: homeAgesChart.series,
        agesOptions: homeAgesChart.chartOptions
      } 
    },
    components: {
      Header,
      SectionChart,
    },
  }
</script>

