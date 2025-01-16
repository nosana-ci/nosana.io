<template>
  <div>
    Redirecting to <a :href="url">{{ url }}</a>
  </div>
</template>
<script>
const url = 'https://x.com/nosana_ai';

export default {
  async asyncData ({ redirect }) {
    await redirect(302, url);
  },
  data: function () {
    return {
      url
    };
  }
};
</script>
