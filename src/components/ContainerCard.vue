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
    
    <div class="jumbotron">
      
      <div class="description">
        
        <div class="title">
          <div class="square">
            <p>Top</p>
            <h3>10</h3>
          </div>
          <h1>Oggi al n°1 tra i film</h1>
        </div>
        <h3>"Tutti abbiamo un supereroe dentro di noi, ci vuole solo un po' di magia per farlo uscire fuori. Nel caso di Billy Batson, basta pronunciare una sola parola – SHAZAM! – per far sì che uno scaltro quattordicenne rimasto orfano si trasformi in un adulto, il Supereroe Shazam, per gentile concessione di un anziano mago."</h3>
        
        <div class="container-button">
          <button><font-awesome-icon icon="fa-solid fa-play" /> Riproduci</button>
          <button><font-awesome-icon icon="fa-solid fa-circle-info" /> Altre info</button>
        </div>

      </div>
      
      <img src="/public/jumbotron.jpeg" alt="jumbotron">
    </div>
    
    <h2 class="section">POPOLARI</h2>
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
      <h2 class="section">FILM</h2>
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
    

      <h2 class="section">SERIE TV</h2>
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


<style lang="scss" scoped>
@use './scss/general.scss' as *;
@use './scss/mixin.scss' as *;
@use './scss/typography.scss' as *;


.jumbotron{
  width: 100%;
  height:900px;
  @include d-flex("both");
  position:relative;
  
  .description{
    width: 30%;
    position:absolute;
    left:50px;
    bottom:80px;
    
    .title{
      display:flex;
      margin-bottom:20px;
    }
    .square{
      font-weight:bold;
      background-color:red;
      width: 43px;
      height:43px;
      text-align: center;
      margin-right:10px;
      border-radius:5px;
      p{
        font-size: small;
      }
    }
  }
  
  img{
    width: 100%;
    height:900px;
    object-fit: cover;
  }
}
.section{
  margin:0 150px;
}
.container-cards{
  @include d-flex("both");
  flex-wrap: wrap;
  margin-bottom: 85px;
  margin-top:10px;
}
.container-button{
  button:first-child{
    background-color:white;
    color:black;
  }
  button:last-child{
    background-color: #d0d0d09c;
  }
}
button{
  margin: 20px 10px;
  font-size: large;
  font-weight:bold;
  padding:10px 20px;
}
</style>