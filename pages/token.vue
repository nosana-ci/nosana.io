<template>
  <div>
    <section class="section intro">
      <BackgroundParallax />
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-8 pt-6 has-text-centered has-background-black-blur-false has-text-white"
          >
            <h1 class="title pt-6 is-spaced site-title has-text-white">
              NOS token
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                Introducing the $NOS token, the heartbeat of the Nosana
                ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <h2 class="title pt-6 site-title mb-0">
          NOS is the native token of the Nosana Network, facilitating the
          economic incentives of the network, the provisioning of governance and
          assurance of security.
        </h2>
        <div class="columns mt-6 pt-6">
          <div class="column is-4" data-aos="fade-in">
            <h3 class="title is-2">
              Security
            </h3>
            <h4 class="title is-3">
              Secured by Proof of Stake
            </h4>
            <p class="mb-5 is-4 is-size-4">
              NOS is an SPL-compliant digital asset on the Solana blockchain,
              and NOS is used to secure the Nosana Network via staking.
              Stakers earn NOS rewards while providing the collateral to ensure the security of the network.
            </p>
          </div>
          <div class="column is-4" data-aos="fade-in" data-aos-delay="100">
            <h3 class="title is-2">
              Governance
            </h3>
            <h4 class="title is-3">
              Community Supported and Run
            </h4>
            <p class="mb-5 is-4 is-size-4">
              The Nosana Network will function as a completely decentralized organization.
              All aspects of the network will be governed by NOS token holders.
              NOS holders will in the future be able to vote on changes and improvements to the network.
            </p>
          </div>
          <div class="column is-4" data-aos="fade-in" data-aos-delay="200">
            <h3 class="title is-2">
              Value and Incentives
            </h3>
            <h4 class="title is-3">
              Driven by a passion for revolutionizing the world
            </h4>
            <p class="mb-5 is-4 is-size-4">
              NOS is a digital asset, and facilitates the store and exchange of value within the Nosana ecosystem.
              It provides the utility in our network facilitating,
              among other things, node reward payments, staking emissions, and incentive programs.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="stats"
      class="network-summary section py-6 has-background-grey-lighter"
    >
      <div class="container py-6 mb-6">
        <h3 class="title is-2 pt-3 mb-6">
          Trusted by our Community
        </h3>
        <NetworkSummary />
      </div>
    </section>
    <!-- Staking calc -->
    <section class="section my-6">
      <staking-calculator />
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <h3 class="title is-2">
              Buying $NOS
            </h3>
            <h4 class="title is-3">
              NOS is available on the following exchanges.
            </h4>
          </div>
          <div class="column is-8 mb-6">
            <div class="columns is-multiline">
              <div class="column is-6" data-aos="fade-in">
                <div
                  class="has-background-grey-lighter has-radius column
                  py-6 is-flex is-align-items-center is-justify-content-center"
                >
                  <img src="~assets/img/exchanges/mexc.svg" class="my-4">
                </div>
              </div>
              <div class="column is-6" data-aos="fade-in" data-aos-delay="200">
                <div
                  class="has-background-grey-lighter has-radius column
                  py-6 is-flex is-align-items-center is-justify-content-center"
                >
                  <img src="~assets/img/exchanges/mexc.svg" class="my-4">
                </div>
              </div>
              <div class="column is-6" data-aos="fade-in" data-aos-delay="400">
                <div
                  class="has-background-grey-lighter has-radius
                  column py-6 is-flex is-align-items-center is-justify-content-center"
                >
                  <img src="~assets/img/exchanges/mexc.svg" class="my-4">
                </div>
              </div>
              <div class="column is-6" data-aos="fade-in" data-aos-delay="600">
                <div
                  class="has-background-grey-lighter has-radius
                  column py-6 is-flex is-align-items-center is-justify-content-center"
                >
                  <img src="~assets/img/exchanges/mexc.svg" class="my-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BackgroundParallax from '../components/BackgroundParallax.vue';
import NetworkSummary from '../components/NetworkSummary.vue';

export default {
  colorMode: 'light',
  components: {
    NetworkSummary,
    BackgroundParallax
  }
};
</script>

<style lang="scss" scoped>
.bg-scroll {
  background-image: url("~assets/img/bg-token.svg");
}
@media screen and (max-width: $tablet) {
  .columns.mt-6.pt-6 {
    margin-top: 0 !important;
  }
  .has-radius.p-6 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .network-summary {
    text-align: center;
    .is-flex {
      justify-content: center;
    }
  }
}
</style>
