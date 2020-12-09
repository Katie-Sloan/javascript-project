import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import { LMap, LTileLayer, LMarker, icon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

export const eventBus = new Vue();
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VModal, {
  dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 'auto'
  }})

