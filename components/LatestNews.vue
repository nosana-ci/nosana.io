<template>
  <div>
    <h1 class="has-text-centered title" data-aos="fade-up">
      Latest News
    </h1>
    <div class="columns my-6">
      <client-only>
        <nuxt-link
          v-for="(blog, i) of blogs"
          :key="blog.slug"
          class="column is-one-third"
          :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
          data-aos="fade-up"
          :data-aos-delay="200 * i"
        >
          <atropos :options="{ rotateTouch: false }">
            <div
              class="has-border-accent-light has-radius p-4"
              style="min-height: 325px"
            >
              <div
                style="height: 150px; width: 100%"
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
    <div class="has-text-centered">
      <nuxt-link
        class="button is-accent has-text-weight-semibold is-wide"
        to="/blog"
      >
        All Posts
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: null
    };
  },
  created () {
    this.getLatestBlogs();
  },
  methods: {
    async getLatestBlogs () {
      this.blogs = await this.$content('blogs')
        .only(['title', 'createdAt', 'description', 'img', 'slug'])
        .limit(3)
        .sortBy('createdAt', 'desc')
        .fetch();
    },
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>
