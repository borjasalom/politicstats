<template>
  <div id="app">
    <Header />
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

  @media (min-width: 641px) {
    :root{
      font-size: 15px;
    }
  }

  @media (min-width: 1008px) {
    :root{
      font-size: 16px;
    }
  }
</style>
