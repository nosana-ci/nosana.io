<template>
  <div>
    <section class="section">
      <div class="container has-text-centered py-6">
        <h1 class="title is-1 is-spaced">
          Receive a free<br>Nosana Burner Phones NFT!
        </h1>
        <p class=" has-limited-width mx-auto">
          Connect your Github repository
          and run a free CI/CD pipeline on the Nosana Network to claim your free Nosana Mint Pass!
        </p>
        <br>
      </div>
    </section>
    <section class="section has-background-gradient-accent has-text-centered">
      <img src="~assets/img/floor.svg">
    </section>
    <section class="section">
      <div class="container">
        <div class="column is-10 is-offset-1" style="margin-top: -330px;">
          <div class="box p-6 has-text-centered has-border-accent">
            <div class="columns">
              <div class="column is-6 has-text-centered">
                <img width="450" src="https://arweave.net/IApFmaCPRXPRVVeEDtJhBlFKTDcwesAvdS1KqCja0NE">
              </div>
              <div class="column is-6">
                <h1 class="title">
                  Our special<br><span class="has-text-accent">Solana Breakpoint</span> offer
                </h1>
                <ul class="has-text-left subtitle mx-auto mt-6" style="width:fit-content">
                  <li>1. Connect your wallet</li>
                  <li>2. Install your repo</li>
                  <li>3. Run a CI/CD pipeline</li>
                  <li>4. Receive your NFT Mint Pass!</li>
                </ul>
                <a href="https://app.nosana.io/pipelines?ref=breakpoint2022" target="_blank" class="button is-accent mt-6 has-text-weight-bold">
                  Connect your Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="columns mt-6 mb-6 pb-6 intro">
          <div class="column is-6 is-offset-1" data-aos="fade-up">
            <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
              Get access to the Burner Phones Festival!
            </h1>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Throughout the 10-day event,
                we will be awarding daily prizes to our NFT holders!
                With approximately 50 Burner Phones only minted in the initial drop,
                your chances of winning one of our prizes is insanely high!
              </p>
              <p class="block">
                <nuxt-link
                  to="/festival"
                  class="button is-accent is-outlined is-wide"
                >
                  Learn more
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="column has-text-centered is-4 mb-6">
            <div>
              <img src="~assets/img/festival/bpf.png">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark',
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";

@include touch {
  .title.is-1 {
    font-size: 35px;
  }
  ul.subtitle {
    font-size: 17px;
  }
}
</style>
