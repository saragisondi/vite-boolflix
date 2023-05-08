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

  <div class="container">

  </div>

  <div v-if="store.FilmRequest.length == 0">
    <h3 class="section">POPOLARI</h3>
    
    <div class="container-cards">
      <!-- Popular -->
      <Card
      v-for="popular in store.Populars"
      :key="popular"
      :title="popular.title"
      :originalTitle="popular.original_title"
      :language="popular.original_language"
      :vote="Math.ceil(popular.vote_average / 2)"
      :img="popular.poster_path"
      :overview="popular.overview"
      />
    </div>
  </div>

  <div v-else>
      <h3>FILM</h3>
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
      </div>
    

      <h3>SERIE TV</h3>
      <div class="container-cards">
        <!-- card series-->
        <Card
        v-for="series in store.SeriesRequest"
        :key="series"
        :title="series.name"
        :originalTitle="series.original_name"
        :language="series.original_language"
        :vote="Math.ceil(series.vote_average / 2)"
        :img="series.poster_path"
        :overview="series.overview"
        />
      </div>
  </div>


</template>


<style lang="scss">
@use './scss/general.scss' as *;

h3{
  margin:0 150px;
}

.container-cards{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 85px;
  margin-top:10px;
}
</style>