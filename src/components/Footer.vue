<template>
  <footer class="footer">
    <section class="footer__colaboraciones">
      <h5>Colabora</h5>
      <a href="https://api.tipiciudadano.es/">API TipiCiudadano</a>
      <a href="https://github.com/borjasalom/preguntas-parlamentarias">Código Github</a>
    </section>
    <section class="footer__colaboraciones">
      <h5>Agradecimiento</h5>
      <img src="https://tipiciudadano.es/img/logo-politicalwatch.png" alt="">
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: function() {
      return {
      }
    },
  }
</script>

<style scoped>
  .footer {
    width: 100%;
    padding: 50px;
    background-color: var(--dark-color);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

  .footer .footer__colaboraciones{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .footer h5{
    margin-bottom: 15px;
  }

  .footer a{
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  .footer img{
    width: 200px;
  }

  .footer a:hover{
    color: var(--secondary-color);
  }
  
  .footer h5, .footer a{
    color: var(--light-color);
  }


  
  @media (min-width: 1008px) {
    
  }
</style>