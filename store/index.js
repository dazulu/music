import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.PATREON_TOKEN}`

const groomPatronData = (data) => {
  if (data.included === undefined) return []
  let filteredData = []
  const included = data.included
  included.forEach((item) => {
    // Checking item.attributes.created because somehow I am in my own patron data. Have to filter myself out!
    if (item.attributes.first_name && item.attributes.created !== '2015-10-07T18:23:43+00:00') {
      filteredData.push({
        name: item.attributes.first_name,
        image: item.attributes.thumb_url
      })
    }
  })
  return filteredData
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      patrons: []
    },
    mutations: {
      setPatrons (state, data) {
        state.patrons = data
      }
    },
    actions: {
      async nuxtServerInit ({commit}, {req}) {
        if (!process.env.PATREON_TOKEN || !process.env.PATREON_USER_ID) return
        return axios.get(`https://api.patreon.com/oauth2/api/campaigns/${process.env.PATREON_USER_ID}/pledges`).then((response) => {
          commit('setPatrons', groomPatronData(response.data))
        }).catch((err) => {
          console.log('Patreon API Error:', err)
        })
      }
    }
  })
}

export default createStore
