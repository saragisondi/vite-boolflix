<script>
/*****************IMPORT***************************/
import ContainerCard from './ContainerCard.vue'

import {store} from './data/store'

export default {
  name:'Main',
/*******************DATA*************************/
  data(){
    return{
      store
    }
  },
  components:{
    ContainerCard
  },
  emits: ['startFunction', 'searchSeries']
}
</script>

<template>
<div class="container">

  <ContainerCard/>

</div>
</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;
</style>