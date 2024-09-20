<template>
  <div v-if="blogs && blogs.length > 0" class="section">
    <div class="container">
      <h2 class="title is-2 mb-5 mt-5 has-text-black">
        {{ title }}
      </h2>
      <div class="columns mt-5 is-multiline">
        <client-only>
          <nuxt-link
            v-for="relatedBlog of blogs"
            :key="relatedBlog.slug"
            class="column is-one-third blog-item"
            :to="{ name: 'blog-slug', params: { slug: relatedBlog.slug } }"
            data-aos="fade-in"
          >
            <div class="py-4" style="min-height: 432px">
              <div class="blog-img has-radius-big" style="height: 270px">
                <img
                  :src="
                    relatedBlog.thumbnail
                      ? relatedBlog.thumbnail
                      : relatedBlog.img
                  "
                  style="height: 100%; width: 100%; object-fit: cover"
                >
              </div>
              <p v-if="relatedBlog.author" class="has-text-black is-size-7">
                By {{ relatedBlog.author }}
              </p>
              <h3 class="title is-3 mt-2 mb-3">
                {{ relatedBlog.title }}
              </h3>
              <p class="is-size-5" style="color: #666">
                {{ relatedBlog.description }}
              </p>
            </div>
          </nuxt-link>
        </client-only>
      </div>
      <div class="has-text-right mb-6">
        <nuxt-link
          to="/blog"
          class="has-text-accent has-text-weight-semibold is-size-5"
        >
          More blog posts <i class="pl-1 fas fa-chevron-right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blogs: Array,
    title: String
  }
};
</script>
<style>
@media screen and (max-width: 1300px) {
  .blog-img {
    height: 220px !important;
  }
}
</style>
