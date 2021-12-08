<template>
  <div>
    <div class="hero has-radius mt-5">
      <div class="hero-body container has-text-centered" style="width: 100%">
        <h4 class="subtitle is-5">
          Backed by
        </h4>
      </div>
    </div>
    <div class="columns is-vcentered mt-4 is-multiline is-mobile">
      <div v-for="partner in partners" :key="partner.url" class="column is-2-desktop is-4-tablet is-6-mobile has-text-centered is-horizontal-centered">
        <div>
          <a :href="partner.url" target="_blank">
            <img
              width="160px"
              max-width="200px"
              height="64px"
              max-height="80px"
              contain
              class="mx-2 greyscale-false"
              :src="partner.logo"
            >
          </a>
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
          logo: require('@/assets/img/partners/solanium.png')
        },
        {
          url: 'https://www.altcoinbuzz.io/',
          logo: require('@/assets/img/partners/altcoin-buzz.png')
        },
        {
          url: 'https://synaps.io/',
          logo: require('@/assets/img/partners/synaps.png')
        },
        {
          url: 'https://genblock.capital/',
          logo: require('@/assets/img/partners/genblock.png')
        },
        {
          url: 'https://www.stratoslp.com/',
          logo: require('@/assets/img/partners/stratos.png')
        },
        {
          url: 'https://www.skyvisioncapital.com/',
          logo: require('@/assets/img/partners/svc.png')
        },
        {
          url: 'https://indigo.amsterdam/',
          logo: require('@/assets/img/partners/indigo.png')
        },
        {
          url: 'https://dutchcryptoinvestors.com/',
          logo: require('@/assets/img/partners/dci.png')
        },
        {
          url: 'https://whitelistventures.com/',
          logo: require('@/assets/img/partners/whitelist.png')
        },
        {
          url: 'https://www.nxgen.xyz/',
          logo: require('@/assets/img/partners/nxgen.png')
        },
        {
          url: 'https://www.petrock.capital/',
          logo: require('@/assets/img/partners/petrock.png')
        },
        {
          url: 'https://insquarevc.com/',
          logo: require('@/assets/img/partners/insquare.png')
        },
        {
          url: 'https://gate.io/',
          logo: require('@/assets/img/partners/gate.png')
        },
        {
          url: 'https://www.mexc.com/',
          logo: require('@/assets/img/partners/mexc.svg')
        },
        {
          url: 'https://www.primeblock.ventures/',
          logo: require('@/assets/img/partners/primeblock.png')
        },
        {
          url: 'https://ratio.finance/',
          logo: require('@/assets/img/partners/ratio.png')
        },
        {
          url: 'https://blockasset.co/',
          logo: require('@/assets/img/partners/blockasset.png')
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
