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
    vote:Number
  }
}
</script>

<template>
  <ul>
    <li>{{title}}</li>
    <li>{{originalTitle}}</li>
    <li>
      <!-- flag -->
      <img :src="`/public/${language}.png`" :alt="language">
    </li>
    <li>{{vote}}</li>

  </ul>
</template>

<style lang="scss">
li{
  height:20px;

  img{
    width: 20px;
  }
}
</style>