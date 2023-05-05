<script>
/*****************IMPORT***************************/
import Header from './components/Header.Vue';
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
    getApi(){
      axios.get(store.ApiUrl,{
        params:{
          query:store.searchTitle
        }
      })
      .then(result => {
        store.FilmRequest = result.data.results
        console.log(store.FilmRequest)
      })
    }
  },

/*************MOUNTED*************************/  
  mounted(){
    this.getApi()
  }
}
</script>

<template>

  <Header/>
  <Main @inizioFunzione="getApi"/>
  <Footer/>

</template>

<style>

</style>