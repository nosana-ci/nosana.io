<template>
  <div>
    <section class="section intro">
      <BackgroundParallax />
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-10 pt-6 has-text-centered has-background-black-blur-false has-text-white"
          >
            <h1 class="title pt-6 is-spaced site-title has-text-white">
              Turn GPUs into Earnings with Nosana
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                Join the decentralized network powering the future of AI.
                Monetize your GPU resources effortlessly and contribute to
                groundbreaking innovation.
              </p>
              <div class="buttons is-flex is-justify-content-center mt-6">
                <a
                  href="https://docs.nosana.io/nodes/grid.html"
                  target="_blank"
                  class="button is-white is-medium mr-2"
                  style="max-width: 350px; width: 100%"
                >
                  Start earning now
                </a>
                <a
                  href="https://docs.nosana.io/nodes/grid.html"
                  target="_blank"
                  class="button is-white is-outlined is-medium ml-2"
                  style="max-width: 350px; width: 100%"
                >
                  Learn how it works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section py-6 has-background-black has-text-white">
      <div class="container py-6 mb-6">
        <h3 class="title is-1 py-6 mb-6 has-text-white">
          Unlock the full potential of your GPU hardware.
        </h3>
        <div class="columns is-multiline">
          <div class="is-4 column" data-aos="fade-in">
            <h4 class="title is-3 has-text-white">
              Passive Income <br>
              <span class="has-text-grey-light">Connect your hardware in minutes with our intuitive
                platform</span>
            </h4>
            <p class="is-size-5">
              Nosana’s decentralized infrastructure connects you to thousands of
              GPUs across the globe, offering scalable, on-demand compute power
              wherever you are.
            </p>
          </div>
          <div class="is-4 column" data-aos="fade-in">
            <h4 class="title is-3 has-text-white">
              Simple Setup <br>
              <span class="has-text-grey-light">Connect your hardware in minutes with our intuitive
                platform</span>
            </h4>
            <p class="is-size-5">
              Nosana’s decentralized infrastructure connects you to thousands of
              GPUs across the globe, offering scalable, on-demand compute power
              wherever you are.
            </p>
          </div>
          <div class="is-4 column" data-aos="fade-in" data-aos-delay="100">
            <h4 class="title is-3 has-text-white">
              Real-Time Metrics <br>
              <span class="has-text-grey-light">Track usage and earnings with complete transparancy</span>
            </h4>
            <p class="is-size-5">
              Leverage high-performance GPUs specifically tuned for AI inference
              tasks, ensuring efficiency and speed for your projects.
            </p>
          </div>
          <div class="is-4 column" data-aos="fade-in" data-aos-delay="200">
            <h4 class="title is-3 has-text-white">
              Flexible Availability<br>
              <span class="has-text-grey-light">Set your own schedules and pricing to maximize control</span>
            </h4>
            <p class="is-size-5">
              With dynamic pricing and job-matching, scale compute resources
              easily, while GPU providers effortlessly monetize their hardware.
              Ideal for any business size.
            </p>
          </div>
          <div class="is-4 column" data-aos="fade-in" data-aos-delay="300">
            <h4 class="title is-3 has-text-white">
              Support Innovation<br>
              <span class="has-text-grey-light">
                Help AI startups achieve breakthroughs by providing critical
                infrastructure
              </span>
            </h4>
            <p class="is-size-5">
              By tapping into idle consumer GPUs, Nosana minimizes energy waste
              and supports a greener future, providing robust computing power
              for your AI needs.
            </p>
          </div>
          <div class="is-4 mt-6 column is-flex is-align-items-center">
            <a
              href="https://docs.nosana.io/nodes/grid.html"
              target="_blank"
              class="button is-white is-medium mr-2"
              style="width: 100%"
            >
              Start earning now
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6 has-background-grey-lighter network-summary">
      <div class="container py-6 mb-6">
        <h3 class="title is-2 pt-3 mb-6">
          Network Summary
        </h3>
        <div class="columns is-multiline">
          <div class="is-3 column">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">
                GPUs Connected
              </div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                todo
                <!-- <ICountUp
                  v-if="true"
                  :end-val="0"
                  :options="{
                    enableScrollSpy: true,
                  }"
                />
                <span v-else>...</span> -->
              </h4>
            </div>
          </div>
          <div class="is-3 column">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">
                Compute hours provided
              </div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  v-if="duration"
                  :end-val="Math.round(duration / 3600)"
                  :options="{
                    enableScrollSpy: true,
                    decimalPlaces: 0,
                  }"
                />
                <span v-else>...</span>
              </h4>
            </div>
          </div>
          <div class="is-3 column">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">
                Value Earned
              </div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  v-if="valueEarned && nosPrice"
                  :end-val="valueEarned * nosPrice"
                  :options="{
                    enableScrollSpy: true,
                    decimalPlaces: 0,
                    prefix: '$',
                  }"
                />
                <span v-else>...</span>
              </h4>
            </div>
          </div>
          <div class="is-3 column">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">
                Completed Jobs
              </div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  v-if="jobsCompleted"
                  :end-val="jobsCompleted"
                  :options="{
                    enableScrollSpy: true,
                    decimalPlaces: 0,
                  }"
                />
                <span v-else>...</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6">
        <div class="columns py-6 is-align-items-center">
          <div class="column is-5">
            <h3 class="title is-2">
              Earn in 4 simple steps
            </h3>
            <ol class="title is-3 ml-6 mt-5">
              <li class="mb-3 pt-3">
                <strong>Register and verify</strong>
                <p
                  class="has-color-text is-size-6 has-text-weight-normal pt-2"
                  style="line-height: 25px"
                >
                  Create an account and verify your hardware.
                </p>
              </li>
              <li class="mb-3">
                <strong>List Your GPUs</strong>
                <p
                  class="has-color-text is-size-6 has-text-weight-normal pt-2"
                  style="line-height: 25px"
                >
                  Connect your GPUs to the Nosana network and set your
                  availability.
                </p>
              </li>
              <li class="mb-3">
                <strong>Start Earning</strong>
                <p
                  class="has-color-text is-size-6 has-text-weight-normal pt-2"
                  style="line-height: 25px"
                >
                  AI startups use your GPUs for jobs, and you earn for every
                  task completed.
                </p>
              </li>
              <li>
                <strong>Track Earnings</strong>
                <p
                  class="has-color-text is-size-6 has-text-weight-normal pt-2"
                  style="line-height: 25px"
                >
                  Monitor usage, earnings, and payments in your personalized
                  dashboard.
                </p>
              </li>
            </ol>

            <a
              href="https://docs.nosana.io/nodes/grid.html"
              target="_blank"
              class="button is-black is-medium mt-5"
              style="width: 100%"
            >
              Join and start earning today
            </a>
          </div>
          <div class="column is-8 is-flex has-justify-content-center p-6">
            <iframe
              src="https://www.youtube-nocookie.com/embed/36HUBr4i1ZA?si=kP4bBc-OI7kxmlAc"
              title="Nosana"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6 has-background-black has-text-white">
      <div class="container py-6 mb-6">
        <h3 class="title is-2 mb-6 has-text-white">
          How much can you earn?
        </h3>
        <p>Maximize the value of your hardware without extra effort.</p>
      </div>
    </section>

    <section
      class="section py-0 has-background-grey-lighter tweet-section"
      style="overflow: hidden"
    >
      <div class="container py-6">
        <div class="columns my-6 py-6">
          <div
            class="column is-4 py-6 my-6 has-background-grey-lighter"
            style="position: relative; z-index: 1"
            data-aos="fade-right"
          >
            <h3 class="title is-2">
              Success Stories
            </h3>
            <p class="mb-5 is-size-4">
              See how others are thriving with Nosana
            </p>
            <button class="button is-black is-medium mt-5" style="width: 100%">
              Join now
            </button>
          </div>
          <div class="column is-8">
            <tweets-host />
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6">
        <h3 class="title is-1 pt-6">
          Ready to Join the GPU Revolution?
        </h3>
        <h3 class="title is-2">
          It takes less than 10 minutes to start earning with Nosana.
        </h3>
        <div class="buttons is-flex mt-6 mb-6">
          <a
            href="https://docs.nosana.io/nodes/grid.html"
            target="_blank"
            class="button is-black is-medium mr-2"
            style="max-width: 350px; width: 100%"
          >
            Sign Up Now
          </a>
          <a
            target="_blank"
            href="https://docs.nosana.io/nodes/grid.html"
            class="button is-black is-outlined is-medium ml-2"
            style="max-width: 350px; width: 100%"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
