<template>
  <header class="header">
    <Navbar />
    <div class="header__inf">
      <div class="header__text">
        <h3>Odio nulla</h3>
        <h2>Lorem ipsum dolor</h2>
        <p>
          Odio nulla tellus quisque magna elementum malesuada ac mauris nunc. 
          Feugiat eget adipiscing dignissim feugiat euismod at quis leo. 
          Proin est ut odio luctus nunc, donec sem leo ridiculus.
        </p>
      </div>
      <div class="header__img">
        <img src="@/assets/header-img.svg" alt="">
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>


<style scoped>

  .header {
    width: 100%;
    border-radius: 0px 0px 25px 25px;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    background-color: white;  
  }

  .header .header__inf{
    padding: 50px 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__text h2{
    margin-bottom: 15px;
  }

  .header__text h3{
    color: #808080;
  }

  .header__img{
      display: none;
  }

  @media (min-width: 640px) {
    .header__text{
      width: 75%;
    }
  }

  @media (min-width: 1008px) {
    
    .header .header__inf{
      max-width: 1024px;
      padding: 50px 25px;

      justify-content: space-around;
  }

    .header__text{
      width: 40%;
    }
    
    .header__img{
      display: block;
      width: 40%;
    }

    .header__img img{
      width: 100%;
    }
  }
</style>
