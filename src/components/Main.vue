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
<!-- input -->
  <!-- <div class="searchbar debug">
    <input @keyup.enter="$emit('startFunction'), $emit('searchSeries')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle"> -->
<!-- button -->
    <!-- <button @click="$emit('startFunction'), $emit('searchSeries')">Cerca</button>
  </div> -->

<!-- card film-->
  <Card
  v-for="film in store.FilmRequest"
  :key="film"
  :title="film.title"
  :originalTitle="film.original_title"
  :language="film.original_language"
  :vote="film.vote_average"
  :img="film.poster_path"
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
</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;
</style>