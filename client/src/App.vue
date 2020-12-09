<template>
  <div>
    <h1>Fruits Of The World!</h1>
    <div>
      <fruits-list :fruits="fruits"></fruits-list>
     
      <modal name='fruit-modal' width="750" height="auto" :adaptive="true" :scrollable="true" :draggable="true" :reset="true">
        <div class="pop-content">
      <fruit-detail v-if="selectedFruit" :fruit="selectedFruit"></fruit-detail>
      <pie-chart v-if="selectedFruit" :options="pieOptions" :key="chartKey"></pie-chart>
      </div>
      </modal>
     
     
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
      // auto: "auto", 

      pieOptions: {
        chart: {
          type: "pie",
          options3d: {
          enabled: true,
          alpha: 45
          }
        },
        title: {
        text: "Relative proportions of macros"
        },
        subtitle: {
        text: "Carboydrates, fat and protein"
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
            name: 'Amount in grams',
            keys: ['name', 'y', 'sliced', 'selected'],
            data: []
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
    
    "pie-chart": PieChart
  }
}
</script>

<style>


div > h1 {
  
    font-family: 'Montserrat', sans-serif;
    font-size: 60pt;
    width: 85%;
    border: 1px;
    background-color: rgba(253, 243, 129, 0.906);
    padding: 20px;
    margin: 10px;
    margin-left: 70px;
    margin-right: 70px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    
    color: rgb(255, 153, 0);
    
    box-shadow: 5px 10px 5px orange;
}

.pop-content {
  overflow-y: auto;
  height: 100%;
}

body {
  background: url('./assets/background_berries.jpg');
  height: 25%;
  background-position: center;
  background-repeat: repeat;
  /* background-size: cover; */
}

</style>
