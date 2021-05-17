<template>
  <section class="section-list">
    <h2 class="section-list__title"> {{ title }} </h2>
    <div class="section-list__links">
      <router-link 
          :to="parentPaht + item.index"
          v-for="item in list" 
          :key='item.position'>
        <div 
          class="section-list__item" 
          :style="{backgroundColor: item.color}">
            <p>{{item.shortname}}</p>
            <img src="@/assets/img/arrow.svg" alt="Arrow forward IOS icon">
        </div>
      </router-link> 
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Topics', 
    props: {
      list: Array,
      parentPaht: String,
      title: String
    }
  }
</script>

<style scoped>
  .section-list{
    width: 90%;
    padding: 50px;
    margin-top: 50px;

    background-color: white;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .section-list__title {
    margin-bottom: 50px;
  }

  .section-list__links{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .section-list__item {
    width: 200px;
    height: 100px;
    padding: 25px;
    margin: 0px 5px 25px;

    background: var(--dark-color);
    

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section-list__item:hover {
    background: var(--primary-color);
  }

  .section-list__item p {
    color: white
  }

  .section-list__item img{
    width: 20px;
  }

  @media (min-width: 1008px) {
    .section-list {
      max-width: 1024px;
      padding: 50px 50px;
    }
  }
</style>