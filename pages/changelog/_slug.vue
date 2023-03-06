<template>
  <section class="section">
    <div class="container">
      <article class="content changelog">
        <div class="columns is-centered">
          <div class="column is-3">
            <nuxt-link to="/changelog">
              &lt; All Changelogs
            </nuxt-link>
          </div>
          <div class="column is-6">
            <h1>{{ changelog.title }}</h1>
            <p class="has-text-accent">
              <span v-if="changelog.author">By <b>{{ changelog.author }} </b>
              </span>
              <b>{{ formatDate(changelog.createdAt) }}</b>
            </p>
            <nuxt-content :document="changelog" />
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
    const changelog = await $content('changelog', params.slug).fetch();

    return { changelog };
  },
  head () {
    return {
      title: this.changelog.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.changelog.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.changelog.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://nosana.io' + this.changelog.img
        },
        {
          name: 'twitter:card',
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:domain',
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'nosana.io'
        },
        {
          name: 'twitter:title',
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.changelog.title
        },
        {
          name: 'twitter:description',
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.changelog.description
        },
        {
          name: 'twitter:image',
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://nosana.io' + this.changelog.img
        }

      ]
    };
  },
  methods: {
    scrollTo (id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    },
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>

<style lang="scss">
.changelog {
  .icon-link {
    width: auto;
    height: auto;
    &:after {
      content: "";
      position: absolute;
      left: -23px;
      padding-right: 8px;
      top: 0;
      display: block;
    }
  }
  *:hover > a > .icon-link:after {
    content: "#";
  }
  .nuxt-content > ul {
    margin-left: 1rem;
  }
}
</style>
