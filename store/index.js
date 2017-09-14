import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.PATREON_TOKEN}`

const createStore = () => {
  return new Vuex.Store({
    state: {
      patrons: [
        {
          name: 'foo',
          photo: 'bar'
        }
      ]
    },
    actions: {
      LOAD_PATRON_LIST: function ({ commit }) {
        axios.get(`https://api.patreon.com/oauth2/api/campaigns/${process.env.PATREON_USER_ID}/pledges`).then((response) => {
          commit('SET_PATRON_LIST', { list: response.data })
        }, (err) => {
          console.log(err)
        })
      }
    },
    mutations: {
      SET_PATRON_LIST: (state, { list }) => {
        state.patrons = list
      }
    },
    getters: {
      openPatrons: state => {
        return state.patrons
      }
    }
  })
}

export default createStore
