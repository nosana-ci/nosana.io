<template>
  <div>
    <div style="position: relative">
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1 mt-6 has-limited-width-small">
                Private Beta
              </h1>
              <p>Open for selected Solana Projects.</p>
            </div>
            <div class="column is-4 mt-6">
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-1.svg" height="42">
                <p>
                  The private beta is intended to rigorously test Nosana's platform,
                  before releasing beta to the public. We select a limited amount of projects during the first phase.
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-2.svg" height="42">
                <p>
                  Selected projects can use the beta product for free by running their pipelines on
                  verified nodes within our Community Market.
                </p>
              </div>
              <div class="block mt-6">
                <img src="~assets/img/icon-testnet-3.svg" height="42">
                <p>
                  The private and open Beta will be available for projects first.
                  After extended testing, the platform will open steadily for nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <areasvg width="45%" class="area" />
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <phases />
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
