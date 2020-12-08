<template>
  <div v-if="fruit">
      <h2>{{fruit.name}}</h2> {{fruit.emoji}}
      <br>
      <h4><b>Order:</b> {{fruit.order}} </h4> 
      <p>Orders contain different families. Each order is divided into families.</p>
      <h4><b>Family:</b> {{fruit.family}} </h4> 
      <p>Families are plants with many botanical features in common. There are roughly 150-500 different families of plants (the botanists can't agree on how many)!</p>
      <h4><b>Genus:</b> {{fruit.genus}} </h4>
      <p>Just think of plant names like your last name followed by your first name: Harper John, except that plants are called by their Genus and species: Rosa rugosa.</p>
      <p>
          <span><b>Nutrition (per 100g)</b></span>: 
          Carbohydrates: {{fruit.nutritions.carbohydrates}}g
          Protein: {{fruit.nutritions.protein}}g
          Fat: {{fruit.nutritions.fat}}g
          Calories: {{fruit.nutritions.calories}}kcal
          Sugar: {{fruit.nutritions.sugar}}g  
      </p>
  </div>
</template>

<script>
export default {
    name: 'fruit-detail',
    props: ['fruit']
}
</script>

<style>
 div {
     padding: 10px;
     cursor: pointer;
 }
</style>