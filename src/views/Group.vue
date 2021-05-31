<template>    
  <main class="main">
    <Header 
      :title='group.name' 
      image='groups'/>
    
    <SectionChart
      :title="'¿Sobre que temáticas preguntan más ' + group.shortname + '?'"
      aclarations="Hay que tener en cuenta que la escala del eje Y no es la misma en 
      todos los Grupos Parlamentarios"
      :chartData='topicsData'
      :chartOptions='topicsOptions'
    />
    <SectionChart
      :title="'¿Cuantas Mujeres y Hombres hay en '+ group.shortname + '?'"
      :chartData='genderData'
      :chartOptions='genderOptions'
    />
    <SectionChart
      :title="'¿En que rango de edades hay más diputados del grupo '+ group.shortname + '?'"
      :chartData='ageData'
      :chartOptions='ageOptions'
    />
  </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import groupsList from '@/assets/json/groupsApp.json'
  import { topicsChartConf, genderChartConf, ageChartConf } from '@/assets/js/chartsConf.js'
  import SectionChart from '@/components/SectionChart.vue'

  
  export default {
    name: 'Group', 
    data: function(){

      let param = this.$route.params.group

      let groupTopicsData = [];
      let groupTopicsChartConf = topicsChartConf;
      groupTopicsChartConf.labels = [];

      for (let i = 0; i < 10; i++) {
        groupTopicsData.push(groupsList[param].topics[i].numQuestions);
        groupTopicsChartConf.labels.push(groupsList[param].topics[i].shortname);
      }

      let groupGenderData = [
        groupsList[param].gender.female,
        groupsList[param].gender.male
      ];

      let groupAgesData = [
        groupsList[param].ages.ages25_34,
        groupsList[param].ages.ages35_44,
        groupsList[param].ages.ages45_54,
        groupsList[param].ages.ages55More,
      ]
      
      return {
        group: groupsList[param],

        topicsData: [{ data: groupTopicsData }],
        topicsOptions: groupTopicsChartConf,

        genderData: groupGenderData,
        genderOptions: genderChartConf,

        ageData: [{ data: groupAgesData }],
        ageOptions: ageChartConf,
      } 
    },
    mounted: function(){
      window.scrollTo(0,0);
    },
    components: {
      Header,
      SectionChart
    },
  }
</script>

