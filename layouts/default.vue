<template>
  <div id="app">
    <nav-bar />
    <Nuxt />
    <nos-foot data-aos="zoom-in" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://nosana.io' + this.$route.path
        }
      ]
    };
  }
};
</script>

<style lang="scss">
html {
  min-height: 100vh;
  background-size: cover;
}
</style>
