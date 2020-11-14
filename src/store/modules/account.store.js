import { authService } from '@apiServices/auth.service'
import router from '@/router'
import { DEFAULT_LOCALE } from '@/constants'
import { configureVueI18n } from '@/main'

const user = JSON.parse(localStorage.getItem('user'))

const state = {
  user: user || null,
  loggedIn: !!user,
  locale: localStorage.getItem('locale') || DEFAULT_LOCALE
}

const mutations = {
  LOG_IN_USER (state, user) {
    state.loggedIn = true
    state.user = user
  },

  LOGIN_FAILURE (state) {
    state.loggedIn = false
    state.user = null
  },

  LOGOUT_SUCCESS (state) {
    state.loggedIn = false
    state.user = null
    router.push({ name: 'login' })
  },

  SET_LOCALE (state, locale) {
    state.locale = locale
    localStorage.setItem('locale', state.locale)
    authService.setLanguageHeader()
    configureVueI18n()
  }
}

const actions = {
  async login ({ commit }, loginData) {
    commit('SET_APP_LOADING', true, { root: true })
    try {
      const user = await authService.login(loginData)
      commit('LOG_IN_USER', user)
    } catch (error) {
      commit('LOGIN_FAILURE', error)
      throw error
    } finally {
      commit('SET_APP_LOADING', false, { root: true })
    }
  },

  async register ({ commit }, registerData) {
    commit('SET_APP_LOADING', true, { root: true })
    try {
      const user = await authService.register(registerData)
      commit('LOG_IN_USER', user)
    } catch (error) {
      throw error
    } finally {
      commit('SET_APP_LOADING', false, { root: true })
    }
  },

  async logout ({ commit }) {
    try {
      authService.logout()
      commit('LOGOUT_SUCCESS')
    } catch (error) {
      throw error
    }
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
