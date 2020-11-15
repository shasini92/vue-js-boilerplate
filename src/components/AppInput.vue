<template>
  <div class="project-u-flex-justify-between">
    <span class="project-u-my-auto"> {{ label }} </span>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :disabled="disabled"
      class="project-input-field"
      :placeholder="placeholder"
    />
    <p
      v-for="error in errors[fieldName]"
      :key="error"
      class="project-input-error-message"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: [String, Number, Object, Array],
      required: false,
      default: ''
    },

    label: {
      type: String,
      required: false,
      default: ''
    },

    errors: {
      type: [Array, Object],
      required: false,
      default: () => []
    },

    type: {
      type: String,
      required: false,
      default: 'text'
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    fieldName: {
      type: String,
      required: false,
      default: ''
    },

    placeholder: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style></style>
