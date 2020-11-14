<template>
  <ValidationObserver
    ref="loginForm"
    @submit.prevent
    class="ww-c-login-form"
    tag="form"
  >
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.EMAIL')"
      rules="required|email"
      tag="div"
      class="ww-c-login-form__row"
    >
      <app-input
        :label="$t('ACCOUNT.EMAIL')"
        :value="form.email"
        :errors="apiErrors"
        @input="form.email = $event"
        type="email"
        field-name="email"
      />
      <span class="ww-c-login-form__error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.PASSWORD')"
      rules="required"
      tag="div"
      class="ww-c-login-form__row"
    >
      <app-input
        :label="$t('ACCOUNT.PASSWORD')"
        :value="form.password"
        :errors="apiErrors"
        @input="form.password = $event"
        field-name="password"
        type="password"
      />
      <span class="ww-c-login-form__error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <button
      class="project-btn-base"
      v-text="$t('COMMON.SUBMIT')"
      @click="handleLogin"
    />
  </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
        this.$router.push({ name: 'home' })
      } catch (errors) {
        this.apiErrors = errors
      }
    }
  }
}
</script>
