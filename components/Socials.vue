<template>
  <div>
    <a v-for="social in socials" :key="social.icon" :href="social.link" target="_blank" class="subtitle is-5 mx-2">
      <i :class="'fab fa-' + social.icon" />
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      socials: [
        {
          link: 'https://twitter.com/nosana_ci',
          icon: 'twitter'
        },
        {
          link: 'https://discord.gg/9pGJ35SU',
          icon: 'discord'
        },
        {
          link: 'https://t.me/NosanaCI',
          icon: 'telegram'
        },
        {
          link: 'https://nosana.medium.com/',
          icon: 'medium'
        },
        {
          link: 'https://github.com/nosana-ci',
          icon: 'github'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
