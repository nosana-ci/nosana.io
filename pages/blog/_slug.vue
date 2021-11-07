<template>
  <section class="section">
    <div class="container">
      <article class="content blog">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.description }}</p>
        <img :src="blog.img" width="200">
        <p>Article last updated: {{ formatDate(blog.updatedAt) }}</p>
        <nuxt-content :document="blog" />
      </article>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const blog = await $content('blogs', params.slug).fetch()

    return { blog }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss">
.blog {
  .number {
    align-items: initial;
    display: inline;
    font-size: 1em;
    height: auto;
    margin-right: 0;
    min-width: initial;
    padding:0;
    text-align: initial;
    vertical-align: initial;
    background-color: transparent;
    border-radius: initial;
    justify-content: initial;
  }
  .icon-link {
    width: auto;
    height: auto;
    &:after {
      content: '';
      position: absolute;
      left: -23px;
      padding-right:8px;
      top:0;
      display: block;
    }
  }
  *:hover > a > .icon-link:after {
    content: '#'
  }
}
</style>
