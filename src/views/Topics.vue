<template>
  <main class="main">
    <SectionList 
      title="Temáticas"
      :list="topicsList" 
      parentPaht='/topics/'/>
  </main>
</template>

<script>
  import topics from '@/assets/json/topicsApp.json'
  import SectionList from '@/components/SectionList.vue'

  export default {
    name: 'Topics', 
    data: function(){
      return {
        topicsList: topics,
      }
    },
    components:{
      SectionList,
    }
  }
</script>
