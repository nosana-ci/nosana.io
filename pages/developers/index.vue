<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
          Works with any execution environment
        </h1>
        <div class="columns mt-5">
          <div class="column is-7" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Our decentralized crowd-hosted platform has computing options for every development need.
                Whether you’re building mobile apps or the next DEX.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-4 mt-0" data-aos="fade-left">
          <img src="~assets/img/grid-field_animated.svg">
        </div>
        <div class="column is-10 is-offset-1 mt-6">
          <div class="box p-6 has-text-centered has-border-accent">
            <h1 class="title">
              Container support
            </h1>
            <p class="has-limited-width-small is-horizontal-centered">
              Need native support for images within containers? We can pull from all public repositories.
            </p>
            <nuxt-link to="/developers/containers" class="button is-accent mt-5 has-text-weight-bold">
              Learn more
            </nuxt-link>
          </div>
        </div>
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title" data-aos="fade-up">
            Get Started in 4 steps
          </h2>
          <!-- <p class="has-limited-width-smaller is-horizontal-centered" data-aos="fade-up">
            It’s easy to get up and running as a Nosana Technology Partner.
          </p> -->
        </div>
        <div class="columns">
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="200">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                1
              </h2>
              <h2 class="title is-5">
                Join our testnet
              </h2>
              <p class="">
                You’ll find our incentivized testnet at testnet.nosana.io.
                To join, you’ll have to complete three actions. (Don’t worry, they’re simple.)
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="400">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                2
              </h2>
              <h2 class="title is-5">
                Connect your wallet
              </h2>
              <p class="">
                Link your wallet to one of our Solana-based wallet providers.
                Choose the account you want to use for Nosana.
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                3
              </h2>
              <h2 class="title is-5">
                Connect your GitHub account
              </h2>
              <p class="">
                When you add a pipeline for the first time,
                a pop-up will appear asking you to let Nosana access your GitHub account.
                Grant permission and we’ll be able to install the GitHub app necessary to run Nosana pipelines
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                4
              </h2>
              <h2 class="title is-5">
                Request funds
              </h2>
              <p class="">
                Add details about your project and make a funding request.
                Please note we can only host a limited amount of projects on our testnet.
                And we have to manually approve each project, so bear with us!
                We’ll email you as soon as we’ve approved your request. Until then, its status will be ‘pending’.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
};
</script>

<style lang="scss" scoped>
</style>
