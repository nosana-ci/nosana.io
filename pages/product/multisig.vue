<template>
  <div>
    <section class="section">
      <div class="container my-6 keychain">
        <div class="columns is-align-items-center">
          <div class="column mb-5">
            <img src="~assets/img/multisig/keychain.png">
          </div>
          <div class="column is-6" data-aos="fade-up">
            <h1 class="title site-title is-spaced has-limited-width mt-6">
              Fast and secure smart contract deployment with multisig
            </h1>
            <div class="has-limited-width-small mt-4">
              <p class="block has-text-weight-medium">
                As a developer working on the Solana blockchain, you know how important it
                is to ensure the security of your code during the deployment process.
                That's why we've built multisig support, powered by the Squads protocol,
                to provide you with a secure and efficient way to manage all smart contract deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1
          class="has-text-centered title is-2 is-spaced has-limited-width mb-6"
          style="margin: 0 auto;
        line-height: 3rem;"
        >
          Nosana is for Solana devs that have trouble with
        </h1>
        <div class="columns column is-10 is-offset-1">
          <div class="column is-one-third" data-aos="fade-up" data-aos-delay="200">
            <img src="~assets/img/multisig/security.svg">
            <p class="is-size-5">
              Managing the growing complexity and security risks of (re)deploying smart contracts
            </p>
          </div>
          <div class="column is-one-third" data-aos="fade-up" data-aos-delay="400">
            <img src="~assets/img/multisig/web3.svg">
            <p class="is-size-5">
              The lack of reliable and secure deployment solutions in Web3
            </p>
          </div>
          <div class="column is-one-third" data-aos="fade-up" data-aos-delay="600">
            <img src="~assets/img/multisig/time.png" class="py-5 mb-3" style="width: 80px;">
            <p class="is-size-5">
              Cumbersome deployment processes that slow down development
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <!-- text blocks -->
        <div class="columns my-6 py-6 is-align-items-center">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              How it works
            </h2>
            <p class="mb-5 has-limited-width-small">
              A pipeline will build your Solana program, run your tests, and deploy it to a buffer,
              it will then be ready for you on your Squads account to sign the deployment transaction.
            </p>
            <a
              target="_blank"
              href="https://docs.nosana.io/"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Read the docs
            </a>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/multisig/works.svg">
          </div>
        </div>
        <div class="columns my-6 py-6 is-align-items-center">
          <div class="column is-6 px-0 video-frame has-radius" data-aos="fade-right">
            <video autoplay muted @ended="onVideoEnd">
              <source src="~assets/img/pipeline-video.mp4" type="video/mp4">
            </video>
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Set it up once
            </h2>
            <p class="mb-5 has-limited-width-small">
              Our multisig support provides an automated extra layer of security for development
              of work that you do on any smart contract.
              You only have to set up your multisig pipeline once and you’re good to go!
              Saving you valuable time and resources.
            </p>
          </div>
        </div>
        <div class="columns my-6 py-6 is-align-items-center">
          <div class="column is-6 " data-aos="fade-right">
            <h2 class="title is-2">
              Powered by Squads
            </h2>
            <p class="mb-5 has-limited-width-small">
              Our multisig support is built on the Squads protocol,
              a proven and trusted solution for managing multisig on the Solana blockchain.
            </p>
            <a
              href="https://v3.squads.so/connect-squad"
              target="_blank"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Set up your Squads account
            </a>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/multisig/squads.svg">
          </div>
        </div>
        <div class="columns my-6 py-6 is-align-items-center">
          <div class="column is-6" data-aos="fade-right">
            <img src="~assets/img/multisig/tryout.svg">
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Try out our solution now
            </h2>
            <p class="mb-5 has-limited-width-small">
              Don't risk the security of your code or waste valuable time
              and resources on inefficient deployment processes.Try our multisig support today and
              experience a safer and more efficient way to manage your Solana program development.
            </p>
            <a
              href="https://app.nosana.io/"
              class="button mt-2 is-accent is-outlined is-wide"
              target="_blank"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark',
  methods: {
    onVideoEnd (event) {
      setTimeout(() => {
        event.target.play();
      }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
.keychain {
  @media screen and (max-width: $tablet) {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    .column {
      margin-bottom: 0px !important;
    }
    .site-title {
      margin-top: 0px !important;
    }
  }
}
</style>
