import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './css/base.scss'
import './css/icons.scss'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
