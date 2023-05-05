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
  }
}
</script>

<template>
<!-- input -->
  <div class="searchbar debug">
    <input @keyup.enter="$emit('inizioFunzione')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle">

    <button @click="$emit('inizioFunzione')">Cerca</button>
  </div>

  <Card
  v-for="film in store.FilmRequest"
  :key="film"
  :title="film.title"
  :originalTitle="film.original_title"
  :language="film.original_language"
  :vote="film.vote_average"
  />

</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;
</style>