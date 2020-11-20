import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_MUTATIONS } from './mutation-types'
import modules from './modules-import'

Vue.use(Vuex)

const state = {
  appLoading: false
}

const getters = {}

const mutations = {
  [BASE_MUTATIONS.SET_APP_LOADING] (state, payload) {
    state.appLoading = payload
  }
}

const actions = {}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})

export default store
