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
                  platform, before going to Mainnet. We need the community's
                  help to make our testphase as successful as possible.
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
                  We have now specified the amount of tokens that projects can
                  earn below.
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-3.svg" height="42">
                <p>
                  Testnet access is now available for selected projects. After
                  extended testing, the platform will open for a selection of
                  pre-registered users.
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
