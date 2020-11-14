import Axios from 'axios'
import assign from 'lodash/assign'
import { DEFAULT_LOCALE } from '@/constants'

const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGGED_IN_USER: 'auth/me'
}

export default class AuthService {
  async login (data) {
    try {
      const loginData = await Axios.post(ENDPOINTS.LOGIN, data)
      const user = await this.handleAuthChange(loginData.data)
      return user
    } catch (error) {
      throw error.response.data.errors
    }
  }

  async register (data) {
    try {
      const registerData = await Axios.post(ENDPOINTS.REGISTER, data)
      const user = await this.handleAuthChange(registerData.data)
      return user
    } catch (error) {
      throw error.response.data.errors
    }
  }

  async getLoggedInUser () {
    const userData = await Axios.get(ENDPOINTS.LOGGED_IN_USER).then(
      response => {
        return response
      }
    )
    localStorage.setItem('user', JSON.stringify(userData.data))
    return userData.data
  }

  async logout () {
    try {
      this.clearLocalStorageAuthData()
      this.removeAuthHeader()
    } catch (error) {
      throw error
    }
  }

  handleAuthChange (data = { token: null }) {
    this.setLocalStorageAuthData(data)
    this.setAuthHeader()
    return this.getLoggedInUser()
  }

  setLocalStorageAuthData (data) {
    localStorage.setItem('token', data.access_token)
  }

  setAuthHeader () {
    assign(Axios.defaults.headers, {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  }

  removeAuthHeader () {
    delete Axios.defaults.headers['Authorization']
  }

  clearLocalStorageAuthData () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  setLanguageHeader () {
    const locale = localStorage.getItem('locale') || DEFAULT_LOCALE
    this.setHeader('Accept-Language', locale)
  }

  setHeader (header, value) {
    assign(Axios.defaults.headers, {
      [header]: value
    })
  }

  isLoggedIn () {
    return !!localStorage.getItem('token')
  }
}

export const authService = new AuthService()
