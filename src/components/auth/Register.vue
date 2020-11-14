<template>
  <ValidationObserver
    ref="registerForm"
    @submit.prevent
    class="ww-c-login-form"
    tag="form"
  >
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.FIRST_NAME')"
      rules="required"
      tag="div"
      class="ww-c-login-form__row"
    >
      <app-input
        :label="$t('ACCOUNT.FIRST_NAME')"
        :value="form.first_name"
        :errors="apiErrors"
        @input="form.first_name = $event"
        field-name="first_name"
      />

      <span class="ww-c-login-form__error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.LAST_NAME')"
      rules="required"
      tag="div"
      class="ww-c-login-form__row"
    >
      <app-input
        :label="$t('ACCOUNT.LAST_NAME')"
        :value="form.last_name"
        :errors="apiErrors"
        @input="form.last_name = $event"
        field-name="last_name"
      />

      <span class="ww-c-login-form__error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

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

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.RETYPE_PASSWORD')"
      rules="required|confirmed:Password"
      tag="div"
      class="ww-c-login-form__row"
    >
      <app-input
        :label="$t('ACCOUNT.RETYPE_PASSWORD')"
        :value="form.retypePassword"
        :errors="apiErrors"
        @input="form.retypePassword = $event"
        type="password"
      />
      <span class="ww-c-login-form__error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <button
      class="project-btn-base"
      v-text="$t('COMMON.SUBMIT')"
      @click="handleRegister"
    />
  </ValidationObserver>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        retypePassword: ''
      },
      apiErrors: {}
    }
  },
  methods: {
    ...mapActions('account', ['register']),
    async handleRegister () {
      const validation = await this.$refs.registerForm.validate()

      if (!validation) {
        return
      }

      try {
        await this.register(this.form)
        this.$router.push({ name: 'home' })
      } catch (errors) {
        this.apiErrors = errors
      }
    }
  }
}
</script>
