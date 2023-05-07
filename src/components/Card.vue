<script>
/*****************IMPORT***************************/
import {store} from './data/store'

export default {
  name:'Card',
  /*******************DATA*************************/
  data(){
    return{
      store
    }
  },
  /*******************PROPS*************************/
  props:{
    title:String,
    originalTitle:String,
    language:String,
    vote:Number,
    img:String,
    overview:String
  },
  
}
</script>

<template>

  <div class="container-cards">
    <div class="card">
      
      <h4 class="title">{{title}}</h4>
      <div class="description">
        <h6>Titolo originale:</h6>
        <h2>{{originalTitle}}</h2>
        <p>{{ overview }}</p>
        <!-- flag -->
        <img class="flag" :src="`/public/${language}.png`" :alt="language">
        <h6>Voto:</h6>
        <h4>{{vote.toFixed()}}</h4>
      </div>
      <img class="poster" :src="`https://image.tmdb.org/t/p/w200/${img}`" alt="">
  </div>

</div>

</template>

<style lang="scss" scoped>

  .card{
    width:300px;
    height:200px;
    margin:0 5px;
    position:relative;

    .title{
      position:absolute;
    }

    .description{
      position:absolute;
      color:#E5E5E5;
      display:none;

      p{
        font-size: small;
        margin:20px 10px;
      }
    }

    .flag{
      width: 30px;
      margin:0 10px;
    }
    .poster{
      width:300px;
      height:200px;
      object-fit: cover;
    }
  }
  
  .card:hover{
    width: 500px;
    height:400px;
    .poster{
      width:500px;
      height:400px;
    }

    .title{
      display:none;
    }
    .description{
      display: block;
    }

  }


</style>