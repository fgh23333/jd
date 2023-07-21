import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem("login") == null ? false : localStorage.getItem("login") == true ? true : false
  },
  getters: {
  },
  mutations: {
    changeLogin(e, states) {
      e.isLogin = states
      localStorage.setItem("login", states)
    }
  },
  actions: {
  },
  modules: {
  }
})
