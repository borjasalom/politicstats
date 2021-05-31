<template>
  <nav class="nav">
    <router-link to="/">
      <h5 class="nav__logo">Preguntas Parlamentarias</h5>
    </router-link> 
    <div class="nav__menu-button" v-on:click="openMenu()">
      <img src="@/assets/img/icon-close.svg" alt="icono menu" v-if="open == true">
      <img src="@/assets/img/icon-menu.svg" alt="icono menu" v-else>
    </div>
    <ul class='nav__list' v-if="open == true || windowWidth >= 1008">
      <li v-for="item in menu" :key="item.name" class="nav__item">
        <router-link v-bind:to="item.route" class="nav__link"> 
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
        ],
        open: false,
        windowWidth: 0,
      }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      openMenu: function(){
        this.open = !this.open;
      },
      handleResize() {
        this.windowWidth = window.innerWidth;
        if(this.windowWidth >= 1008){
          this.open = false
        }
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
    flex-wrap: wrap;
    align-items: center;
  }

  .nav .nav__logo, .nav .nav__menu-button{
    padding: 20px 0;
  }

  .nav .nav__menu-button img{
    width: 35px;
  }
  
  .nav .nav__list {
    width: 100%;
    padding: 25px;
    border-bottom: 2px var(--primary-color) solid;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav__list .nav__item{
    margin-bottom: 15px;
    font-size: 1.25rem;
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
      flex-direction: row;
    }

    .nav .nav__list {
      width: auto;
      display: flex;
      flex-direction: row;
      border-bottom: 0;
    }

    .nav__list .nav__item{
      margin-left: 50px;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
</style>