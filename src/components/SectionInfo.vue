<template>
  <section class="section-info">
    <h3> {{ title }}</h3>
    <div v-for="section in sections" :key="section.title">
      <h4>{{ section.title}}</h4>
      <p v-for="parraf in section.description" :key="parraf"> {{ parraf}} </p>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'SectionChart',
    props: {
        title: String,
        sections: Array
    },
  }
</script>

<style scoped>
.section-info {
    width: 90%;
    padding: 20px 10px;
    margin: 50px;

    background-color: white;
  
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
  }

  .section-info h3, .section-info div {
    margin-bottom: 50px;
  }

  .section-info h4{
    margin-bottom: 20px;
    color: var(--primary-color)
  }

  .section-info p{
    margin-bottom: 10px;
  }

  @media (min-width: 1008px) {
    .section-info {
      max-width: 1024px;
      padding: 50px 50px;
    }

    
  }
</style>