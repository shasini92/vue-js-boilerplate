<template>
  <div class="hello"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  computed: {
    ...mapState('account', ['user'])
  }
}
</script>

<style></style>
