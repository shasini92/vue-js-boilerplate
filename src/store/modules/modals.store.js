import { MODAL_MUTATIONS } from '../mutation-types'

const state = {
  layeredModals: []
}

const mutations = {
  [MODAL_MUTATIONS.ADD_LAYERED_MODALS] (state, { modals, method = 'unshift' }) {
    if (method === 'unshift') {
      state.layeredModals.unshift(...modals)
    } else if (method === 'push') {
      state.layeredModals.push(...modals)
    }
  }
}

export const modals = {
  namespaced: true,
  state,
  mutations
}
