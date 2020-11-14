import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules'

// Add a rule.
extend('required', {
  ...required,
  message: name => `${name} is required`
})

extend('email', {
  ...email,
  message: 'Please enter a valid email address'
})

extend('confirmed', {
  ...confirmed,
  message: 'Passwords are not matching'
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
