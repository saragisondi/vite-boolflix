<script>
/******************IMPORT***************************/
import Header from './components/Header.Vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name:'App',

  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<template>

  <Header/>
  <Main/>
  <Footer/>

</template>

<style>

</style>