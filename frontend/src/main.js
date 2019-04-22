import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


