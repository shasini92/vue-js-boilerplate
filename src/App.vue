<template>
  <div id="app">
    <app-nav />
    <app-loader />
    <img src="./assets/logo.png" />
    <router-view />
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="sass">
@import '/styles/app.scss';
</style>
