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
      <div class="row">
        <div class="col">
          <ul>
            <li><a href="#">Audiodescrizione</a></li>
            <li><a href="#">Rapporti con gli investitori</a></li>
            <li><a href="#">Note Legali</a></li>
            <li class="border"><a href="#">Codice di servizio</a></li>
          </ul>

          <p>&copy; 1997-2023 Boolflix,Inc.</p>
          
        </div>

        <div class="col">
          <ul>
            <li> <a href="#">Centro assistenza</a></li>
            <li> <a href="#">Opportunità di lavoro</a></li>
            <li> <a href="#">Preferrenza per i cookie</a></li>
          </ul>
        </div>

        <div class="col">
          <ul>
            <li> <a href="#">Carte Regalo</a></li>
            <li> <a href="#">Condizioni di utilizzo</a></li>
            <li> <a href="#">Informazioni sull'azienda</a></li>
          </ul>
        </div>

        <div class="col">
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contattaci</a></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @use './scss/general.scss' as *;
  @use './scss/mixin.scss' as *;
  @use './scss/typography.scss' as *;

footer{
@include d-flex('both');
  .container-footer{
    width: 45%;
    margin:100px 0;
  
    
    .social-icon{
      width: 50%;
      height: 30px;
      
      .icon{
        margin:10px;
        font-size: x-large;
      }
    }

    li{
      margin:25px 0;
      font-size: small;
    }

    a,p{
      color:#7D7A70;
    }

    p{
      font-size: x-small;
    }

    a:hover{
      text-decoration: underline;
    }

    .row{
      display: flex;

      .col{
        margin:0 40px;
        .border{
            border:1px solid #7D7A70;
            padding: 5px 20px;
          }
        

      }
    }
  }
}

</style>