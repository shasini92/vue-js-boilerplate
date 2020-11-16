import Vue from 'vue'

const components = {
  'app-input': () => import('@/components/AppInput'),
  'app-checkbox': () => import('@/components/AppCheckbox'),
  'app-button': () => import('@/components/AppButton'),
  'app-modal': () => import('@/components/modals/AppModal')
}

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
)
