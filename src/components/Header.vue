<template>
  <header class="header">
    <div class="header__content">
      <div class="header__text">
        <h3> {{ subTitle }}</h3>
        <h2> {{ title }}</h2>
        <p> {{ description }}</p>
      </div>
      <div class="header__img">
        <img v-if="image == 'home'"
        src="@/assets/img/header-home.svg" 
        alt="Imagen header">

        <img v-if="image == 'groups'"
        src="@/assets/img/header-groups.svg" 
        alt="Imagen header">

        <img v-if="image == 'topics'"
        src="@/assets/img/header-topics.svg" 
        alt="Imagen header">
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'Header',
    props:{
      title: String,
      subTitle: String,
      description: String,
      image: String
    }
  }
</script>


<style scoped>
  .header {
    width: 100%;
    background-color: white; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header .header__content{
    padding: 50px 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__text h2{
    margin-bottom: 15px;
  }

  .header__text h2{
    color: var(--primary-color)
  }

/*   .header__text h3{
    color: var(--secondary-color)
  } */

  .header__content .header__img{
      display: none;
  }

  @media (min-width: 640px) {
    .header__content .header__text{
      width: 75%;
    }
  }

  @media (min-width: 1008px) {
    
    .header .header__content{
      max-width: 1024px;
      padding: 50px;

      justify-content: space-between;
    }

    .header__content .header__img{
      width: 35%;
    }

    .header__content .header__text{
      width: 55%;
    }
    
    .header__content .header__img{
      display: block;
    }

    .header__img img{
      width: 100%;
    }
  }
</style>
