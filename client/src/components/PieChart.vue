<template>
    <section class="charts">
        <h3>pie-basic</h3>
        <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
// import * as data from "../assets/data.js";
import FruitDetail from "./FruitDetail.vue";

export default {
  name: 'pie-chart', 
  props: ['nutritions'], 
  components: {
    VueHighcharts,
    "fruit-detail": FruitDetail
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
            ['Carbohydrates', this.nutritions.carbohydrates],
            ['Fat', this.nutritions.fat],
            ['Protein', this.nutritions.protein]
            // ['Chrome', 12.8, true, true],
            // ['Safari', 8.5],
            // ['Opera', 6.2],
            // ['Others', 0.7]
        ]
      }
    ]
  }}},
  mounted() {
      eventBus.$on('fruit-selected', (fruit) => {
      this.pieOptions.series.data[0] = ['Carbohydrates', fruit.nutritions.carbohydrates]
    })
  },
  methods: {}
};        
</script>