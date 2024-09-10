<template>
  <div v-if="blogs && blogs.length > 0" class="section">
    <div class="container">
      <h2 class="title is-2 mb-5 mt-5 has-text-black px-3">
        {{ title }}
      </h2>
      <div class="columns mt-5 mb-6 is-multiline">
        <client-only>
          <nuxt-link
            v-for="relatedBlog of blogs"
            :key="relatedBlog.slug"
            class="column is-one-third"
            :to="{ name: 'blog-slug', params: { slug: relatedBlog.slug } }"
          >
            <div class="py-4" style="min-height: 432px">
              <img
                :src="
                  relatedBlog.thumbnail
                    ? relatedBlog.thumbnail
                    : relatedBlog.img
                "
                style="height: 270px; object-fit: cover"
                class="has-radius-big"
              >
              <p v-if="relatedBlog.author" class="has-text-black is-size-7">
                By {{ relatedBlog.author }}
              </p>
              <h3 class="title is-3 mt-2 mb-3">
                {{ relatedBlog.title }}
              </h3>
              <p style="color: #666">
                {{ relatedBlog.description }}
              </p>
            </div>
          </nuxt-link>
        </client-only>
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
