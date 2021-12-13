import { createStore } from 'vuex'

export default createStore({
  state: {
    admin: undefined
  },
  mutations: {
    setAdmin (state, admin) {
      state.admin = admin
    }
  },
  actions: {
  },
  modules: {
  }
})
