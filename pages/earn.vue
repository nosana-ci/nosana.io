<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns mt-6">
          <div class="column is-4">
            <h1 class="title site-title mt-6">
              Earn <span class="has-text-accent">NOS</span> tokens
            </h1>
            <p>
              Provide your unused computing capacity to promising projects in the Metaverse and get paid in NOS.
            </p>
          </div>
          <div class="is-offset-1 column has-text-centered earn-background">
            <div>
              <img src="~assets/img/nosana-token.svg" width="456">
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="columns is-variable is-1">
            <div class="column is-4">
              <img src="~assets/img/easy.svg" height="42">
              <h2 class="title my-3">
                Easy
              </h2>
              <p>It’s simple: just open the App, no more technological knowledge is required. You can run the App on a range of different devices like your home computer, a Raspberry PI or your phone.</p>
            </div>
            <div class="column is-4 is-offset-1">
              <img src="~assets/img/secure.svg" height="42">
              <h2 class="title my-3">
                Secure
              </h2>
              <p>
                Stake and become a node. Run a pipeline. Earn NOS.
                Testing nodes run pipelines, verifying the coding of projects through our CI/CD network. By staking NOS tokens we secure the network from false nodes.
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
.earn-background {
  position: relative;
  &:before {
    display:block;
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 130%;
    top: 0;
    right:0;
    background-image: url('~assets/img/earn-hero-bg.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
  }
}
</style>
