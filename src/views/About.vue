<template>
  <div class="main">
    <SectionInfo 
      :title='title'
      :sections='sections'
    />
  </div>
</template>

<script>
  import SectionInfo from '@/components/SectionInfo.vue'
  import aboutJSON from '@/assets/json/aboutApp.json'

  export default {
    name: 'Topics', 
    data: function(){

      console.log(aboutJSON);
      return {
        title: 'Acerca',
        sections: aboutJSON,
      }
    },
    components:{
      SectionInfo,
    }
  }
</script>
