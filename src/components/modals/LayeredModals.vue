<template>
  <div>
    <div v-for="(layeredModal, index) in layeredModals" :key="index">
      <component
        v-if="activeModalIndex === index"
        :is="layeredModal"
        @queue-closed="handleModalQueue"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LayeredModals',

  data () {
    return {
      activeModalIndex: 0
    }
  },

  methods: {
    handleModalQueue () {
      this.activeModalIndex++
    }
  },

  computed: {
    ...mapState('modals', ['layeredModals'])
  }
}
</script>
