<template>
  <div ref="bgScroll" class="bg-scroll" />
</template>

<script>
export default {
  mounted () {
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      const scrollY = window.scrollY;
      const maxBackgroundSize = 120;
      const backgroundSize = scrollY / (maxBackgroundSize - 100);
      const size = (100 + backgroundSize) / 100 < 1 ? 1 : (100 + backgroundSize) / 100;
      this.$refs.bgScroll.style.transform =
          'scale(' + size + ')';
    }
  }
};
</script>
