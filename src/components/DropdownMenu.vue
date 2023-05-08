<script>
/*******************************IMPORT*************************************/
import Avatar from './Avatar.vue'
import Settings from './Settings.vue';

  export default {
  name:'DropdownMenu',
  components:{
    Avatar,
    Settings
  }
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

    <Avatar/>

    <Settings/>

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


<style lang="scss">
@use './scss/general.scss' as *;
@use './scss/typography.scss' as *;
@use './scss/mixin.scss' as *;


.fa-caret-down,.fa-caret-up{
  position:absolute;
  top:30px;
  right:45px;
}

.fa-caret-up{
  opacity:0;
}

.container-avatar{
  width: 40px;
  height:40px;
  margin:0 10px;
  @include d-flex('vertical');
  
  img{
    width: 40px;
    height:40px;
    object-fit: cover;
    border-radius: 5px;
  }
}

.dropdown{
  position: relative;
  display: inline-block;

  .account{
    display: none;
    @include p-absolute;
    top:2px;
    right:-45px;
    background-color: $primary-color;
    border:1px solid $secondary-color;
    width: 205px;
    height:400px;
  }
}

/***************************HOVER**********************************/

button:hover .fa-caret-down{
  opacity:0;
}

button:hover .fa-caret-up{
  opacity:1;
}

button:hover .account{
  display:block;
}

</style>