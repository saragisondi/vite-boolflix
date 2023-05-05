<script>
export default {
  name:'Header'
}
</script>

<template>

  <header>
    <div class="container-header debug">
      <!-- logo -->
      <div class="logo">
        <img src="" alt="logo">
      </div>
  
      <div class="button">
        <!-- select -->
        <select name="languages" id="languages">
          <option value="italian">Italiano</option>
        </select>
        
        <!-- button -->
        <button>Accedi</button>
  
      </div>
  
    </div>
  </header>

</template>

<style lang="scss" scoped>
 @use './scss/general.scss' as *;

  .container-header{
    display: flex;
    justify-content: space-between;
  }

</style>