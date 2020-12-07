<template>
  <div v-if="fruit">
      <h2>{{fruit.name}}</h2>
      <br>
      <p>Orders contain different families. Each order is divided into families. 
          <span>Order</span>: {{fruit.order}}
      </p>
      <p>Families are plants with many botanical features in common. There are roughly 150-500 different families of plants (the botanists can't agree on how many)!
          <span>Family</span>: {{fruit.family}}
      </p>
      <p>Just think of plant names like your last name followed by your first name: Harper John, except that plants are called by their Genus and species: Rosa rugosa.
          <span>Genus</span>: {{fruit.genus}}
      </p>
      <p>
          <span>Nutrition (per 100g)</span>: 
          Carbohydrates: {{fruit.nutrition.carbohydrates}}g
          Protein: {{fruit.nutrition.protein}}g
          Fat: {{fruit.nutrition.fat}}g
          Calories: {{fruit.nutrition.calories}}kcal
          Sugar: {{fruit.nutrition.sugar}}g  
      </p>



  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>