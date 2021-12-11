<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns mt-6" style="min-height: 75vh">
          <div class="column has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              Crowd <br>
              Computing <br>
              the Metaverse
            </h1>
            <h2 class="subtitle">
              Community powered pipelines
            </h2>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Run code checks and build container images to earn tokens.
                Or simply use other Nosana nodes to run your pipelines on demand!
              </p>
            </div>
            <div class="mt-6">
              <a href="https://demo.nosana.io" target="_blank" class="button is-accent is-wide" data-atropos-offset="10">
                <b>Launch</b>
              </a>
            </div>
            <socials class="mt-6" />
            <div class="has-limited-width-small mt-5">
              <p>
                Powered by
                <img
                  width="20px"
                  max-width="200px"
                  height="32px"
                  max-height="80px"
                  contain
                  class="mx-2 greyscale-false"
                  :src="require('@/assets/img/solana.svg')"
                  alt="Solana"
                > Solana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img src="~assets/img/ring_animated.svg" width="45%" class="ring">
  </div>
</template>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/mixins';
.home-block {
  background-image: url('~assets/img/nosana_bg.png');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: bottom right -30px;
}

.ring {
  position: absolute;
  top: 200px;
  right:0;
}
@include touch {
    .home-block {
    background: none;
  }
  .ring {
    position: relative;
    top:0;
    width: 100%;
  }
}
</style>
