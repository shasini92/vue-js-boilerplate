<template>
  <div id="app">
    <div class="project-l-app">
      <app-nav />
      <app-loader />
      <main class="project-l-app__ctn">
        <router-view />
      </main>
      <layered-modals />
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppLoader from '@/components/AppLoader'
import LayeredModals from '@/components/modals/LayeredModals'
import AppModal from '@/components/modals/AppModal'
import { mapMutations } from 'vuex'
import { MODAL_MUTATIONS } from '@store/mutation-types'

export default {
  name: 'App',

  components: {
    AppNav,
    AppLoader,
    LayeredModals,
    AppModal
  },

  // HOW TO USE MODALS
  // created () {
  //   this.addLayeredModal({
  //     modals: [AppModal, AppModal, AppModal]
  //   })
  // },

  methods: {
    ...mapMutations('modals', {
      addLayeredModal: MODAL_MUTATIONS.ADD_LAYERED_MODALS
    })
  }
}
</script>

<style></style>

<style lang="sass">
@import '/styles/app.scss';
</style>
