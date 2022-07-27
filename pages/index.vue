<template>
  <div>
    <home-intro />
    <!-- <partners /> -->
    <section class="section has-background-gradient-accent">
      <div class="container">
        <div class="columns is-variable is-8 has-text-centered">
          <div class="column is-one-third" data-aos="fade-up" data-aos-delay="200">
            <nuxt-link to="/developers">
              <div class="has-background-gradient  has-border-accent px-4 py-5">
                <img src="~assets/img/icons/develop.svg" style="height: 42px;">
                <h2 class="title is-4 my-3">
                  Build with Nosana
                </h2>
                <p class="has-text-accent">
                  Join our growing dev community
                </p>
              </div>
            </nuxt-link>
          </div>
          <div class="column is-one-third " data-aos="fade-up" data-aos-delay="400">
            <nuxt-link to="/network/cpu">
              <div class="has-background-gradient has-border-accent px-4 py-5">
                <img src="~assets/img/icons/earn.svg" style="height: 42px;">
                <h2 class="title is-4 my-3">
                  Earn with Nosana
                </h2>
                <p class="has-text-accent">
                  Share your computing power
                </p>
              </div>
            </nuxt-link>
          </div>
          <div class="column is-one-third " data-aos="fade-up" data-aos-delay="600">
            <nuxt-link to="/token">
              <div class="has-background-gradient has-border-accent px-4 py-5">
                <img src="~assets/img/icons/token.svg" style="height: 42px;">
                <h2 class="title is-4 my-3">
                  Trade with Nosana
                </h2>
                <p class="has-text-accent">
                  Trade your $NOS tokens
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6" data-aos="zoom-in">
            <img src="~assets/img/tokens.png">
          </div>
          <div class="column is-offset-1 is-4" data-aos="fade-left">
            <h2 class="title is-1">
              The Nosana Token: <span class="has-text-accent">$NOS</span>
            </h2>
            <p class="block">
              NOS is the native token of the Nosana Network.
              In exchange for NOS tokens, you can use our network to run CICD for all your development projects.
            </p>
            <div class="mt-6">
              <nuxt-link to="/token" class="button is-outlined is-accent m-2 is-wider">
                <b>Learn more</b>
              </nuxt-link>
              <nuxt-link
                to="/token#buy"
                class="m-2 button is-accent is-wider"
              >
                <b>Buy tokens</b>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="has-text-centered mt-6">
          <h2
            class="title"
            data-aos="fade-up"
          >
            Solana Summer Camp Hackathon 2022
          </h2>
          <h2
            class="subtitle"
            data-aos="fade-up"
          >
            at Nosana Office in Amsterdam
          </h2>
          <p
            class="has-limited-width is-horizontal-centered"
            data-aos="fade-up"
          >
            Participate at the Solana Summer Camp Hackathon 2022 IRL at the Nosana Office!
            Plenty of time to work on your project, network, find team members for your idea,
            or join an existing team and be able to fight for the pool of <b class="has-text-accent">$5m prizes</b>.
            </h4>
          </p>
        </div>
        <div class="columns is-centered my-6">
          <div class="has-text-centered column is-8">
            <a href="https://solana.com/summercamp" target="_blank"><img class="has-radius" src="~assets/img/solana-summercamp.jpg"></a>
          </div>
        </div>
        <!-- <end-users /> -->
      </div>
    </section>
    <section class="section mt-6">
      <div class="container">
        <div class="has-text-centered">
          <h2
            class="title is-2"
            data-aos="fade-up"
          >
            Supercharged DevOps<br>engineering
          </h2>
          <h4
            data-aos="fade-up"
          >
            Brought to you by a global pool of computing power
          </h4>
        </div>
        <three-blocks />
      </div>
    </section>
    <!-- <testnet /> -->
    <section class="section mt-6">
      <div class="container">
        <!-- <roadmap class="mt-6" /> -->
        <latest-news class="mt-6 pb-6" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";

@keyframes moveX {
  0% {
    left: 10%;
  }
  100% {
    left: 90%;
  }
}
@keyframes moveY {
  0% {
    top: 10%;
  }

  100% {
    top: 90%;
  }
}

.has-background-black-blur {
  position: relative;
  * {
    position: relative;
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: 0.7;
    top: 0;
    filter: blur(50px);
    left: 0;
    background: #000;
  }
}
.blur-background {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 1;
  will-change: transform;
  -webkit-filter: blur(40px);
  filter: blur(40px);
  img {
    position: absolute;
    width: 60%;
    height: auto;
    will-change: transform;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    &:nth-child(1) {
      animation: moveX 38s linear 0s infinite alternate-reverse,
        moveY 24s linear 0s infinite alternate-reverse;
    }
    &:nth-child(2) {
      animation: moveX 34s linear 0s infinite alternate,
        moveY 15s linear 0s infinite alternate-reverse;
    }
    &:nth-child(3) {
      animation: moveY 38s linear 0s infinite alternate-reverse,
        moveX 24s linear 0s infinite alternate-reverse;
    }
  }
}
</style>
