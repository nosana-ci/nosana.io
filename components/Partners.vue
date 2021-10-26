<template>
  <div>
    <div class="hero has-radius mt-5">
      <div class="hero-body container has-text-centered" style="width: 100%">
        <h4 class="subtitle is-5">
          Backed by
        </h4>
        <div class="columns is-vcentered mt-4">
          <div class="column is-2" />
          <div v-for="partner in partners" :key="partner" class="column">
            <div>
              <a :href="partner.url" target="_blank">
                <img
                  width="160px"
                  max-width="200px"
                  height="64px"
                  max-height="80px"
                  contain
                  class="ma-2 greyscale-false"
                  :src="partner.logo"
                >
              </a>
            </div>
          </div>
          <div class="column is-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      partners: [
        {
          url: 'https://solana.foundation/',
          logo: require('@/assets/img/partners/solana-foundation.svg')
        },
        {
          url: 'https://www.solanium.io/',
          logo: require('@/assets/img/partners/SolaniumVenturesWhiteWide.png')
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
.greyscale {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: 0.1s;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}
</style>
