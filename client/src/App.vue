<template>
  <div>
    <h1>FRUITS</h1>
    <div>
      <fruits-list :fruits="fruits"></fruits-list>
     
      <modal id='popup' name='fruit-modal' :width="800" :height='auto' :adaptive="true" :draggable="true" :reset="true">
      <fruit-detail :fruit="selectedFruit"></fruit-detail>
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

export default {
  name: "app",
  data(){
    return {
      fruits: [],
      selectedFruit: null,
      auto: "auto" 

    }
  },
  mounted(){
    this.fetchFruits();

    eventBus.$on('fruit-selected', (fruit) => {
      this.selectedFruit = fruit
      this.show()
    })

    // this.show()


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
    }
  },
  components: {
    "fruits-list": FruitsList,
    "fruit-detail": FruitDetail,
    'fruit-modal': VModal
  
  }
}
</script>

<style>

div > h1 {
  text-align: center;
}



</style>
