<script>
  export default {
  name:'DropdownMenu',
  }
</script>

<template>
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
<font-awesome-icon icon="fa-solid fa-caret-down" />
<font-awesome-icon icon="fa-solid fa-caret-up" />

</template>


<style lang="scss" scoped>
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
      
      
    
    
    .dropdown{
      position: relative;
      display: inline-block;
      .account{
        display: none;
        position:absolute;
        top:2px;
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
</style>