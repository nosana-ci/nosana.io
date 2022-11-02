<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6">
          Join our testnet
        </h1>
        <div class="columns mt-5">
          <div class="column is-5" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                The first set of nodes are live on our testnet.
                Stake your tokens for to get exclusive access to the network.
              </p>
              <p class="block">
                <a
                  disabled
                  class="button is-disabled is-accent is-outlined is-wide"
                >
                  Stake Your NOS
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
              You can earn $NOS tokens by having it power open source projects.
            </p>
          </div>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              Not just for techies
            </h2>
            <p class="block">
              Whether you're a tech whiz or not, providing your unused CPU is simple.
              Join our network by connecting your wallet and installing our software package.
              Multiple platforms, from desktop computers to the Raspberry Pi, are supported.
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
              Protection from flase nodes
            </h2>
            <p class="block">
              You can only become a node if you stake. Running CI/CD pipelines for other projects allows you to earn $NOS.
              <br><br>
              We safeguard the network and keep hostile nodes out. This is why staking NOS is required. If you break our standards,
              we will slash a certain amount of staked $NOS tokens.
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
