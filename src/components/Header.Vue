<script>
import{store} from './data/store'
export default {
  name:'Header',
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
                <!-- profile -->
                <div>
                  <div class="container-avatar">
                    <img src="/public/avatar_1.png" alt="avatar">
                  </div>
                </div> 
                <!-- dropdown -->
                <div class="dropdown">

                  <div class="account">
                    <!-- profile2 -->
                    <div class="container-avatar other-account">
                      <img src="/public/avatar_2.png" alt="avatar"><span>Mirko</span>
                    </div>
                    <!-- profile3 -->
                    <div class="container-avatar other-account">
                      <img src="/public/avatar_3.png" alt="avatar"><span>Laura</span>
                    </div>
                    <!-- profile kid -->
                    <div class="container-avatar other-account">
                      <img src="/public/profile_kid.png" alt="avatar"><span>Bambini</span>
                    </div>

                    <div class="settings">
                      <!-- manage accounts -->
                      <div class="manage-accounts">
                        <font-awesome-icon icon="fa-solid fa-pencil" /> <span>Gestisci i profili</span>
                      </div>
                      <!-- transfer account -->
                      <div class="transfer-account">
                        <font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /> <span>Trasferisci profilo</span>
                      </div>
                      <!-- account -->
                      <div class="manage-account">
                        <font-awesome-icon icon="fa-solid fa-user" /> <span>Account</span>
                      </div>
                      <!-- service center -->
                      <div class="service-center">
                        <font-awesome-icon icon="fa-solid fa-question" /> <span>Centro assistenza</span>
                      </div>                      
                    </div>
                    <!-- log out -->
                    <div class="log-out">
                      <button>
                        <span>Esci da Netflix</span>
                      </button>
                    </div>
                  </div>

                </div>
                <!-- arrow -->
                <font-awesome-icon icon="fa-solid fa-caret-down" /><font-awesome-icon icon="fa-solid fa-caret-up" />
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

      .fa-caret-down,.fa-caret-up{
        position:absolute;
        top:30px;
        right:45px;
      }
      .fa-caret-up{
        opacity:0;
      }

      button:hover .fa-caret-down{
        opacity:0;
      }

      button:hover .fa-caret-up{
        opacity:1;
      }

      button:hover .account{
      display:block;
    }


      .container-avatar.other-account{
        margin: 10px 15px;
        font-weight: bold;

        img{
          vertical-align: middle;
          margin-right:10px;
        }
      }

      .container-avatar{
        width: 40px;
        height:40px;
        margin:0 10px;
        display: flex;
        align-items: center;
        
        img{
          width: 40px;
          height:40px;
          object-fit: cover;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      
      
    }
    
    .dropdown{
      position: relative;
      display: inline-block;
      .account{
        display: none;
        position:absolute;
        top:5px;
        right:-45px;
        background-color: #141414;
        // tofix
        border:1px solid #E5E5E5;
        width: 205px;
        height:400px;
      }
      .settings{
        text-align: start;
        margin:30px 15px;
        border-bottom:1px solid #E5E5E5;

        div{
          margin:20px 0;

          span{
            margin-left:10px;
          }

        }
        
      }
      span:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      
    }
    
  }


</style>