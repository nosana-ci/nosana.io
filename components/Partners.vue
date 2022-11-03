<template>
  <div>
    <div class="hero has-radius mt-5">
      <div class="hero-body container has-text-centered" style="width: 100%">
        <h4 class="subtitle is-4">
          Proud to be backed by
        </h4>
      </div>
    </div>
    <slide-bar duration="60s" direction="reverse" data-aos="fade-right">
      <div
        v-for="partner in partners.slice(0, Math.ceil(partners.length / 2))"
        :key="partner.url"
        class="mx-6"
      >
        <div>
          <a :href="partner.url" target="_blank" class="partner">
            <img
              width="160px"
              max-width="200px"
              height="64px"
              max-height="80px"
              contain
              class="mx-2"
              :src="partner.logo"
            >
          </a>
        </div>
      </div>
    </slide-bar>
    <slide-bar duration="60s" data-aos="fade-left">
      <div
        v-for="partner in partners.slice(
          Math.ceil(partners.length / 2),
          partners.length
        )"
        :key="partner.url"
        class="mx-6"
      >
        <div>
          <a :href="partner.url" target="_blank" class="partner">
            <img
              width="160px"
              max-width="200px"
              height="64px"
              max-height="80px"
              contain
              class="mx-2"
              :src="partner.logo"
            >
          </a>
        </div>
      </div>
    </slide-bar>
  </div>
</template>

<script>
import SlideBar from '@/components/SlideBar';

export default {
  components: {
    SlideBar
  },
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
          logo: require('@/assets/img/partners/altcoin-buzz.svg')
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
          url: 'https://minted-lab.com/',
          logo: require('@/assets/img/partners/minted.png')
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
    };
  }
};

</script>

<style lang="scss" scoped>
.partner {
  img {
    transform-origin: center center;
    transition: 0.2s;
    filter: grayscale(1);
  }
  &:hover {
    img {
      transform: scale(1.1);
      filter: grayscale(0);
    }
  }
}
</style>
