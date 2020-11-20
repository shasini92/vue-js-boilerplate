<template>
  <ValidationObserver
    ref="registerForm"
    @submit.prevent
    tag="form"
    class="project-c-register"
  >
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.FIRST_NAME')"
      rules="required"
      tag="div"
      class="project-c-register__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.FIRST_NAME')"
        :value="form.first_name"
        :errors="apiErrors"
        @input="form.first_name = $event"
        field-name="first_name"
      />

      <span class="project-input-error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.LAST_NAME')"
      rules="required"
      tag="div"
      class="project-c-register__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.LAST_NAME')"
        :value="form.last_name"
        :errors="apiErrors"
        @input="form.last_name = $event"
        field-name="last_name"
      />

      <span class="project-input-error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.EMAIL')"
      rules="required|email"
      tag="div"
      class="project-c-login__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.EMAIL')"
        :value="form.email"
        :errors="apiErrors"
        @input="form.email = $event"
        type="email"
        field-name="email"
      />
      <span class="project-input-error-message">
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
        :value="form.password"
        :errors="apiErrors"
        @input="form.password = $event"
        field-name="password"
        type="password"
      />
      <span class="project-input-error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('ACCOUNT.RETYPE_PASSWORD')"
      rules="required|confirmed:Password"
      tag="div"
      class="project-c-login__input-group"
    >
      <app-input
        :label="$t('ACCOUNT.RETYPE_PASSWORD')"
        :value="form.retypePassword"
        :errors="apiErrors"
        @input="form.retypePassword = $event"
        type="password"
      />
      <span class="project-input-error-message">
        {{ errors[0] }}
      </span>
    </ValidationProvider>

    <app-button
      v-text="$t('COMMON.SUBMIT')"
      @click="handleRegister"
      class-name="project-btn-base"
    />
  </ValidationObserver>
</template>

<script>
import { mapActions } from 'vuex'
import { COMMON_ROUTES } from '@/constants'

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
        this.$router.push({ name: COMMON_ROUTES.HOME })
      } catch (errors) {
        this.apiErrors = errors
      }
    }
  }
}
</script>
