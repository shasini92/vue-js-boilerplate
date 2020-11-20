import Vue from 'vue'
import Vuex from 'vuex'
import { account } from './modules/account.store'
import { modals } from './modules/modals.store'
import { BASE_MUTATIONS } from './mutation-types'

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
  modules: {
    account,
    modals
  }
})

export default store
