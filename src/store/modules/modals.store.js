const state = {
  layeredModals: []
}

const mutations = {
  ADD_LAYERED_MODALS (state, { modals, method = 'unshift' }) {
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
