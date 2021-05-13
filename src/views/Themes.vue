<template>
  <div class="themes">
    <div class="themes__container">
      <h2 class="themes__title"> Temáticas </h2>
      <div class="themes__list">
        <router-link 
            :to="'/themes/' + topic.index"
            v-for="topic in themes" 
            :key='topic.position'>
          <div class="themes__topic">
              <p>{{topic.shortname}}</p>
              <img src="@/assets/img/arrow.svg" alt="Arrow forward IOS icon">
          </div>
        </router-link> 
      </div>
    </div>
  </div>
</template>

<script>
  import themesList from '@/assets/json/themes.json'


  export default {
    name: 'Themes', 
    data: function(){
      return {
        themes: themesList,
      }
    },
  }
</script>

