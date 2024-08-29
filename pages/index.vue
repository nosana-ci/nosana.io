<template>
  <div>
    <home-intro />
    <section class="section has-background-black has-text-white">
      <div class="container mb-6 pb-6">
        <h2 class="title py-6 site-title has-text-white">
          Unlocking Global GPU Potential<br>
          Revolutionizing Computing,<br>
          One Decentralized Grid at a Time!
        </h2>
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h3 class="title is-2 has-text-white">
              Nosana Test Grid
            </h3>
            <h4 class="title is-3 has-text-white">
              A multi-phase test grid for developers, data scientists, and AI
              enthusiasts.
            </h4>
            <p class="mb-5 is-4 is-size-4">
              Join us as an early adopter and build the foundation for the
              world's biggest GPU-compute grid. We're working to make AI more
              accessible and powerful than ever before.
            </p>
            <a href="/test-grid" class="has-text-accent">
              Go to Nosana Test Grid <i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <h3 class="title is-2 has-text-white">
              Nosana Explorer
            </h3>
            <h4 class="title is-3 has-text-white">
              Explore and interact with various aspects of the Nosana ecosystem.
            </h4>
            <p class="mb-5 is-size-4">
              Display real-time statistics and metrics about the Nosana network,
              including metrics like network hash rate, active nodes, and
              computational power contributed to the decentralized GPU grid.
            </p>
            <a
              href="https://explorer.nosana.io"
              target="_blank"
              class="has-text-accent"
            >
              Go to Nosana Explorer<i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container py-6">
        <h3 class="title is-2 py-6 mb-6">
          Revolutionizing Computing with Decentralized GPU Grids,<br>Cost-Effective
          Efficiency and Seamless Monetization.
        </h3>
        <div class="columns is-multiline">
          <div class="is-4 column">
            <h4 class="title is-3">
              Decentralized GPU Grid <br>
              <span class="has-text-grey-light">on-demand access</span>
            </h4>
            <p>
              Allowing users to harness idle GPU resources globally.This grid
              provides on-demand access to computational power for various
              tasks, particularly AI inference workloads.
            </p>
          </div>
          <div class="is-4 column">
            <h4 class="title is-3">
              Cost-Effective<br><span class="has-text-grey-light">60-98% less per month</span>
            </h4>
            <p>
              Offering users efficient access to computational resources without
              incurring high expenses. This affordability makes it an attractive
              option for individuals, businesses, and miners looking to leverage
              computing power.
            </p>
          </div>
          <div class="is-4 column">
            <h4 class="title is-3">
              Zero Lock-In <br><span class="has-text-grey-light">99.99%+ uptime</span>
            </h4>
            <p>
              Meaning they are not bound to long-term contracts or commitments.
              This flexibility allows users to access computational resources as
              needed without being tied to specific terms or conditions.
            </p>
          </div>
          <div class="is-4 column mt-6">
            <h4 class="title is-3">
              Monetization Opportunity<br><span class="has-text-grey-light">platform for users</span>
            </h4>
            <p>
              This enables individuals, businesses, and miners to earn rewards
              by contributing their idle GPU resources to the decentralized
              grid.
            </p>
          </div>
          <div class="is-4 column mt-6">
            <h4 class="title is-3">
              Powered by Solana <br><span class="has-text-grey-light">$NOS Token</span>
            </h4>
            <p>
              The $NOS token serves various functions, including facilitating
              transactions, incentivizing participation, and potentially
              governing the platform.
            </p>
          </div>
          <div class="is-4 mt-6 column is-flex is-align-items-center">
            <a href="/about" class="has-text-accent has-text-weight-semibold">
              More about Nosana <i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      amount: 1500,
      days: 100
    };
  },
  mounted () {},
  destroyed () {},
  methods: {
    onVideoEnd (event) {
      setTimeout(() => {
        event.target.play();
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
video {
  height: auto;
  width: 100%;
}

.video-frame {
  background-image: url("~assets/img/video-frame.svg");
  background-size: 101%;
  background-repeat: no-repeat;
  border: 1px solid #343d36;
  background-position: top left;
}

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
</style>
