<script>
/*****************************IMPORT*********************************************/
import DropdownMenu from './DropdownMenu.vue'
import{store} from './data/store'

export default {
  name:'Header',
  components:{
    DropdownMenu,
  },
  data(){
    return{
      store,
      isActive:false,
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
          <div class="searchbar" :class="{active:isActive}">
            <!-- button -->
            <div class="container-button">
              <button :class="{active:isActive}" @click="isActive = !isActive,$emit('startFunction'), $emit('searchSeries')">
                <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <!-- input -->
            <div class="container-input">
              <input :class="{active:isActive}"  @keyup.enter="$emit('startFunction'), $emit('searchSeries')" type="text" placeholder="Cosa vuoi vedere?" v-model="store.searchTitle" >
            </div>
        </div>

          <li><a href="#">Bambini </a></li>
          <!-- notifications -->
          <li>
            <button>
              <font-awesome-icon class="icon" icon="fa-regular fa-bell" />
            </button>
          </li>
          <li>
            <a href="#">
              <button>
                <DropdownMenu />
              </button> 
            </a>
          </li>
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
        position:relative;
        background-color:#141414 ;

        .container-input{
          width: 30px;
          vertical-align: middle;
          white-space: nowrap;
          position: relative;
        }
        
        input{
          width: 30px;
          height:30px;
          background: transparent;
          color:grey;
          border:none;
          font-size: 10pt;
          outline:none;
          padding-left:40px;
          transition: width .45s ease;
          opacity:0;
        }
        .container-button{
          border-right: none;
        }

        button{
          height: 26px;
          cursor: pointer;
          position: absolute;
          top:2px;
          left:0;
          margin-left:2px;
          z-index:1;

        }

      }
      button:active .icon{
        font-size: 25px;
      }
      
      .searchbar.active{
        width: 200px;

      }

      input.active{
        width: 200px;
        margin-right:400px;
          border:1px solid #E5E5E5;
          opacity:1;
        }


      a{
        margin:0 10px;
      }

    }
    
  }


</style>