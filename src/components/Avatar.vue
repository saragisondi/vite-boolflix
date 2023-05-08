<script>
export default {
  name:'Avatar',
}
</script>

<template>
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
</template>



<style lang="scss">
.container-avatar.other-account{
  margin: 10px 15px;
  font-weight: bold;

  img{
    vertical-align: middle;
    margin-right:10px;
  }
}
</style>