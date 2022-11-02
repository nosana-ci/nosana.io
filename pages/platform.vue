<template>
  <div>
    <div style="position: relative">
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 mt-6 has-limited-width-small">
                The Nosana Incentivized Testnet program
              </h1>
            </div>
            <div class="column is-4 mt-6">
              <div class="block">
                <p>
                  The Testnet program is intended to rigorously test Nosana's
                  platform, as well as give interested devs the opportunity
                  to try out our services, risk-free.
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-1.svg" height="42">
                <p>
                  Projects are now able to
                  <a href="https://testnet.nosana.io" target="_blank">
                    join our Incentivized Testnet.
                  </a>
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-2.svg" height="42">
                <p>
                  We’re
                  <b>
                    giving away $NOS tokens to all active participants of the
                    Testnet Program.
                  </b>
                  You can earn up to 10.000 $NOS tokens by testing code with our Network.
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-3.svg" height="42">
                <p>
                  Our testnet program is live and projects are running pipelines.
                  Are you ready to join in? Let's go!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <areasvg width="35%" class="area" />
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <phases />
          </div>
          <div class="column is-6 is-offset-1">
            <img src="~assets/img/testnet-desktop.png">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Areasvg from '~/assets/img/area.svg?inline';

export default {
  components: {
    Areasvg
  },
  colorMode: 'dark'
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
