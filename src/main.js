import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
export { default as componentePreguntasFrecuentes } from './components/componentePreguntasFrecuentes.vue'

var ES6Promise = require('es6-promise')
ES6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

