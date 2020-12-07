<template>
  <div v-if="fruit">
      <h2>{{fruit.name}}</h2>
      <br>
      <p><span>Family</span>: {{fruit.family}}</p>
      <p>Just think of plant names like your last name followed by your first name: Harper John, except that plants are called by their Genus and species: Rosa rugosa.
          <span>Genus</span>: {{fruit.genus}}
      </p>
      <p>
      </p>



  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>