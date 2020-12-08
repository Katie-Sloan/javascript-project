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
      <pie-chart :options="pieOptions"></pie-chart>
  </div>
</template>

<script>
import PieChart from "./PieChart.vue";
export default {
    name: 'fruit-detail',
    props: ['fruit'],
    components: {
        "pie-chart": PieChart
    },
    data() {
    return {
    
         pieOptions: {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: "Contents of Highsoft's weekly fruit delivery"
    },
    subtitle: {
      text: "3D donut in Highcharts"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Browser share',
        keys: ['name', 'y', 'sliced', 'selected'],
        data: [
            ['Carbohydrates', this.fruit.nutritions.carbohydrates],
            ['Fat', this.fruit.nutritions.fat],
            ['Protein', this.fruit.nutritions.protein]
            // ['Chrome', 12.8, true, true],
            // ['Safari', 8.5],
            // ['Opera', 6.2],
            // ['Others', 0.7]
        ]
      }
    ]
  }}},
}
</script>

<style>

</style>