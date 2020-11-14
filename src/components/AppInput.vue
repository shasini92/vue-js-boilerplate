<template>
  <div>
    <span> {{ label }} </span>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="type"
      :disabled="disabled"
    />
    <p v-for="error in errors[fieldName]" :key="error">{{ error }}</p>
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
    }
  }
}
</script>

<style></style>
