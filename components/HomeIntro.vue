<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div class="column is-8 pt-6 has-text-centered has-background-black-blur-false has-text-white">
            <h1 class="title pt-6 is-spaced site-title has-text-white">
              Powering the AI revolution
            </h1>
            <div class="py-2">
              <p class="block">
                The most cost-effective GPU grid, with zero lock-in.
                Developed and customized for AI inference workloads.
                Consumers, miners, and businesses can monetize their idle hardware by becoming a Nosana Node.
                Powered by Solana and the $NOS token.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.home-block {
  position: relative;
  min-height: 660px;
  overflow: hidden;
  background-image: url('~assets/img/home/bg.svg');
  margin-top : -5rem;
  background-size: cover;
  background-position: bottom;
  // box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
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

@media screen and (max-width: $tablet) {
  .button {
    margin-left: 0 !important;
    margin-top: 10px;
  }
}
</style>
