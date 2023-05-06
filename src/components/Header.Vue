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
          <div class="searchbar">
            
            <!-- button -->
            <div class="container-button">
              <button @click="$emit('startFunction'), $emit('searchSeries')">
                <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <!-- input -->
          <input @keyup.enter="$emit('startFunction'), $emit('searchSeries')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle">
        </div>

          <li><a href="#">Bambini </a></li>
          <li><a href="#"><font-awesome-icon class="icon" icon="fa-regular fa-bell" /></a></li>
          <li><a href="#">profilo <font-awesome-icon icon="fa-solid fa-caret-down" /></a></li>
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
    margin:20px 0;


    .left{
      display: flex;
      margin-left:50px;

      .logo{
        img{
          width: 100px;
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
            color:#E5E5E5;
            font-size: small;
        }
      }
    }
    .right{
      margin-right:30px;
      .searchbar{

        input{
          height:30px;
          border:1px solid #E5E5E5;
          background-color:#141414 ;
          color:#E5E5E5;
          outline:none;
          padding: 5px 50px;
        }

        .container-button{
          border-right: none;
        }
        
        button{
          width: 30px;
          height: 26px;
          cursor: pointer;
          position: absolute;
          top:22px;
          margin-left:2px;
          z-index:1;
          border: none;
          background-color:#141414 ;
          color: #E5E5E5;
        }
      }

      a{
        margin:0 10px;
      }
    }

  }

</style>