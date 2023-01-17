<template>
  <section class="section">
    <div class="container">
      <h1 class="has-text-centered title">
        Blog Posts
      </h1>
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
                <div
                  style="height: 250px; width: 100%"
                  :style="{
                    'background-image': `url('${
                      blog.thumbnail ? blog.thumbnail : blog.img
                    }')`,
                  }"
                  class="has-background-image"
                />
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
