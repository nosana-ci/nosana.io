<template>
  <div>
    <section class="section home-block">
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-8 pt-6 has-text-centered has-background-black-blur-false has-text-white"
          >
            <h1 class="title pt-6 is-spaced site-title has-text-white">
              Where AI Meets Decentralized Compute
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                Nosana is your go-to marketplace for AI inference. Enjoy
                seamless access and scalability without long-term contracts or
                bottlenecks—just the compute power you need, when you need it.
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
  background-image: url("~assets/img/home/bg.jpg");
  margin-top: -5rem;
  background-size: cover;
}

@include touch {
  .home-block {
    min-height: auto;
    padding-top: 80px;
  }
  .mt-mobile-0 {
    margin-top: 0 !important;
  }
}

@media screen and (max-width: $tablet) {
  .button {
    margin-left: 0 !important;
    margin-top: 10px;
  }
}
</style>
