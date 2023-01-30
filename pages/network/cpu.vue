<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6">
          Contribute CPU
        </h1>
        <div class="columns mt-5">
          <div class="column is-5" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                The first set of nodes goes live on our testnet soon.
                You’ll need to stake your tokens for a chance to get exclusive access to the Network.
              </p>
              <p class="block">
                <a
                  href="https://app.nosana.io/stake"
                  class="button is-disabled is-accent is-wide"
                >
                  Stake here
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered mb-6 pt-6">
            <div>
              <img src="~assets/img/laptop.png">
            </div>
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-7" data-aos="zoom-in">
            <img src="~assets/img/nos-tokens.png">
          </div>
          <div class="column is-5" data-aos="fade-left">
            <h2 class="title is-2">
              Earn $NOS Tokens
            </h2>
            <p class="block">
              Put your unused computing capacity to work!
              Have it power all kinds of open-source projects and get $NOS tokens in return.
            </p>
          </div>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              Not just for techies
            </h2>
            <p class="block">
              Contributing your unused CPU is easy, even if you’re not a techie.
              Connect your wallet to our network and install the software package.
              It runs on lots of different devices, from your PC to your Raspberry Pi.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/devices.svg">
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-7" data-aos="zoom-in">
            <img src="~assets/img/node.svg">
          </div>
          <div class="column is-5" data-aos="fade-left">
            <h2 class="title is-2">
              Secured against false nodes
            </h2>
            <p class="block">
              If you stake, you become a node. You earn $NOS, by running CI/CD pipelines for other projects.
              <br><br>
              We want to protect our Network from malicious nodes, which can mess things up.
              That's why we need staking.
              If you act against our rules, we slash a certain amount of staked $NOS tokens.
            </p>
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
