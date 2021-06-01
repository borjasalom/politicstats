<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
  :root{
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    
    --primary-color: #6C63FF;
    --secondary-color: #FF6584;
    --light-color: #FFFFFF;
    --dark-color: #2F2E41;
    --light-grey: #F2F2F2;
    --medium-grey: #E6E6E6;
    --dark-grey: #CCCCCC;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--dark-color)
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

  .main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;

    background-color: var(--light-grey);
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
