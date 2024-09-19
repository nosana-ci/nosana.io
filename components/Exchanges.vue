<template>
  <div>
    <a v-for="exchange in exchanges" :key="exchange.link" :href="exchange.link" target="_blank" class="mx-4">
      <img :src="exchange.image" style="height: 50px">
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      exchanges: []
    };
  }
};
</script>

<style lang="scss" scoped>
a:first-child {
  margin-left: 0 !important;
}
</style>
