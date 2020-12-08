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
        innerSize: 100,
        depth: 45
      }
    },
    series: [
      {
        name: "Delivered amount",
        data: [
        //   ["Sugar", (nutritions.sugar)],
          ["Fat", 1]
        //   ["Reddish (bag)", 5],
        //   ["Grapes (bunch)", 1]
        ]
      }
    ]
  }}},
  mounted() {},
  methods: {}
};        
</script>