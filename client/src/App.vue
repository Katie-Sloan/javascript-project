<template>
  <div>
    <h1>Fruits</h1>
    <div>
      <fruits-list :fruits="fruits"></fruits-list>
      <fruit-detail :fruit="selectedFruit"></fruit-detail>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main.js';
import FruitsList from './components/FruitsList.vue';
import FruitDetail from './components/FruitDetail.vue';
import FruitService from '@/services/FruitService';

export default {
  name: "app",
  data(){
    return {
      fruits: [],
      selectedFruit: null 
    }
  },
  mounted(){
    this.fetchFruits();

    eventBus.$on('fruit-selected', (fruit) => {
      this.selectedFruit = fruit
    })
  },
  methods: {
    fetchFruits() {
      FruitService.getFruits()
        .then(fruits => this.fruits = fruits);
    }
  },
  components: {
    "fruits-list": FruitsList,
    "fruit-detail": FruitDetail
  }
}
</script>

<style>

</style>
