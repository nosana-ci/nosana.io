<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns mt-6 mt-mobile-0">
          <div class="column is-5 has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              The Future of GPU Compute
            </h1>
            <div class="has-limited-width-small py-2">
              <p class="block">
                The market’s most cost-effective GPU grid, with zero lock-in.
                Developed and customized for AI inference workloads.
                Consumers, miners, and businesses can monetize their idle hardware by becoming a Nosana Node.
                Powered by Solana and the $NOS token.
              </p>
            </div>
            <div class="mt-5">
              <a href="https://app.nosana.io" target="_blank" class="button is-accent mr-2">
                Try it out now
              </a>
              <a
                href="https://docs.nosana.io"
                target="_blank"
                class="ml-2 button is-outlined is-accent is-wide"
              >
                Explore the docs
              </a>
            </div>
          </div>
          <!-- <div class="column yaml-bg">
            <yaml-preview class="yaml-preview" />
          </div> -->
        </div>
      </div>
      <img src="~assets/img/swirls-02_animated.svg" class="ring">
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.home-block {
  position: relative;
  min-height: 80vh;
  overflow: hidden;
}
.ring {
  position: absolute;
  top: 0px;
  right: 0;
  height: 100%;
  width: auto;
}

@include touch {
  .home-block {
    min-height: auto;
    padding-bottom: 0;
  }
  .mt-mobile-0 {
    margin-top: 0 !important;
  }

  .ring {
    position: relative;
    top: 0;
    width: 100%;
    right: -25px;
  }
}

.yaml-bg {
  background-image: url("~assets/img/home/preview-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5.7rem 6.2rem;

  @media screen and (max-width: $tablet) {
    background-image: none;
    padding: 8px;
  }
}
.yaml-preview {
  margin-top: 18px;
  margin-left: 3px;
  box-shadow: 0px 0px 50px 0px rgba(95,255,0,0.5);
}
@media screen and (max-width: $tablet) {
  .button {
    margin-left: 0 !important;
    margin-top: 10px;
  }
}
</style>
