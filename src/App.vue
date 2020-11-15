<template>
  <div id="app">
    <div class="project-l-app">
      <app-nav />
      <app-loader />
      <main class="project-l-app__ctn">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppLoader from '@/components/AppLoader'

export default {
  name: 'App',
  components: {
    AppNav,
    AppLoader
  }
}
</script>

<style></style>

<style lang="sass">
@import '/styles/app.scss';
</style>
