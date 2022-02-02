<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script>
export default {
  provide () {
    return { Accordion: this.Accordion }
  },
  props: {},
  data () {
    return {
      Accordion: {
        count: 0,
        active: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
