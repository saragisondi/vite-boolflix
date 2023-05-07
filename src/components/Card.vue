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
  <!-- <ul>
    <li><h4>Titolo:</h4></li>
    <li>{{title}}</li>
    <li><h4>Titolo originale:</h4></li>
    <li>{{originalTitle}}</li>
    <li><h4>Lingua:</h4></li>
    <li> -->
      <!-- flag -->
      <!-- <img class="flag" :src="`/public/${language}.png`" :alt="language">
    </li>
    <li><h4>Voto:</h4></li>
    <li>{{vote.toFixed()}}</li>
  </ul> -->

  <div class="container-cards">
    <div class="card">
      <h4>{{title}}</h4>
      <img :src="`https://image.tmdb.org/t/p/w200/${img}`" alt="">
  </div>

</div>

</template>

<style lang="scss" scoped>
// ul{
//   border:1px solid black;

//   li{
//     height:20px;
//     .flag{
//       width: 20px;
//     }

//     .poster{
//       height:200px;
//     }
// }

// }


  .card{
    width:300px;
    height:200px;
    margin:0 5px;
    position:relative;


    h4{
      position:absolute;
      color:#E5E5E5;
      text-align: center;
    }

    img{
      width:300px;
      height:200px;
      object-fit: cover;
    }
  }

</style>