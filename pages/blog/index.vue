<template>
  <section class="section">
    <div class="container">
      <h1 class="has-text-centered title">
        Blog Posts
      </h1>
      <div class="tabs is-centered py-3">
        <ul style="border: none;">
          <li class="is-active">
            <a>Blogs</a>
          </li>
          <li>
            <nuxt-link to="/changelog">
              Changelogs
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="columns my-6 is-multiline">
        <client-only>
          <nuxt-link
            v-for="blog of blogs"
            :key="blog.slug"
            class="column is-one-third"
            :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
          >
            <atropos :options="{ rotateTouch: false }">
              <div
                class="has-border-accent-light has-radius p-4"
                style="min-height: 432px"
              >
                <!-- <div
                  style="height: 250px; width: 100%"
                  :style="{
                    'background-image': `url('${
                      blog.thumbnail ? blog.thumbnail : blog.img
                    }')`,
                  }"
                  class="has-background-image"
                /> -->
                <img
                  :src="blog.thumbnail ? blog.thumbnail : blog.img"
                  style="width: 100%; object-fit: cover;"
                >
                <h3 class="title is-5 has-text-accent mt-2">
                  {{ blog.title }}
                </h3>
                <h4 class="subtitle is-7">
                  Created {{ formatDate(blog.createdAt) }}
                </h4>
                <p class="block has-text-white">
                  {{ blog.description }}
                  <nuxt-link
                    :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
                  >
                    Read more
                  </nuxt-link>
                </p>
              </div>
            </atropos>
          </nuxt-link>
        </client-only>
      </div>
      <slogan-block class="mt-6 pt-6" />
    </div>
  </section>
</template>

<script>
import SloganBlock from '../../components/SloganBlock.vue';
export default {
  components: { SloganBlock },
  colorMode: 'dark',
  async asyncData ({ $content, params }) {
    const blogs = await $content('blog')
      .only(['title', 'createdAt', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      blogs
    };
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  font-size: 1.1rem;
  li {
    font-weight: 500;
    margin: 0 10px;
    a {
      border-bottom: 0px;
    }
    &.is-active {
      border-bottom: 2px solid $accent;
    }
  }
}
</style>
