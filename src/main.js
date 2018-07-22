import Vue from 'vue'
import App from './App.vue'

// importing components globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
