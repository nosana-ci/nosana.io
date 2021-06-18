<template>
  <div class="has-text-centered mt-6">
    <h1 class="title" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="title" v-else>An error occurred</h1>
    <nuxt-link to="/" class="button">Home page</nuxt-link>
  </div>
</template>

<script>

export default {
  props: ['error'],

  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>
