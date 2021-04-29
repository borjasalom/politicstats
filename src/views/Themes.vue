<template>
  <div class="themes">
    <div class="themes__container">
      <h2 class="themes__title"> Temáticas </h2>
      <div class="themes__list">
        <div 
          class="themes__topic" 
          v-for="theme in themesList" 
          :key='theme'>
            <p>{{theme}}</p>
            <img src="@/assets/img/arrow.svg" alt="Arrow forward IOS icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Themes', 
    data: function(){
      return {
        themesList: ['Democracia', 'Energía y clima', 'LGTBI', 'Comercio internacional', 'Adicciones', 'Conflictos y paz', 'Cooperación al desarrollo',
        'Derechos digitales', 'Dependencia', 'Empleo',
      ],
      }
    },
  }
</script>

<style scoped>
  .themes{
    width: 100%;
    padding: 50px;

    display: flex;
    justify-content: center;
  }

  .themes__container{
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

  .themes__title {
    margin-bottom: 50px;
  }

  .themes__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .themes__topic{
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

  .themes__topic p{
    color: white
  }

  .themes__topic img{
    width: 20px;
  }
</style>
