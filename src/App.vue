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
import { eventBus } from './main.js'
import FruitsList from './components/FruitsList.vue'
import FruitDetail from './components/FruitDetail.vue'

export default {
  name: "app",
  data(){
    return {
      fruits: [],
      selectedFruit: null 
    }
  },
  mounted(){
    fetch('https://fruityvice.com/api/fruit/all')
    .then(res => res.json())
    .then(data => this.fruits = data.results)

    eventBus.$on('fruit-selected', (fruit) => {
      this.selectedFruit = fruit
    })
  },
  components: {
    "fruits-list": FruitsList,
    "fruit-detail": FruitDetail
  }
}
</script>

<style>

</style>
