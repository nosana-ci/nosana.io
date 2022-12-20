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
          <h2 class="title" data-aos="fade-up">
            <span class="has-text-accent">Staking</span> is LIVE!
          </h2>
          <h2 class="subtitle" data-aos="fade-up">
            Stake your NOS tokens for daily rewards
          </h2>
        </div>
        <div class="columns is-centered my-6 ">
          <div class="has-text-centered column is-8">
            <div class="has-border-accent box">
              <div class="columns is-vcentered">
                <div class="column is-5 is-offset-1 has-text-left">
                  <div class="field">
                    <label class="label">Staked NOS</label>
                    <div class="control">
                      <input v-model="amount" type="number" min="0" step="1" class="input">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Unstake days</label>
                    <div class="control">
                      <input
                        v-model="days"
                        type="number"
                        min="14"
                        max="365"
                        step="1"
                        class="input"
                      >
                    </div>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="pt-5">
                    <div
                      class="box has-text-centered has-background-black p-4 is-horizontal-centered has-shadow-accent"
                      style="width: fit-content; min-width:200px"
                    >
                      <h2 class="title is-3 has-text-accent mb-0">
                        <ICountUp
                          :end-val="parseFloat(xnos)"
                          :options="{ decimalPlaces: 0, duration:0.1 }"
                          style="opacity:0"
                        />
                        <ICountUp
                          :end-val="parseFloat(xnos)"
                          :options="{ decimalPlaces: 0 }"
                          style="position:absolute;width: 100%;text-align: center;left: 0;"
                        />
                      </h2>
                      <p>xNOS score</p>
                    </div>
                    <div
                      class="box has-text-centered has-background-black p-4 is-horizontal-centered has-shadow-accent"
                      style="width: fit-content; min-width:200px"
                    >
                      <h2 class="title is-4 has-text-accent mb-0">
                        <ICountUp
                          :end-val="parseFloat(multiplier)"
                          :options="{ decimalPlaces: 2, duration:0.1, prefix: 'x' }"
                          style="opacity:0"
                        />
                        <ICountUp
                          :end-val="parseFloat(multiplier)"
                          :options="{ decimalPlaces: 2, prefix: 'x' }"
                          style="position:absolute;width: 100%;text-align: center;left: 0;"
                        />
                      </h2>
                      <p>multiplier</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <nuxt-link to="/stake" class="button is-outlined is-accent m-2">
                  <b>Learn more</b>
                </nuxt-link>
                <a
                  href="https://app.nosana.io/stake"
                  target="_blank"
                  class="m-2 button is-accent is-wide"
                >
                  <b>Stake Now</b>
                </a>
              </div>
            </div>
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
            Supercharged DevOps<br>Engineering
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
import ICountUp from 'vue-countup-v2';
const SECONDS_PER_DAY = 24 * 60 * 60;

export default {
  components: {
    ICountUp
  },
  data () {
    return {
      amount: 1500,
      days: 100
    };
  },
  head () {
    return {
      script: [
        {
          src: 'https://nosa-zcmp.maillist-manage.eu/js/optin.min.js'
        }
      ]
    };
  },
  colorMode: 'dark',
  computed: {
    multiplier () {
      const unstakeTime = this.days * SECONDS_PER_DAY;

      const multiplierSeconds = (SECONDS_PER_DAY * 365) / 3; // 4 months
      const multiplier = unstakeTime / multiplierSeconds;
      return multiplier + 1;
    },
    xnos () {
      if (!this.days || !this.amount) {
        return 0;
      }
      const amount = parseFloat(this.amount) || 0;
      const unstakeTime = this.days * SECONDS_PER_DAY;
      const multiplierSeconds = (SECONDS_PER_DAY * 365) / 3; // 4 months
      const multiplier = unstakeTime / multiplierSeconds;
      const xNOS = (parseFloat(amount) + parseFloat(amount) * multiplier).toFixed(2);
      return xNOS;
    }
  },
  mounted () {
    this.onloadzoho();
  },
  methods: {
    onloadzoho () {
      if (process.client) {
        setTimeout(() => {
          window.setupSF('sf3z9a076f5f29a9fd801a28da97bec35eb01a772f5d1208839cc76c7a9ab4e1ffe5', 'ZCFORMVIEW', false, 'light');
        }, 1000);
      }
    }
  }
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
