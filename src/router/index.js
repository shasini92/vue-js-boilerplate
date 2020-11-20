import Vue from 'vue'
import Router from 'vue-router'
import { authService } from '@apiServices/auth.service'
import HelloWorld from '@/components/HelloWorld'
import NotFoundPage from '@/pages/errors/404'
import { each } from 'lodash'
import { AUTH_ROUTES, COMMON_ROUTES } from '@/constants'
import authRoutes from './auth.router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: COMMON_ROUTES.HOME,
      component: HelloWorld,
      meta: {
        // requiresAuth: true
      }
    },
    ...authRoutes,
    {
      name: COMMON_ROUTES.NOT_FOUND,
      path: '/404',
      component: NotFoundPage
    },
    {
      path: '*',
      redirect: { name: COMMON_ROUTES.NOT_FOUND }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = authService.isLoggedIn()

  if (to.meta.requiresAuth && !loggedIn) {
    next({ name: AUTH_ROUTES.LOGIN })
  } else if (to.meta.redirectsAuthenticated && loggedIn) {
    next({ name: COMMON_ROUTES.HOME })
  } else if (to.meta.guards) {
    each(to.meta.guards, guard => {
      guard(to, from, next)
    })
  } else {
    next()
  }
})

export default router
