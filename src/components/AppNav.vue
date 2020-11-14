<template>
  <div>
    <router-link :to="{ name: 'home' }">{{ $t('ROUTES.HOME') }}</router-link>
    <div>
      <button
        v-for="(value, key) in LOCALES"
        :key="key"
        @click="onLocaleChange(key)"
      >
        {{ value }}
      </button>
    </div>
    <div v-if="loggedIn">
      <app-button class="cf-u-ml-sm" @click="logout">
        {{ $t('COMMON.LOGOUT') }}
      </app-button>
    </div>
    <div v-else>
      <router-link
        class="cf-c-navbar__nav-item"
        :to="{ name: 'login' }"
        active-class="is-active"
        >{{ $t('ROUTES.LOGIN') }}
      </router-link>
      <router-link
        class="cf-c-navbar__nav-item"
        :to="{ name: 'register' }"
        active-class="is-active"
        >{{ $t('ROUTES.REGISTER') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { LOCALES } from '@/constants'

export default {
  name: 'AppNav',

  data () {
    return {
      LOCALES
    }
  },

  computed: {
    ...mapState('account', ['locale', 'loggedIn'])
  },

  methods: {
    ...mapMutations('account', ['SET_LOCALE']),
    ...mapActions('account', ['logout']),

    onLocaleChange (locale) {
      this.SET_LOCALE(locale)
    }
  }
}
</script>
