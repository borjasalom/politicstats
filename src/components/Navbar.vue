<template>
  <nav class="nav">
    <router-link to="/">
      <h5 class="nav__logo">POLITCSTATS</h5>
    </router-link> 
    <div class="nav__menu-button">
      <div class="nav__menu-line"></div>
      <div class="nav__menu-line"></div>
      <div class="nav__menu-line"></div>
    </div>
    <ul class='nav__list'>
      <li v-for="item in menu" :key="item.name" class="nav__item">
        <router-link v-bind:to="item.route"> {{item.name}} </router-link> 
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data: function() {
      return {
        menu: [
          { name: 'Temáticas', route: '/themes' },
          { name: 'Partidos', route: '/groups' },
          { name: 'Acerca', route: '/about'}
        ]
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
    background-color: white;
    /*border-bottom: 1px solid black;*/
  }
  .nav .nav__logo, .nav .nav__menu-button{
    padding: 20px 0;
  }
  
  .nav__menu-button .nav__menu-line{
    width: 25px;
    height: 3px;
    margin: 4px;

    background-color: black;
  }

  .nav .nav__list {
    display: none;
  }

  .nav__list .nav__item {
    list-style: none;
  }

  @media (min-width: 1008px) {
    .nav .nav__menu-button{
      display: none;
    }

    .nav .nav__list {
      display: flex;
    }

    .nav__list .nav__item{
      margin-left: 50px;
    }
  }
</style>