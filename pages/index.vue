<template>
  <div>
    <home-intro />
    <!-- <partners /> -->
    <section class="section">
      <div class="container mb-6 pb-6">
        <!-- text blocks -->
        <div class="columns my-6 py-6 is-vcentered">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              Powering the AI revolution
            </h2>
            <p class="mb-5 has-limited-width-small">
              Our decentralized GPU grid represents a revolutionary paradigm shift in the world of computing.
              By harnessing the latent power of idle GPUs globally,
              our compute grid provides on-demand access to GPU resources
              that is both cost-effective but highly efficient.
            </p>
            <!-- <nuxt-link
              to="/platform"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link> -->
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/home/nodes.png">
          </div>
        </div>
        <div class="columns my-6 py-6 is-vcentered">
          <div class="column is-6 px-0 video-frame has-radius" data-aos="fade-right">
            <video autoplay muted @ended="onVideoEnd">
              <source src="~assets/img/pipeline-video.mp4" type="video/mp4">
            </video>
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Unrivaled power, for 85% less
            </h2>
            <p class="mb-5 has-limited-width-small">
              With costs up to 85% lower than traditional public clouds,
              Nosana offers a game-changing solution for organizations and individuals
              seeking massive compute power without breaking the bank.
              Our decentralized approach gives users direct access to GPU nodes
              that scale with their computational needs as required, all while ensuring high
              levels of security to protect sensitive data and intellectual property.
            </p>
            <!-- <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link> -->
          </div>
        </div>
        <div class="columns my-6 py-6 is-vcentered">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              Put your idle compute power to work
            </h2>
            <p class="mb-5 has-limited-width-small">
              Join the Nosana Network, put your idle GPU to work,
              and earn 10-15x more than what traditional crypto mining pools offer.
              Nosana empowers anyone with spare compute to contribute their idle processing power to our GPU grid.
              By doing so you will make a significant
              impact on the advancement of AI projects, all while earning substantial rewards.
              Welcome to a new era of peer-to-peer computational power sharing.
            </p>
            <!-- <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link> -->
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/home/compute.png">
          </div>
        </div>
        <div class="columns my-6 py-6 is-vcentered">
          <div class="column is-6" data-aos="fade-right">
            <img src="~assets/img/home/environment.png">
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Environment-friendly alternative
            </h2>
            <p class="mb-5 has-limited-width-small">
              With the world's data centers consuming more power than the entire UK and contributing to greenhouse
              gas emissions, it is time for a change. Nosana utilizes the spare compute of the masses,
              providing an eco-friendly alternative to using big datacenters.
            </p>
            <!-- <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
               Explore
            </nuxt-link> -->
          </div>
        </div>
      </div>
      <connect />
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      amount: 1500,
      days: 100
    };
  },
  colorMode: 'dark',
  mounted () {
  },
  destroyed () {
  },
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
  background-image: url('~assets/img/video-frame.svg');
  background-size: 101%;
  background-repeat: no-repeat;
  border: 1px solid #343D36;
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
