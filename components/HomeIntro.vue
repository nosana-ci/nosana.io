<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns mt-6 mt-mobile-0" style="min-height: 75vh">
          <div class="column has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              Start a crowd <br>
              revolution <br>
            </h1>
            <h2 class="subtitle">
              The decentralized <s>cloud</s> crowd computing network.
            </h2>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                The Nosana Network will be the leading provider of decentralized
                CPU-based Dev(Ops) solutions, revolutionizing the development
                process of Metaverse projects.
              </p>
            </div>
            <div class="mt-6">
              <nuxt-link to="/platform" class="button is-outlined is-accent m-2">
                <b>Incentivized Testnet</b>
              </nuxt-link>
              <a
                href="https://discord.gg/nosana"
                target="_blank"
                class="m-2 button is-accent is-wide"
              >
                <b>Join Discord</b>
              </a>
            </div>
            <socials class="mt-6" />
            <exchanges class="mt-3" />
            <div class="has-limited-width-small mt-5">
              <p>
                Powered by
                <a href="https://explorer.solana.com/address/nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7">
                  <img
                    width="20px"
                    max-width="200px"
                    height="32px"
                    max-height="80px"
                    contain
                    class="mx-2 greyscale-false"
                    :src="require('@/assets/img/solana.svg')"
                    alt="Solana"
                  >
                </a>
                Solana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img src="~assets/img/ring_animated.svg" width="45%" class="ring">
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.home-block {
  background-image: url("~assets/img/nosana_bg.png");
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: bottom right -30px;
}

.ring {
  position: absolute;
  top: 200px;
  right: 0;
}
@include touch {
  .mt-mobile-0 {
    margin-top: 0 !important;
  }
  .home-block {
    background: none;
  }
  .ring {
    position: relative;
    top: 0;
    width: 100%;
  }
}
</style>
