import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    name: ""
  },
  mutations: {
    login(state, name) {
      state.isAuthenticated = true
      state.name = name
    },
    logout(state) {
      state.isAuthenticated = false
      state.name = name
    }
  },
  actions: {
    checkAuth(context) {
      axios.get('/auth/me').then((res) => {
        console.log(res)
        if (res.data.success) {
          context.commit('login', res.data.name)
        } else {
          context.commit('logout')
        }
      })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    }
  }
})

export default store
