<template>
  <div class="groups">
    <div class="groups__container">
      <h2 class="groups__title">Grupos Parlamentarios</h2>
      <div class="groups__list">
        <div 
          class="groups__party" 
          v-for="party in groupsList" 
          :key='party'>
            <p>{{party}}</p>
            <img src="@/assets/img/arrow.svg" alt="Arrow forward IOS icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    name: 'Groups', 
    data: function(){
      return {
        groupsList: [],
      }
    },
    mounted () {
    axios
      .get('https://api.tipiciudadano.es/parliamentary-groups/')
      .then(response => {
        for (let party of response.data) {
          this.groupsList.push(party.shortname)
        }
        return this.groupsList;
      })
  }
  }
</script>

<style scoped>
  
</style>
