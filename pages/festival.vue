<template>
  <div>
    <section class="section">
      <div class="container">
        <!-- Intro -->
        <div class="columns mt-6 mb-6 pb-6 intro">
          <div class="column is-6 is-offset-1" data-aos="fade-up">
            <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
              Welcome to the first Burner Phones Festival!
            </h1>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                What could be the first of many in the future. Throughout the 10-day event,
                we will be awarding daily prizes to our NFT holders!
                With approximately 50 Burner Phones only minted in the initial drop,
                your chances of winning one of our prizes is insanely high!
              </p>
              <p class="block">
                <a
                  class="button is-accent is-outlined is-wide"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-4 mb-6">
            <div>
              <img src="~assets/img/festival/bpf.png">
            </div>
          </div>
        </div>
        <!-- Lootboxes -->
        <div class="box p-6 has-border-accent my-6">
          <div class="is-pulled-right" data-aos="fade-left" data-aos-delay="400">
            <span>Results every day</span>
            <div class="is-flex">
              <p class="mr-3">
                <span class="is-size-7">Prize</span><br>
                <span class="has-text-accent">
                  <b>10:00</b> CET
                </span>
              </p>
              <p>
                <span class="is-size-7">Winner</span><br>
                <span class="has-text-accent">
                  <b>20:00</b> CET
                </span>
              </p>
            </div>
          </div>
          <h1 class="title" data-aos="fade-up" data-aos-delay="200">
            Lootbox Drop incoming!
          </h1>
          <p class="has-limited-width-small" data-aos="fade-in">
            Wait for that call with our drop location to come in.
            We have four different loot box drops during the festival.
            The prize of the day will be shared every morning at 10:00 CET.
            The day's winner will be announced around 20:00 CET.
          </p>
          <div class="columns lootboxes mt-5">
            <div class="column is-3 has-text-centered" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/festival/lootbox-regular.png">
              <span>Regular drop</span>
            </div>
            <div class="column is-3 has-text-centered" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/festival/lootbox-nos.png">
              <span>NOS drop</span>
            </div>
            <div class="column is-3 has-text-centered" data-aos="fade-up" data-aos-delay="600">
              <img src="~assets/img/festival/lootbox-rare.png">
              <span>Rare drop</span>
            </div>
            <div class="column is-3 has-text-centered" data-aos="fade-up" data-aos-delay="800">
              <img src="~assets/img/festival/lootbox-special.png">
              <span>Special drop</span>
            </div>
          </div>
        </div>
        <calendar class="pt-6" />
        <!-- Prizes carousel -->
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title" data-aos="fade-up">
            Are you ready for the <br> hot end of summer?
          </h2>
          <p class="has-limited-width-small is-horizontal-centered" data-aos="fade-up">
            Take a quick look at our amazing prizepool.
            Are you the lucky holder to win a Xbox Series X, Go Pro Hero 4 or one of the many other prizes?!
          </p>
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
                This is a Burner Phone holders event only. Do you wanna get your hand on a BurnerPhone?
                Register for our event at <a target="_blank" href="https://app.nosana.io/">app.nosana.io</a>. You can find the subscribe button under "staking".
                The form closes this Sunday 6 November.
              </p>
              <a target="_blank" href="https://app.nosana.io/stake" class="is-accent button mt-3" style="max-width:220px;">Nosana Dashboard</a>
              <br>
              <p>
                <a href="https://app.nosana.io/stake" target="_blank" class="has-text-accent">Stake</a> your NOS tokens and
                <a href="https://app.nosana.io/stake" target="_blank" class="has-text-accent">Subscribe</a> for the next free mint on Nosana's Network.
                Or take a look on Solana Marketplaces like <a href="https://magiceden.io/marketplace/nosana_burner_phone" target="_blank" class="has-text-accent">Magic Eden</a> and
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
