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
    overview:String,
  },

  
}
</script>

<template>

  <div class="container-cards">

    <div class="card">

      <h4 class="title">{{title}}</h4>
      <div class="overlay"></div>
      <div class="description">
        <h2>{{originalTitle}}</h2>
        <p>{{ overview }}</p>
        <!-- flag -->
        <img class="flag" :src="`/public/${language}.png`" :alt="language">
        <div>

          <!-- stars -->
          <font-awesome-icon icon="fa-solid fa-star" style="color: #d8a90a; "  v-for="(star, i) in vote" :key="i" />
          <font-awesome-icon icon="fa-regular fa-star" v-for="(star, i) in 5 - vote" :key="i"/>
        </div>
      </div>
      <!-- background card -->
      <img class="poster" :src="`https://image.tmdb.org/t/p/w200/${img}`" alt="">
  </div>

</div>

</template>

<style lang="scss" scoped>
  @use './scss/typography.scss' as *;
  @use './scss/mixin.scss' as *;
  @use './scss/general.scss' as *;


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
      color:$secondary-color;
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

    .overlay{
      background-color: rgba(0,0,0,0.5);
      position: absolute;
      width: 100%;
      height: 100%;
    }

  }


</style>