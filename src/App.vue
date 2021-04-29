<template>
  <div id="app">
    <Header hiddeHeader='false' />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style>
  :root{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: #F2F2F2;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: black
  }

  h1, h2, h3, h4, h5{
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
  }

  h1 { font-size: 3.052rem; }
  h2 { font-size: 2.441rem; }
  h3 { font-size: 1.953rem; }
  h4 { font-size: 1.563rem; }
  h5 { font-size: 1.25rem; }

  p  { 
    font-size: 1rem; 
    line-height: 1.5;
  }

  #app{
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .big-chart, .small-chart {
    width: 100%;
    padding: 50px 10px;
    border-radius: 15px;

    background-color: white;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
  
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    text-align: center;
  }

  .big-chart .big-chart__title, 
  .small-chart .small-chart__title {
    margin-bottom: 20px;
  }

  .big-chart .big-chart__chart, 
  .small-chart .small-chart__chart{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 641px) {
    :root{
      font-size: 15px;
    }
  }

  @media (min-width: 1008px) {
    :root{
      font-size: 16px;
    }
    .big-chart, .small-chart {
      padding: 50px 25px;
    }
  }
</style>
