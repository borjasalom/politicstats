<template>
  <nav class="nav">
    <router-link to="/">
      <h5 class="nav__logo">Parliamentary Questions</h5>
    </router-link> 
    <div class="nav__menu-button">
      <div class="nav__menu-line"></div>
      <div class="nav__menu-line"></div>
      <div class="nav__menu-line"></div>
    </div>
    <ul class='nav__list'>
      <li v-for="item in menu" :key="item.name" class="nav__item">
        <router-link v-bind:to="item.route" class="nav__link hola"> 
          {{item.name}} 
        </router-link> 
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data: function() {
      return {
        menu: [
          { name: 'Temáticas', route: '/topics'},
          { name: 'Grupos', route: '/groups' },
          { name: 'Acerca', route: '/about'}
        ]
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    list-style: none;
  }

  .nav__list .nav__link:hover{
    color: var(--secondary-color);
  }

  @media (min-width: 1008px) {
    .nav {
      max-width: 1024px;
      padding: 0 50px;

       justify-content: space-between;
    }

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