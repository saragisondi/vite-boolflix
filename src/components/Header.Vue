<script>
import{store} from './data/store'
export default {
  name:'Header',
  data(){
    return{
      store,
    }
  }
}
</script>

<template>

  <header>
    <div class="container-header">
      <!-- logo & navbar-->
      <div class="left">
        <div class="logo">
          <img src="/public/logo-boolflix.png" alt="logo">
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Serie TV</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">Nuovi e popolari</a></li>
          <li><a href="#">La mia lista</a></li>
          <li><a href="#">Sfoglia per lingua</a></li>
        </ul>
      </div>
      
      <div class="right">
        <ul>
          <!-- input -->
          <div class="searchbar">
          
          <input @keyup.enter="$emit('startFunction'), $emit('searchSeries')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle">
        <!-- button -->
        <button @click="$emit('startFunction'), $emit('searchSeries')">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        </div>

          <li><a href="#">Bambini </a></li>
          <li><a href="#"><font-awesome-icon icon="fa-regular fa-bell" /></a></li>
          <li><a href="#">profilo</a></li>
        </ul>
      </div>
  
    </div>
  </header>

</template>

<style lang="scss" scoped>
 @use './scss/general.scss' as *;


  .container-header{
    display: flex;
    justify-content: space-between;

    .left{
      display: flex;
      width:70%;

      .logo{
        img{
          width: 150px;
          height:30px;
          vertical-align: middle;
        }
      }
    }
    
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      margin:0 20px;
      height:30px;
      li{
        list-style: none;
        a{
          text-decoration: none;
          margin:0 5px;
          font-weight: bold;
          // color:#E5E5E5;
        }
      }
    }
    .right{
      width: 30%;
      .searchbar{
        display: flex;
        justify-content: center;
        align-items: center;

        input{
          height:30px;
        }
        button{
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }
    }

  }

</style>