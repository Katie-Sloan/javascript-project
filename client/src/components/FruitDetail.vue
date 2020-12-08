<template>
  <div v-if="fruit">
      <h2>{{fruit.name}}</h2> {{fruit.emoji}}
      <br>
      <h4><b>Order:</b> {{fruit.order}} </h4> 
      <p>Orders contain different families. Each order is divided into families.</p>
      <h4><b>Family:</b> {{fruit.family}} </h4> 
      <p>Families are plants with many botanical features in common. There are roughly 150-500 different families of plants (the botanists can't agree on how many)!</p>
      <h4><b>Genus:</b> {{fruit.genus}} </h4>
      <p>Just think of plant names like your last name followed by your first name: Harper John, except that plants and their seeds/berries/fruits are called by their Genus and Species, such as Malus Domestica, the common Apple.</p>
      <p>
          <span><b>Nutrition (per 100g)</b></span>: 
          Carbohydrates: {{fruit.nutritions.carbohydrates}}g
          Protein: {{fruit.nutritions.protein}}g
          Fat: {{fruit.nutritions.fat}}g
          Calories: {{fruit.nutritions.calories}}kcal
          Sugar: {{fruit.nutritions.sugar}}g  
      </p>
      <p> {{fruit.name}} originate from <b>{{fruit.origin.country}}</b>, you can see where this is on the map below!
      <div id="mapid">
          <l-map :zoom=3 :center="[ fruit.origin.latitude, fruit.origin.longitude ]">
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker :lat-lng="[ fruit.origin.latitude, fruit.origin.longitude ]"></l-marker>
          </l-map>
      </div>
          <!-- L.map('mapid').setView([{{fruit.origin.latitude}}, {{fruit.origin.longitude}}], 13); -->
      <!-- </div> -->
  </div>
</template>

<script>
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = '/';
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
});
export default {
    name: 'fruit-detail',
    props: ['fruit']
}
</script>

<style>
#mapid {
    height: 360px;
    width: 720px;
    justify-content: center;
}
</style>