import BackgroundParallax from '../../components/BackgroundParallax.vue';

export default {
  colorMode: 'light',
  components: { BackgroundParallax, ICountUp },
  data () {
    return {
      jobsCompleted: null,
      duration: null,
      valueEarned: null,
      nosPrice: null,
      numberOfGpus: null
    };
  },
  mounted () {
    this.getStatistics();
  },
  methods: {
    async getStatistics () {
      try {
        const responseStats = await fetch(
          'https://dashboard.k8s.prd.nos.ci/api/stats/'
        );
        const stats = await responseStats.json();
        if (stats[0]) {
          this.nosPrice = stats[0].price;
        }
        const response = await fetch(
          'https://dashboard.k8s.prd.nos.ci/api/jobs/stats/'
        );
        const data = await response.json();
        this.jobsCompleted = data.completed;
        this.duration = data.duration;
        this.valueEarned = data.price;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
iframe {
  aspect-ratio: 16 / 9;
  width: 100% !important;
}

.bg-scroll {
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("~assets/img/host-bg.jpg");
  background-size: cover;
  background-position: center;
}

.tweet-image {
  position: absolute;
  top: 0;
  bottom: 0;
  @media screen and (max-width: $tablet) {
    position: relative;
  }
}
@media screen and (max-width: $tablet) {
  .tweet-section {
    .columns {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      overflow: hidden;
    }
    .column.my-6 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
  }
  .column.mt-6 {
    margin-top: 0 !important;
  }
  .network-summary {
    text-align: center;
    .is-flex {
      justify-content: center;
    }
  }
}
</style>
