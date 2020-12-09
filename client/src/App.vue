<template>
  <div>
    <h1>FRUITS</h1>
    <div>
      <fruits-list :fruits="fruits"></fruits-list>
      <fruit-detail v-if="selectedFruit" :fruit="selectedFruit"></fruit-detail>
      <pie-chart v-if="selectedFruit" :options="pieOptions" :key="chartKey"></pie-chart>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js';
import FruitsList from './components/FruitsList.vue';
import FruitDetail from './components/FruitDetail.vue';
import FruitService from '@/services/FruitService';
import PieChart from "./components/PieChart.vue";

export default {
  name: "app",
  data(){
    return {
      chartKey: 0,
      fruits: [],
      selectedFruit: null,
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
            
            
        ]
      }
    ]
  } 
    }
  },
  mounted(){
    this.fetchFruits();

    eventBus.$on('fruit-selected', (fruit) => {
      this.selectedFruit = fruit
      this.updateFruitData()
    })
  },
  methods: {
    fetchFruits() {
      FruitService.getFruits()
        .then(fruits => this.fruits = fruits);
    },
    updateFruitData() {
      const updatedData = [['Carbohydrates', this.selectedFruit.nutritions.carbohydrates],
            ['Fat', this.selectedFruit.nutritions.fat],
            ['Protein', this.selectedFruit.nutritions.protein]]
            this.pieOptions.series[0].data = updatedData
            this.chartKey += 1
            // Update key to force re-render
    }
  },
  components: {
    "fruits-list": FruitsList,
    "fruit-detail": FruitDetail,
    "pie-chart": PieChart
  }
}
</script>

<style>

div > h1 {
  text-align: center;
}

</style>
