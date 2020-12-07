<template>
  <div>
      <ul>
          <fruit-list-item v-for="(fruit, index) in fruits" :fruit="fruit" :key="index"></fruit-list-item>
      </ul>
  </div>
</template>

<script>
import FruitListItem from './FruitListItem.vue'

export default {
    name: 'fruits-list',
    props: ['fruits'],
    components: {
        "fruit-list-item": FruitListItem
    }
}
</script>

<style>

</style>