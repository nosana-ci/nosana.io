<template>
  <div>
    Redirecting to <a :href="url">{{ url }}</a>
  </div>
</template>
<script>
const url = 'https://www.linkedin.com/company/nosana';

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
