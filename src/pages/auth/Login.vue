<template>
  <ValidationObserver
    ref="loginForm"
    @submit.prevent
    tag="form"
    class="project-c-login"
  >
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.EMAIL')"
      rules="required|email"
      tag="div"
      class="project-c-login__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.EMAIL')"
        :placeholder="$t('ACCOUNT.EMAIL')"
        :value="form.email"
        :errors="apiErrors"
        @input="form.email = $event"
        type="email"
        field-name="email"
      />
      <span>
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.PASSWORD')"
      rules="required"
      tag="div"
      class="project-c-login__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.PASSWORD')"
        :placeholder="$t('ACCOUNT.PASSWORD')"
        :value="form.password"
        :errors="apiErrors"
        @input="form.password = $event"
        field-name="password"
        type="password"
      />
      <span>
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <app-button
      v-text="$t('COMMON.SUBMIT')"
      @click="handleLogin"
      class-name="project-btn-base"
    />
  </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { COMMON_ROUTES } from '@/constants'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      apiErrors: {}
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login']),
    async handleLogin () {
      const validation = await this.$refs.loginForm.validate()

      if (!validation) {
        return
      }

      try {
        await this.login(this.form)
        this.$router.push({ name: COMMON_ROUTES.HOME })
      } catch (errors) {
        this.apiErrors = errors
      }
    }
  }
}
</script>
