<template>
  <div>
    <span> {{ label }} </span>
    <input
      :value="value"
      @change="$emit('input', $event.target.checked)"
      type="checkbox"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: [Boolean],
      required: false,
      default: false
    },

    label: {
      type: String,
      required: false,
      default: ''
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style></style>
