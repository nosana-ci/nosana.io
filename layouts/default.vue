<template>
  <div id="app">
    <nav-bar />
    <Nuxt />
    <foot />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
html {
  min-height: 100vh;
  background-size: cover;
}
</style>
