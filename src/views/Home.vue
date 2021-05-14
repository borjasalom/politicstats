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
      title="¿Que porcentage de Mujeres y Hombres hay en el congreso?"
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
        title: 'Preguntas Parlamentarias',
        subTitle: 'Gráficas sobre',
        description: 'Recopilamos datos oficiales sobre cada una de las preguntas que realizan\
        los diputados al gobierno en el parlamento y te los facilitamos con gráficas de\
        forma totalmente neutral.',

        topicsData: homeTopicsChart.series,
        topicsOptions: homeTopicsChart.chartOptions,

        genderData: homeGenderChart.series,
        genderOptions: homeGenderChart.chartOptions,

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

