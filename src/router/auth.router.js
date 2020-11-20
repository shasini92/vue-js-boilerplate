import { AUTH_ROUTES } from '@/constants'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

export default [
  {
    name: AUTH_ROUTES.LOGIN,
    path: '/login',
    component: Login,
    meta: {
      redirectsAuthenticated: true
    }
  },
  {
    name: AUTH_ROUTES.REGISTER,
    path: '/register',
    component: Register,
    meta: {
      redirectsAuthenticated: true
    }
  }
]
