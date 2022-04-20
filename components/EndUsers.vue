<template>
  <div class="columns is-vcentered">
    <div class="column is-6" data-aos="zoom-in">
      <grid class="mt-6" />
    </div>
    <div class="column is-offset-1 is-5" data-aos="fade-left">
      <h2 class="title">
        Receive tokens for running free pipelines
      </h2>
      <h4 class="subtitle">
        Incentivized Testnet is now live for projects!
      </h4>
      <p class="block">
        Open-source software projects are incentivized based on their Nosana network usage. In other words, <b>you will receive tokens for running free pipelines.</b> Selected projects will automatically receive 500 $NOS tokens for onboarding our Testnet and can <b>earn up to 10.000 $NOS tokens</b> by running ESLint pipelines with our Network.
      </p>
      <p class="block">
        <nuxt-link to="/platform" class="button is-accent is-outlined is-wide mr-4">
          <b>More information</b>
        </nuxt-link>
        <a href="https://testnet.nosana.io" target="_blank" class="button is-accent is-wide">
          <b>Join our Testnet now</b>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import Grid from '~/assets/img/grid.svg?inline';

export default {
  components: { Grid }
};
</script>

<style lang="scss">

@keyframes move-line {
  to {
    stroke-dashoffset: 100%;
  }
}
.cls-5,.cls-6{
  stroke-width:3px;
  stroke-dasharray: 0 10;
  animation: move-line 25s linear infinite;
}
</style>
