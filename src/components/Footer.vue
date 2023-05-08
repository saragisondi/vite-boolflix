<script>
export default {
  name:'Footer'
}
</script>

<template>
  <footer>
    <div class="container-footer">
      <!-- icons -->
      <div class="social-icon">
        <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
        <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
      </div>

      <!-- list -->
      <ul>
        <li><a href="#">Audiodescrizione</a></li>
        <li><a href="#">Rapporti con gli investitori</a></li>
        <li><a href="#">Note Legali</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;

footer{
  display: flex;
  justify-content: center;
  align-items: center;
  .container-footer{
    width: 40%;
    height:400px;
    margin:100px 0;
    border: 1px solid red;
  
    
    .social-icon{
      width: 50%;
      height: 30px;
      
      .icon{
        margin:10px;
        font-size: x-large;
      }
    }
  }
}

</style>