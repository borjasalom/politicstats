<template>    
  <main class="main">
    <Header 
      :title='topic.name' 
      :description='topic.description'
      image='topics'
    />

    <SectionChart
      :title="'¿Cuantas preguntas sobre ' + topic.shortname + ' se realizan cada mes?'"
      :chartData='dateData'
      :chartOptions='dateOptions'
    />

    <SectionChart
      :title="'¿Cual es la media de preguntas por diputado que han hecho mujeres y hombres sobre ' + topic.shortname + '?'"
      :chartData='genderData'
      :chartOptions='genderOptions'
    />

    <SectionChart
      :title="'¿Cual es la media de preguntas por diputado que han hecho en cada rango de edad sobre ' + topic.shortname + '?'"
      :chartData='ageData'
      :chartOptions='ageOptions'
    />
  </main>
</template>

<script>
  import Header from '@/components/Header.vue'
  import topic from '@/assets/json/topicsApp.json'
  import { dateChartConf, genderChartConf, ageChartConf } from '@/assets/js/chartsConf.js'
  import SectionChart from '@/components/SectionChart.vue'

  export default {
    name: 'Home', 
    data: function(){
      let param = this.$route.params.topic

      let dateData = [];
      let monthData = [];

      for (const year of topic[param].dates[0]) {
        for (const month in year.months) {
          monthData.push(year.months[month])
        }
        dateData.push({
          name: year.year,
          data: monthData
        })
        monthData = [];
      }



      let topicGenderData = [
        parseFloat((topic[param].gender.female / 197).toFixed(2)),
        parseFloat((topic[param].gender.male / 154).toFixed(2)),
      ];

      let topicAgesData = [
        (topic[param].ages.ages25_34 / 25).toFixed(2),
        (topic[param].ages.ages35_44 / 83).toFixed(2),
        (topic[param].ages.ages45_54 / 118).toFixed(2),
        (topic[param].ages.ages55More / 124).toFixed(2),
      ]

      /* let topicAgesData = [
        (topic[param].ages.ages25_34 / 1).toFixed(2),
        (topic[param].ages.ages35_44 / 1).toFixed(2),
        (topic[param].ages.ages45_54 / 1).toFixed(2),
        (topic[param].ages.ages55More / 1).toFixed(2),
      ] */

      return {
        topic: topic[param],

        dateData: dateData,
        dateOptions: dateChartConf,

        genderData: topicGenderData,
        genderOptions: genderChartConf,

        ageData: [{ data: topicAgesData }],
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

