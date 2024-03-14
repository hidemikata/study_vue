import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_info: []
  },
  getters: {
    user_info: (state) => {
      return state.user_info;
    }
  },
  mutations: {
    store_user_info(state, data) {
      state.user_info = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
