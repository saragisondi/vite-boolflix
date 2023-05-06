<script>
/*****************IMPORT***************************/
import "@fontsource/noto-sans"
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';
import {store} from './components/data/store';

export default {
  name:'App',
/***************COMPONENTS*************************/
  components:{
    Header,
    Main,
    Footer
  },

/*******************DATA*************************/  
  data(){
    return{
      store
    }
  },

/*************METHODS*************************/  
  methods:{
    // film
    getApi(){
      axios.get(store.ApiUrlFilm,{
        params:{
          query:store.searchTitle
        }
      })
      .then(result => {
        store.FilmRequest = result.data.results
        console.log(store.FilmRequest)
      })
    },
    // series
    getApiSeries(){
      axios.get(store.ApiUrlSeries,{
        params:{
          query:store.searchTitle
        }
      })
      .then(result => {
        store.SeriesRequest = result.data.results
        console.log(store.SeriesRequest)
      })
    },
  },

/*************MOUNTED*************************/  
  mounted(){
    // film
    this.getApi()
    // series
    this.getApiSeries()
  }
}
</script>

<template>

  <Header @startFunction="getApi" @searchSeries="getApiSeries"/>

  <Main />
  
  <Footer/>

</template>

<style lang="scss">
  @use './components/scss/general.scss'as *;
</style>