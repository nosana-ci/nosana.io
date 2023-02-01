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
        <div class="column is-10 is-offset-1 my-6 pb-6">
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

        <div class="columns my-6">
          <div class="column is-6 px-0 video-frame has-radius" data-aos="fade-right">
            <img src="~assets/img/product/secrets.svg">
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Your secrets are safe
            </h2>
            <p class="mb-5 has-limited-width-small">
              Private repos that upload jobs/pipelines to the Nosana Network may want to
              share secrets that are required to run their jobs with the Nodes that are performing
              their jobs. This is now possible with the Nosana Secret Manager.
              Projects can securely store their secrets in a secret manager (hosted by Nosana or you can
              host your own) and select which secrets the node conducting the job can retrieve per job.
            </p>
            <a
              target="_blank"
              href="https://docs.nosana.io/secrets/start.html"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Check docs
            </a>
          </div>
        </div>
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              Choose your template or start from scratch
            </h2>
            <p class="mb-5 has-limited-width-small">
              With our out-of-the-box CI open-source templates,
              you can get started in minutes.
              We are always adding new templates to our flow to help you get started on your build,
              ranging from Node.js to SPL.
              You can also built your pipeline from the ground up, if necessary.
            </p>
            <a
              target="_blank"
              href="https://github.com/nosana-ci/pipeline-templates"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              View our templates
            </a>
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <img src="~assets/img/product/templates.svg">
          </div>
        </div>
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/product/market.svg">
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-right">
            <h2 class="title is-2">
              Free community market
            </h2>
            <p class="mb-5 has-limited-width-small">
              If we may say so, our decentralized CI engine is amazing.
              But don't just take our word for it. Simply put it to the test.
              With our community market, you can operate your own CI pipelines for free!
            </p>
            <a
              target="_blank"
              href="https://app.nosana.io/"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Test Now
            </a>
          </div>
        </div>

        <!-- Steps -->
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
