import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('uppercase', function(value) {
  if (!value) return ''

  return value.toUpperCase()
})

Vue.filter('timePrettier', function(timestamp) {
  if (!timestamp) return ''

  return moment(timestamp).format('LLL')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
