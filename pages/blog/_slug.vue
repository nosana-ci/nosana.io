<template>
  <section class="section">
    <div class="container">
      <article class="content blog">
        <div class="columns is-centered">
          <div class="column is-3">
            <nuxt-link to="/blog">
              &lt; All blogs
            </nuxt-link>
          </div>
          <div class="column is-6">
            <div style="height: 350px; width: 100%;" :style="{'background-image': `url('${blog.img}')`}" class="has-background-image" />
            <h1>{{ blog.title }}</h1>
            <p class="has-text-accent">
              <span v-if="blog.author">By <b>{{ blog.author }} </b> </span>
              <span>- Article last updated: <b>{{ formatDate(blog.updatedAt) }}</b></span>
            </p>
            <nuxt-content :document="blog" />
          </div>
          <div class="column is-3">
            &nbsp;
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  colorMode: 'dark',
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