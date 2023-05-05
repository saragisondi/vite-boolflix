<script>
/*****************IMPORT***************************/
import {store} from './data/store'

export default {
  name:'Main',
/*******************DATA*************************/
  data(){
    return{
      store
    }
  },

  methods:{
  
  }
}
</script>

<template>
<!-- input -->
  <div class="searchbar debug">
    <input @keyup.enter="$emit('inizioFunzione')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle">

    <button @click="$emit('inizioFunzione')">Cerca</button>
  </div>

</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;
</style>