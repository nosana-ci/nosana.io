<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns mt-6 mt-mobile-0" style="min-height: 60vh">
          <div class="column has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              The Future of Crowd Compute
            </h1>
            <div class="has-limited-width-small py-2">
              <p class="block">
                The market's most cost-effective spot compute, with zero lock-in.
                You can run workloads for CI/CD, AI inference, video encoding, compression, scientific,
                and high-performance computing on Nosana.
                Consumers, miners, and businesses can all monetize their idle hardware by becoming a Nosana Node.
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
          <div class="column yaml-bg">
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
