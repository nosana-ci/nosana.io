<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
          Flexibility to use any execution environment
        </h1>
        <div class="columns mt-5">
          <div class="column is-7" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Nosana’s decentralized engine has the compute options you need to support your development,
                whether you’re building mobile apps or the next decentralized exchange.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-4 mt-0" data-aos="fade-left">
          <img src="~assets/img/grid-field_animated.svg">
        </div>
        <div class="column is-10 is-offset-1 mt-6">
          <div class="box p-6 has-text-centered has-border-accent fade-border">
            <h1 class="title">
              Container Support
            </h1>
            <p class="has-limited-width-small is-horizontal-centered">
              Need native support for images within containers? We can pull from all public repositories.
            </p>
            <nuxt-link to="/product/containers" class="button is-accent mt-5 has-text-weight-bold">
              Learn more
            </nuxt-link>
          </div>
        </div>
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title" data-aos="fade-up">
            Get started with Nosana
          </h2>
        </div>
        <div class="columns">
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="200">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                1
              </h2>
              <h2 class="title is-5">
                Visit app.nosana.io
              </h2>
              <p class="">
                Our decentralized CI engine can be found here.
                <br>
                <a href="https://app.nosana.io" target="_blank" class="button mt-3 is-accent is-outlined">
                  Get started
                </a>
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="400">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                2
              </h2>
              <h2 class="title is-5">
                Connect your Github account
              </h2>
              <p class="">
                You’re almost ready to build! Our onboarding flow will guide you through
                the process of building your first pipeline.
                Start with approving the Nosana Platform to access your GitHub account,
                enabling us to install the GitHub app required to run  Nosana pipelines.
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                3
              </h2>
              <h2 class="title is-5">
                Choose a template
              </h2>
              <p class="">
                When you add a pipeline for the first time, a pop-up will appear asking you to let Nosana access your
                GitHub account.Grant permission and we’ll be able to install the GitHub app necessary to run
                Nosana pipelines
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-2 has-text-accent">
                4
              </h2>
              <h2 class="title is-5">
                Start running pipelines!
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
