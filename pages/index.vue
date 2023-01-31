<template>
  <div>
    <home-intro />
    <!-- <partners /> -->
    <section class="section has-background-gradient">
      <div class="container">
        <div class="columns is-variable is-8 has-text-centered py-5">
          <div class="column is-one-third" data-aos="fade-up" data-aos-delay="200">
            <div class="px-4 py-5">
              <img src="~assets/img/icons/develop.svg" style="height: 42px;">
              <h2 class="title is-4 my-3">
                Product
              </h2>
              <p class="mb-3">
                Identify and fix errors quickly with our CI Solution
              </p>
              <nuxt-link to="/product">
                Explore
              </nuxt-link>
            </div>
          </div>
          <div class="column is-one-third " data-aos="fade-up" data-aos-delay="400">
            <div class="px-4 py-5">
              <img src="~assets/img/home/planet.svg" style="height: 42px;">
              <h2 class="title is-4 my-3">
                Decentralized Network
              </h2>
              <p class="mb-3">
                Learn more why you should put the power of the world’s first decentralized CI service to work
              </p>
              <nuxt-link to="/platform">
                Explore
              </nuxt-link>
            </div>
          </div>
          <div class="column is-one-third " data-aos="fade-up" data-aos-delay="600">
            <div class="px-4 py-5">
              <img src="~assets/img/icons/token.svg" style="height: 42px;">
              <h2 class="title is-4 my-3">
                Contact us
              </h2>
              <p class="mb-3">
                We’re always open to explore new opportunities.
              </p>
              <nuxt-link to="/contact">
                Explore
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <!-- text blocks -->
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              Robust and resilient
            </h2>
            <p class="mb-5 has-limited-width-small">
              We refuse to build in environments with a single point of failure,
              vulnerabilities and weak spots. Our network is designed to
              ensure that in the event of a node going offline or is malicious,
              the workload is seamlessly passed to other nodes, keeping everything running safely.
              A network that’s better protected against outages and cyberattacks.
            </p>
            <nuxt-link
              to="/platform"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/home/robust.svg">
          </div>
        </div>
        <div class="columns my-6 py-6">
          <div class="column is-6 px-0 video-frame has-radius" data-aos="fade-right">
            <video autoplay muted loop>
              <source src="~assets/img/pipeline-video.mp4" type="video/mp4">
            </video>
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Transparent and secure
            </h2>
            <p class="mb-5 has-limited-width-small">
              We prioritize both transparency and security.
              A decentralized network allows for increased trust and visibility,
              as all users have access to the same information and can verify its accuracy.
              Combined with our advanced security measures, including our state-of-the-art secret manager,
              you can rest assured that your information is protected at all times.
            </p>
            <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link>
          </div>
        </div>
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h2 class="title is-2">
              In control of your own compute
            </h2>
            <p class="mb-5 has-limited-width-small">
              Plug in your own devices to compute your pipelines and/or let your designated community
              contribute compute.
              The ability to self-host means that you retain full ownership and control of your data.
              Saying no to third-party access eliminates the dangers of data mining, routine surveillance,
              and the risk of vendor-side malicious insiders.
            </p>
            <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img src="~assets/img/home/control.svg">
          </div>
        </div>
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <img src="~assets/img/home/environment.svg">
          </div>
          <div class="column is-5 is-offset-1" data-aos="fade-left">
            <h2 class="title is-2">
              Environment-friendly alternative
            </h2>
            <p class="mb-5 has-limited-width-small">
              With the world's data centers consuming more power than the entire UK and contributing to greenhouse
              gas emissions,it's time for a change. Our CI engine utilizes the spare compute of the masses,
              providing an eco-friendly alternative to using big datacenters.
            </p>
            <nuxt-link
              to="/product"
              class="button mt-2 is-accent is-outlined is-wide"
            >
              Explore
            </nuxt-link>
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
    // this.onloadzoho();
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
