<template>
  <div class="project-c-navbar">
    <div class="project-c-navbar__ctn-inner">
      <div class="project-c-navbar-languages">
        <app-button
          v-for="(value, key) in LOCALES"
          :key="key"
          @click="onLocaleChange(key)"
          class-name="project-btn-base project-u-mx"
        >
          {{ value }}
        </app-button>
      </div>

      <router-link
        :to="{ name: COMMON_ROUTES.HOME }"
        class="project-c-navbar__logo"
        >{{ $t('ROUTES.HOME') }}</router-link
      >

      <div class="project-c-navbar-items">
        <div v-if="loggedIn">
          <app-button @click="logout">
            {{ $t('COMMON.LOGOUT') }}
          </app-button>
        </div>
        <div v-else>
          <router-link
            :to="{ name: AUTH_ROUTES.LOGIN }"
            active-class="is-active"
            class="project-c-navbar__nav-item"
            >{{ $t('ROUTES.LOGIN') }}
          </router-link>
          <router-link
            :to="{ name: AUTH_ROUTES.REGISTER }"
            active-class="is-active"
            class="project-c-navbar__nav-item"
            >{{ $t('ROUTES.REGISTER') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { LOCALES, AUTH_ROUTES, COMMON_ROUTES } from '@/constants'
import { ACCOUNT_MUTATIONS } from '@store/mutation-types'

export default {
  name: 'AppNav',

  data () {
    return {
      LOCALES,
      AUTH_ROUTES,
      COMMON_ROUTES
    }
  },

  computed: {
    ...mapState('account', ['locale', 'loggedIn'])
  },

  methods: {
    ...mapMutations('account', { setLocale: ACCOUNT_MUTATIONS.SET_LOCALE }),
    ...mapActions('account', ['logout']),

    onLocaleChange (locale) {
      this.setLocale(locale)
    }
  }
}
</script>
