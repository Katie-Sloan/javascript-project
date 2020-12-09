<template>
    <section class="charts">
        <h3>pie-basic</h3>
        <vue-highcharts :options="options" ref="pieChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
// import * as data from "../assets/data.js";
import FruitDetail from "./FruitDetail.vue";

export default {
  name: 'pie-chart', 
  props: ['options'], 
  components: {
    VueHighcharts,
    "fruit-detail": FruitDetail
  },
  
  
  methods: {}
};        
</script>