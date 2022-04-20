<template>
  <div class="atropos my-atropos">
    <div class="atropos-scale">
      <div class="atropos-rotate">
        <div class="atropos-inner">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Altropos',
  props: {
    options: {
      type: [Array, Object],
      default () {
        return {};
      }
    }
  },
  mounted () {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const Atropos = require('atropos/atropos');
      Atropos({
        el: this.$el,
        ...this.options
      });
    }
  }
};
</script>
<style lang="scss">
.atropos-shadow {
  background: rgba(0,0,0,0.35)
}
</style>
