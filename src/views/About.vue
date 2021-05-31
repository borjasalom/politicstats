<template>
  <div class="main">
    <SectionInfo 
      :title='title'
      :description='description'
    />
  </div>
</template>

<script>
  import SectionInfo from '@/components/SectionInfo.vue'

  export default {
    name: 'Topics', 
    data: function(){
      return {
        title: '¿Cuales son los objetivos de la Aplicación?',
        description: "El proyecto tiene el objetivo de facilitar a los usuarios datos oficiales acerca de las \
        preguntas escritas que realizan los diputados al gobierno dentro del parlamento. Por ende, se ha creado una aplicación \
        web que consume la API (api.tipiciudadano.es/) para recopilar toda la información, procesarla y exponérsela a los usuarios en forma de gráfica. \
        Cada gráfica tiene la finalidad de responder una pregunta como: ¿Sobre que temáticas suelen preguntar más los diputados? ¿Sobre que temáticas suelen \
        preguntar más cierto grupo parlamentario? ¿Hay algunas temáticas que suelen ser más preguntadas por los diputados más jóvenes?, etc. Los datos se agrupan en dos \
        grandes conjuntos llamados temáticas y grupos parlamentarios. Dentro de cada uno se muestra toda la información que atañe a cierta temática o grupo parlamentario. \
        Con esta labor se pretende que el ciudadano se interese por la actividad parlamentaría y que disponga de una fuente de información fiable que no se vea influenciada por ideologías o \
        intereses que puedan repercutir en la opinión del usuario."
      }
    },
    components:{
      SectionInfo,
    }
  }
</script>
