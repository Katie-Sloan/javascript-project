import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VModal)
