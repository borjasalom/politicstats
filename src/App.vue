<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
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

  /* 
    Themes and Groups 
    common styles
  */

  .groups, 
  .themes{
    width: 100%;
    padding: 50px;

    display: flex;
    justify-content: center;
  }

  .themes__container, 
  .groups__container{
    max-width: 1024px;
    padding: 50px;
    border-radius: 15px;

    background-color: white;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .themes__title,
  .groups__title {
    margin-bottom: 50px;
  }

  .themes__list,
  .groups__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .themes__topic,
  .groups__party{
    width: 200px;
    height: 100px;
    padding: 25px;
    border-radius: 15px;
    margin: 0px 5px 25px;

    background-color: rgba(0,0,0,1);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .themes__topic p,
  .groups__party p{
    color: white
  }

  .themes__topic img,
  .groups__party img{
    width: 20px;
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
