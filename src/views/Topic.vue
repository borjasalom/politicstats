<template>    
  <main class="main">
    <h1>SLKDFLAHSJFHSALJ</h1>
  </main>
</template>

<script>

  export default {
    name: 'Home', 
    data: function(){
      return {
      } 
    },
    mounted: function(){
      window.scrollTo(0,0);
    },
    components: {

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

