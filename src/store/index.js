import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    url: 'http://127.0.0.1:8000/'
  },
  mutations: {
  },
  actions: {
    // ADMIN
    getAdmin (context, id) {
      const path = context.state.url + 'bingo_admin/' + id
      return axios.get(path).then(response => {
        return response.data
      })
    },
    getAdminNumbers (context, id) {
      const path = context.state.url + 'admin_number/' + id
      return axios.get(path).then(response => {
        return response.data
      })
    },
    addNumber (context, id) {
      const path = context.state.url + 'admin_number/?admin_id=' + id
      return axios.post(path).then(response => {
        return response.data
      })
    },
    cleanNumbers (context, id) {
      const path = context.state.url + 'bingo_admin/' + id + '/clear_numbers/'
      return axios.delete(path).then(() => { return 'ok' })
    },
    getCards (context, id) {
      const path = context.state.url + 'bingo_admin/' + id + '/all_cards/'
      return axios.get(path).then(response => {
        return response.data
      })
    }
    //
  },
  modules: {
  }
})
