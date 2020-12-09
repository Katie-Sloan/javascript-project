<template>
  <div>
    <h1>Fruits Of The World!</h1>
    <div>
      <fruits-list :fruits="fruits"></fruits-list>
     
      <modal class='popup' name='fruit-modal' :width="800" :height='auto' :adaptive="true" :resizable="true" :draggable="true" :reset="true" :styles="popup">
      <fruit-detail v-if="selectedFruit" :fruit="selectedFruit"></fruit-detail>
      <pie-chart v-if="selectedFruit" :options="pieOptions" :key="chartKey"></pie-chart>
      </modal>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js';
import VModal from './main.js';
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
      auto: "auto", 

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
      this.show()
    })


  },
  methods: {
    fetchFruits() {
      FruitService.getFruits()
        .then(fruits => this.fruits = fruits);
    },
    show () {
      this.$modal.show('fruit-modal');
    },
    hide () {
      this.$modal.hide('fruit-modal');
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
    'fruit-modal': VModal,
    "pie-chart": PieChart
  }
}
</script>

<style>

div > h1 {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 60pt;
  color: orange;
}

.popup {
  box-shadow: 5px 10px 5px orange;
}


body {
  background: url('./assets/fruit-background.jpg');
  height: 25%;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
}

</style>
