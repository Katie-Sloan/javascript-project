<template>
  <li v-on:click="handleClick">
      <p style="font-size:5rem;width:100%;text-align:center;" id="fruit-emoji">{{fruit.emoji}}</p>
      <p id="fruit-name" >{{fruit.name}}</p>
    </li>
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
    width: 75%;
    border: 1px;
    background-color: palegoldenrod;
    padding: 20px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
}

li:hover{
  color: #ff7a59;
  border: #ff7a59 solid 1px;
  background:#fff;
}

.fruit-emoji {

}

.fruit-name {

}
</style>