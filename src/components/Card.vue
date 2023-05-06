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
    img:String
  },
  
}
</script>

<template>
  <ul>
    <li><h4>Titolo:</h4></li>
    <li>{{title}}</li>
    <li><h4>Titolo originale:</h4></li>
    <li>{{originalTitle}}</li>
    <li><h4>Lingua:</h4></li>
    <li>
      <!-- flag -->
      <img class="flag" :src="`/public/${language}.png`" :alt="language">
    </li>
    <li><h4>Voto:</h4></li>
    <li>{{vote.toFixed()}}</li>
  </ul>
  <ul>
    
  </ul>
  <li>
    <img class="poster" :src="`https://image.tmdb.org/t/p/w200/${img}`" :alt="title">
  </li>

</template>

<style lang="scss" scoped>
ul{
  border:1px solid black;

  li{
    height:20px;
    .flag{
      width: 20px;
    }

    .poster{
      height:200px;
    }
}

}
</style>