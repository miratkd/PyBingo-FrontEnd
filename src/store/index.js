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
    },
    getNotifications (context, id) {
      const path = context.state.url + 'bingo_notification/' + id + '/get_notification/'
      return axios.get(path).then(response => {
        return response.data
      })
    },
    //
    // create account
    createAccount (context, params) {
      let path
      const payload = {
        name: params.name,
        password: params.password
      }
      if (params.type === 'card') {
        path = context.state.url + 'card/'
        payload.admin = params.admin
      } else path = context.state.url + 'bingo_admin/'

      return axios.post(path, payload).then(response => {
        if (params.type === 'card') window.localStorage.setItem('card', JSON.stringify(response))
        else window.localStorage.setItem('admin', JSON.stringify(response.data))
        return response.data
      })
    }
  },
  modules: {
  }
})
