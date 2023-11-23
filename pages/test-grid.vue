<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" style="width: 800px">
          Test Grid
        </h1>
        <div class="columns mt-5">
          <div class="column is-7" data-aos="fade-up">
            <h2 class="subtitle">
              Expand your reach with Nosana
            </h2>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rem, ducimus laborum maxime consectetur.
              </p>
              <p class="block">
                <a
                  href="#"
                  class="mr-3 button is-accent is-wide"
                  disabled
                >
                  <b>Registrations opens 10-12-2023</b>
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered mb-6">
            <div>
              <img src="~assets/img/partners/technology.svg">
            </div>
          </div>
        </div>
        <div class="mt-6 py-6 has-text-centered has-background-gradient">
          <h2 class="title mb-6" data-aos="fade-right">
            Requirements
          </h2>
          <p class="has-limited-width-small is-horizontal-centered">
            During the first phase of the Test Grid you will require one of the following GPUs:
          </p>
          <div class="table-container mt-3">
            <table class="typography table is-horizontal-centered">
              <tbody>
                <tr data-aos="fade-in" data-aos-delay="100">
                  <td class="py-2">
                    NVIDIA GTX 4090
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="200">
                  <td class="py-2">
                    NVIDA GTX 4080
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="300">
                  <td class="py-2">
                    NVIDIA GTX 4070Ti
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="400">
                  <td class="py-2">
                    NVIDIA GTX 4070
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="column is-8 is-horizontal-centered">
        <h2 class="title mb-6 has-text-centered">
          FAQ
        </h2>
        <accordion>
          <accordion-item v-for="faq in faqs" :key="faq.question">
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3 class="subtitle mb-4 has-text-weight-semibold">
                {{ faq.question }}
              </h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <!-- eslint-disable vue/no-v-html -->
              <span v-html="faq.answer" />
            </template>
          </accordion-item>
        </accordion>
      </div>
    </section>
    <section class="section">
      <div class="py-6 has-text-centered">
        <h2 class="title mb-6 is-2" data-aos="fade-right">
          Advantages for Network Partners
        </h2>
        <div class="columns is-variable is-multiline is-centered">
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
            <img src="~assets/img/icons/browser.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Access to our Incentivized Testnet is free (earn up to 10.000 $NOS with your development)
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
            <img src="~assets/img/icons/devops.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              DevOps as a Service. Improve the level of automation, software quality, developer experience,
              and delivery frequency without disruption. We assist you in making the most of your development.
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="600">
            <img src="~assets/img/icons/nodes.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Higher max limit of nodes during the test period. This means higher rewards!
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
            <img src="~assets/img/icons/chat-group.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              With multiple go-to-market strategies, you can maintain constant exposure within the Nosana community.
              Your brand can even be featured as a part of our upcoming NFT!
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
            <img src="~assets/img/icons/server.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              No longer rely on Big Tech for your computational needs!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section mt-5">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <test-grid-phases />
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
      faqs: [
        { question: 'How do I stake my NOS tokens?', answer: '- Get started by going to: <a href="https://app.nosana.io/stake/" target="_blank">https://app.nosana.io/stake/</a><br> - Connect your Solana Wallet<br> - Define how much you want to stake and the duration of your unstake period <br>- Sign the transaction<br><br> Now you are all set! You can claim the staking rewards anytime you want.' },
        { question: 'Are my staked NOS tokens safe?', answer: 'Your NOS tokens are safe in your smart contract vault on the Solana Blockchain. The Nosana Staking Program is open source and audited, so nobody can access your staked tokens except for you! You can see your staked tokens on the Solana Blockchain.' },
        { question: 'What is the APY?', answer: 'The APY is dynamic, the more $NOS is staked in total, the lower the APY will be and vice versa. You can find the current APY at: <a href="https://app.nosana.io/stake/" target="_blank">https://app.nosana.io/stake/</a>' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.area {
  position: absolute;
  bottom: 0px;
  left: 0;
}
@include touch {
  .area {
    position: relative;
    width: 100%;
  }
}
</style>
