import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

function mount_app() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

console.log("Wow! What is this magic?");
console.log("Give me high five next time you see me!");

axios.get('/auth/me').then((res) => {
  if (res.data.success) {
    store.commit('login', res.data.name)
  } else {
    store.commit('logout')
  }
  mount_app()
})


