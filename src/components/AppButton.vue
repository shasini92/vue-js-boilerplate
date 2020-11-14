<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <div class="cf-c-btn--with-icon__icon" v-if="this.$slots.icon">
      <slot name="icon"></slot>
    </div>
    <slot />
  </button>
</template>

<script>
// import { BUTTON_TYPES, BUTTON_VARIATIONS } from '../constants'

export default {
  props: {
    disabled: {
      required: false,
      default: false
    },

    type: {
      type: String,
      required: false,
      default: 'button'
      //   validator (value) {
      //     return BUTTON_TYPES.indexOf(value) !== -1
      //   }
    },

    variation: {
      type: String,
      required: false,
      default: 'primary'
      //   validator (value) {
      //     return BUTTON_VARIATIONS.indexOf(value) !== -1
      //   }
    },

    size: {
      type: String,
      required: false,
      default: 'md'
    },

    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },

    uppercased: {
      type: Boolean,
      required: false,
      default: true
    },

    capitalized: {
      type: Boolean,
      required: false,
      default: false
    },

    heightSm: {
      type: Boolean,
      required: false,
      default: false
    },

    paddingSmall: {
      type: Boolean,
      required: false,
      default: false
    },

    className: {
      type: String,
      required: false,
      default: ''
    }
  },

  computed: {
    classes () {
      return ''
      //   return `
      //     cf-c-btn cf-c-btn--${this.variation}
      //     cf-c-btn--${this.size}
      //     ${this.fullWidth ? ' cf-c-btn--full' : ''}
      //     ${this.capitalized ? ' cf-c-btn--capitalized' : ''}
      //     ${this.uppercased ? ' cf-c-btn--uppercased' : ''}
      //     ${this.heightSm ? ' cf-c-btn--height-sm' : ''}
      //     ${this.$slots.icon ? ' cf-c-btn--with-icon' : ''}
      //     ${this.paddingSmall ? ` cf-c-btn--pad-hor-sm` : ''}
      //     ${this.className ? ` ${this.className}` : ''}
      //     `
    }
  }
}
</script>
