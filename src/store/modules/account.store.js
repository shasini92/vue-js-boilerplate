import { authService } from '@apiServices/auth.service'
import router from '@/router'
import { DEFAULT_LOCALE, AUTH_ROUTES } from '@/constants'
import { configureVueI18n } from '@/main'
import { ACCOUNT_MUTATIONS, BASE_MUTATIONS } from '../mutation-types'

const user = JSON.parse(localStorage.getItem('user'))

const state = {
  user: user || null,
  loggedIn: !!user,
  locale: localStorage.getItem('locale') || DEFAULT_LOCALE
}

const mutations = {
  [ACCOUNT_MUTATIONS.LOG_IN_USER] (state, user) {
    state.loggedIn = true
    state.user = user
  },

  [ACCOUNT_MUTATIONS.LOGIN_FAILURE] (state) {
    state.loggedIn = false
    state.user = null
  },

  [ACCOUNT_MUTATIONS.LOGOUT_SUCCESS] (state) {
    state.loggedIn = false
    state.user = null
    router.push(AUTH_ROUTES.LOGIN)
  },

  [ACCOUNT_MUTATIONS.SET_LOCALE] (state, locale) {
    state.locale = locale
    localStorage.setItem('locale', state.locale)
    authService.setLanguageHeader()
    configureVueI18n()
  }
}

const actions = {
  async login ({ commit }, loginData) {
    commit(BASE_MUTATIONS.SET_APP_LOADING, true, { root: true })
    try {
      const user = await authService.login(loginData)
      commit(ACCOUNT_MUTATIONS.LOG_IN_USER, user)
    } catch (error) {
      commit(ACCOUNT_MUTATIONS.LOGIN_FAILURE, error)
      throw error
    } finally {
      commit(BASE_MUTATIONS.SET_APP_LOADING, false, { root: true })
    }
  },

  async register ({ commit }, registerData) {
    commit(BASE_MUTATIONS.SET_APP_LOADING, true, { root: true })
    try {
      const user = await authService.register(registerData)
      commit(ACCOUNT_MUTATIONS.LOG_IN_USER, user)
    } catch (error) {
      throw error
    } finally {
      commit(BASE_MUTATIONS.SET_APP_LOADING, false, { root: true })
    }
  },

  async logout ({ commit }) {
    try {
      authService.logout()
      commit(ACCOUNT_MUTATIONS.LOGOUT_SUCCESS)
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
