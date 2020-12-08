<template>
    <section class="charts">
        <h3>pie-basic</h3>
        <vue-highcharts :options="pieOptions" ref="pieChart"></vue-highcharts>
    </section>
</template>
<script>
import VueHighcharts from "vue2-highcharts";
import * as data from "../assets/data.js";

export default {
  name: 'pie-chart', 
  props: ['nutritions'], 
  components: {
    VueHighcharts
  },
  data() {
    return {
      pieOptions: data.PieData
    };
  },
  mounted() {},
  methods: {}
};
</script>