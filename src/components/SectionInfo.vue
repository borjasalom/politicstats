<template>
  <section class="section-info">
    <h3 > {{ title }}</h3>
    <p> {{ description }}</p>
  </section>
</template>

<script>

  export default {
    name: 'SectionChart',
    props: {
        title: String,
        description: String
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

  @media (min-width: 1008px) {
    .section-info {
      max-width: 1024px;
      padding: 50px 50px;
    }

    .section-info h3{
      margin-bottom: 50px;
    }
  }
</style>