<template>
  <div>
    <section class="section">
      <div class="container">
        <!-- Intro -->
        <div class="columns mt-6 mb-6 pb-6 intro">
          <div class="column is-6 is-offset-1" data-aos="fade-up">
            <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
              Nosana's First Burner Phone Festival!
            </h1>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Throughout the 10-day event, which took place in November of 2022,
                we awarded daily prizes to our NFT holders!
              </p>

            </div>
          </div>
          <div class="column has-text-centered is-4 mb-6">
            <div>
              <img src="~assets/img/festival/bpf.png">
            </div>
          </div>
        </div>
        <calendar class="pt-6" />
        <!-- Prizes carousel -->
        <div class="my-6 pt-6 has-text-centered">
          <p class="has-limited-width-small is-horizontal-centered" data-aos="fade-up">
            Take a look at the prizes our Burner Phone NFT holders won!.</p>
        </div>
      </div>
      <client-only>
        <carousel-3d
          v-if="slides"
          ref="carousel"
          class="mb-6"
          :autoplay="true"
          :width="320"
          :height="275"
          :space="400"
          :clickable="false"
          :controls-visible="false"
          :autoplay-timeout="3000"
        >
          <slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            class="prize-slide p-6 has-radius"
          >
            <img :src="require(`@/assets/img/festival/${slide}`)">
          </slide>
        </carousel-3d>
      </client-only>
      <div class="container mb-6 pt-6">
        <div class="column is-8 is-offset-2 box has-border-accent has-background-light mt-6">
          <div class="columns">
            <div class="column is-5 p-6">
              <img
                src="~assets/img/festival/phone.png"
                class="p-5"
                style="width: 100%;"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
            </div>
            <div
              class="column is-7 p-5
                is-flex is-flex-direction-column is-align-content-center is-justify-content-center"
              data-aos="fade-up"
            >
              <h2 class="title">
                Only for Burner Phone holders
              </h2>
              <p>
                This was a Burner Phone holders event only. Do you want to get your hands on a Burner Phone NFT?
                Sign up for notifications about the next mint at <a target="_blank" href="https://app.nosana.io/">app.nosana.io</a>.</p>
              <a target="_blank" href="https://app.nosana.io/" class="is-accent button mt-3" style="max-width:220px;">Nosana Dashboard</a>
              <br>
              <p>
                <a href="https://app.nosana.io/stake" target="_blank" class="has-text-accent">Stake</a> your NOS tokens and
                <a href="https://app.nosana.io/stake" target="_blank" class="has-text-accent">Subscribe</a> for the next free mint on the Nosana Network.
                Or, take a look on Solana marketplaces like <a href="https://magiceden.io/marketplace/nosana_burner_phone" target="_blank" class="has-text-accent">Magic Eden</a> or
                <a target="_blank" href="https://opensea.io/collection/nosana-burner-phone-collection" class="has-text-accent">OpenSea</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered">
        <a href="/terms_conditions_festival.pdf" target="_blank">View Terms & Conditions</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark',
  data () {
    return {
      slides: [
        'gopro.png',
        'xbox.png',
        'apple.png',
        'anker.png',
        'ledger.png'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.lootboxes {
  img {
    max-width: 100%;
  }
}
.carousel-3d-slide {
  filter: none !important;
}

.carousel-3d-container {
  padding: 0px 0;
  box-sizing: content-box !important;
}
.prize-slide {
  background: linear-gradient(180deg, #061503 0%, #010C04 100%);
  img {
    height: 100%;
    object-fit: contain;
  }
}
@media screen and (max-width: $tablet) {
  .intro {
    margin-top: 0 !important;
  }
  .is-pulled-right {
    float: none !important;
    margin-bottom: 20px;
  }
}
</style>
