<template>
  <main class="main">
    <SectionList :list="topicsList" parentPaht='/topics/'/>
  </main>
</template>

<script>
  import topics from '@/assets/json/themes.json'
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
