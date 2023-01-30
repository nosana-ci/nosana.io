<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns mt-6 mt-mobile-0" style="min-height: 60vh">
          <div class="column has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              Trustless CI/CD<br>
              for Web3.
            </h1>
            <div class="has-limited-width-small py-2">
              <p class="block">
                Nosana is a decentralized engine running continuous integration.
                Providing extra resilience, security and privacy to your build with the power of blockchain technology.
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
          <div class="column yaml-bg p-6">
            <yaml-preview class="yaml-preview" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.yaml-bg {
  background-image: url("~assets/img/home/preview-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 8rem 10rem !important;
}

.ring {
  position: absolute;
  top: 200px;
  right: 0;
}
@include touch {
  .mt-mobile-0 {
    margin-top: 0 !important;
  }
  .home-block {
    background: none;
  }
  .ring {
    position: relative;
    top: 0;
    width: 100%;
  }
}
.yaml-preview {
  box-shadow: 0px 0px 50px 0px rgba(95,255,0,0.5);
}
</style>
