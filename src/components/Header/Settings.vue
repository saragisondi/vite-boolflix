<script>
  export default {
  name:'Settings',
  }
</script>

<template>
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
</template>


<style lang="scss" scoped>
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
</style>