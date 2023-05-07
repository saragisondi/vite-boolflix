<script>
/*****************IMPORT***************************/
import Card from './Card.vue'
import {store} from './data/store'

export default {
  name:'Main',
/*******************DATA*************************/
  data(){
    return{
      store
    }
  },
  components:{
    Card
  },
  emits: ['startFunction', 'searchSeries']
}
</script>

<template>
<div class="container">

  <div class="container-cards">
    
    <!-- card film-->
      <Card
      v-for="film in store.FilmRequest"
      :key="film"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :vote="film.vote_average"
      :img="film.poster_path"
      :overview="film.overview"
      />
    
      <!-- card series-->
      <Card
      v-for="series in store.SeriesRequest"
      :key="series"
      :title="series.name"
      :originalTitle="series.original_name"
      :language="series.original_language"
      :vote="series.vote_average"
      />
  </div>
</div>
</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;

  .container{
    margin-top:400px;
  }
  .container-cards{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
  }



</style>