<template>    
  <main class="main">
    <Header 
      :title='title' 
      :subTitle='subTitle' 
      :description='description'/>
    
    <Section 
      title="¿Sobre que temáticas preguntar más los diputados?"
      :chartData='themesData'
      :chartOptions='themesOptions'
    />

    <Section 
      title="¿Que porcentage de Mujeres y Hombres hay en el congreso?"
      :chartData='genderData'
      :chartOptions='genderOptions'
    />

    <Section 
      title="¿En que rango de edades hay más diputados?"
      :chartData='agesData'
      :chartOptions='agesOptions'
    />
  </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Section from '@/components/Section.vue'
  
  import { themesHome, genderHome, agesHome } from '@/assets/js/charts.js'


  export default {
    name: 'Home', 
    data: function(){
      return {
        title: 'Preguntas Parlamentarias',
        subTitle: 'Gráficas sobre',
        description: 'Recopilamos datos oficiales sobre cada una de las preguntas que realizan\
        los diputados al gobierno en el parlamento y te los facilitamos con gráficas de\
        forma totalmente neutral.',

        themesData: themesHome.series,
        themesOptions: themesHome.chartOptions,

        genderData: genderHome.series,
        genderOptions: genderHome.chartOptions,

        agesData: agesHome.series,
        agesOptions: agesHome.chartOptions
      } 
    },
    components: {
      Header,
      Section,
    },
  }
</script>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;

    background-color: var(--light-grey);
  }
  @media (min-width: 1008px) {
    
  } 
</style>
