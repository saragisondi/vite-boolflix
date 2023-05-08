<script>
import Card from './Card.vue'
import {store} from './data/store'

export default {
  name:'ContainerCard',
  components:{
    Card
  },
  data(){
    return{
      store,
    }
  },


}

</script>

<template>
    <div class="container-cards">
    
    <!-- card film-->
    <Card
      v-for="film in store.FilmRequest"
      :key="film"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :vote="Math.ceil(film.vote_average / 2)"
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
</template>


<style lang="scss">
@use './scss/general.scss' as *;

.container-cards{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 85px;
}
</style>