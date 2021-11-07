<template>
  <section class="section">
    <div class="container">
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="blog of blogs" :key="blog.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
            <img :src="blog.img" width="100">
            <div>
              <h2 class="subtitle">
                {{ blog.title }}
              </h2>
              <p>{{ blog.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const blogs = await $content('blogs')
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      blogs
    }
  }
}
</script>
