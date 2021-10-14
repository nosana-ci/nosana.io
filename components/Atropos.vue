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
const Atropos = require('atropos/atropos')
export default {
  name: 'Altropos',
  props: ['options'],
  mounted () {
    Atropos({
      el: this.$el,
      ...this.options
    })
  }
}
</script>
<style lang="scss">
.atropos-shadow {
  background: rgba(0,0,0,0.35)
}
</style>
