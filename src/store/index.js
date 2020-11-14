import Vue from 'vue'
import Vuex from 'vuex'
import { account } from './modules/account.store'

Vue.use(Vuex)
const state = {
  appLoading: false
}

const getters = {}

const mutations = {
  SET_APP_LOADING (state, payload) {
    state.appLoading = payload
  }
}

const actions = {}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    account
  }
})

export default store
