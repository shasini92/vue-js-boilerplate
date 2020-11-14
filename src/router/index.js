import Vue from 'vue'
import Router from 'vue-router'
import { authService } from '@apiServices/auth.service'
import HelloWorld from '@/components/HelloWorld'
import Login from '@authComponents/Login'
import Register from '@authComponents/Register'
import { each } from 'lodash'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {
        redirectsAuthenticated: true
      }
    },
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta: {
        redirectsAuthenticated: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = authService.isLoggedIn()

  if (to.meta.requiresAuth && !loggedIn) {
    next({ name: 'login' })
  } else if (to.meta.redirectsAuthenticated && loggedIn) {
    next({ name: 'home' })
  } else if (to.meta.guards) {
    each(to.meta.guards, guard => {
      guard(to, from, next)
    })
  } else {
    next()
  }
})

export default router
