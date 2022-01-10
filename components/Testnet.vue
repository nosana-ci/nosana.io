
<template>
  <div id="testnet" style="position: relative">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5" />
          <div class="column">
            <h2 class="title">
              Receive tokens for running free pipelines
            </h2>
            <h2 class="subtitle">
              Pre-register now for our Incentivized Testnet
            </h2>
            <p class="block">
              The Testnet program is intended to test Nosana's CI features and tools, before going to Mainnet. Projects that participate the Incentivized Testnet program will be able to acquire NOS tokens. A total of 5,000,000 NOS tokens are available for giveaway to participants in the Testnet Program.
            </p>
            <p class="block">
              <a href="https://bit.ly/NosanaBetaForm-hp" class="button is-accent has-text-weight-semibold" target="_blank">Pre-register</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <img src="~assets/img/spiral.svg" width="35%" class="spiral">
  </div>
</template>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/mixins';
.spiral {
  position: absolute;
  top: 0px;
  left:0;
}
@include touch {
  .spiral {
    position: relative;
    width: 100%;
  }
}
</style>
