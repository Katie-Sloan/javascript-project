<template>
  <li v-on:click="handleClick">{{fruit.name}}</li>
</template>

<script>
import { eventBus } from '../main'
export default {
    name: 'fruit-list-item',
    props: ['fruit'],
    methods: {
        handleClick(){
            eventBus.$emit('fruit-selected', this.fruit)
        }
    }
}
</script>

<style>

</style>