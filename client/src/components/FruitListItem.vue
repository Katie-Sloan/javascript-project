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

li {
    width: 35%;
    border: 1px;
    background-color: palegoldenrod;
    padding: 20px;
    margin: 10px;
    text-align: center;
}

</style>