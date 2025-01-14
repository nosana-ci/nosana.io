<template>
  <div>
    <section class="section intro">
      <BackgroundParallax />
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-8 pt-6 has-text-centered has-background-black-blur-false has-text-white"
          >
            <img
              src="~/assets/img/sogni-logo-white.svg"
              alt="Sogni"
              class="mt-3"
            />
            <h1
              style="font-size: 2.7rem"
              class="title pt-5 is-spaced has-text-white"
            >
              Fueling Creativity with Decentralized Power
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                "Using Nosana, we not only reduced costs but also gained the
                ability to handle peak computational loads without sacrificing
                speed or quality,"
              </p>
              <button
                class="button is-white is-medium mt-5"
                style="max-width: 390px; width: 100%"
                data-aos="fade-in"
              >
                Get started with Nosana
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6 mb-6">
        <div class="columns is-centered">
          <div class="column is-10">
            <h3 class="title is-2 mb-5" style="line-height: 50px">
              Sogni AI: Revolutionizing Gen AI Creative Tools<br />
              with Nosana’s GPU Power
            </h3>
            <p>
              Sogni AI harnesses Nosana’s decentralized GPU infrastructure to
              supercharge their Gen AI creative tool, enhancing scalability, and
              deliver cutting-edge AI solutions while reducing operational
              costs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6 has-background-grey-lighter network-summary">
      <div class="container py-6 mb-6">
        <h3 class="title is-3 pt-3 mb-6">
          Nosana Results after the first 8 weeks:
        </h3>
        <div class="columns is-multiline">
          <div class="is-4 column" data-aos="fade-in">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">Generated Images</div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  v-if="imagesGenerated"
                  :end-val="imagesGenerated"
                  :options="{
                    enableScrollSpy: true,
                  }"
                />
                <span v-else>...</span>
              </h4>
            </div>
          </div>
          <div class="is-4 column" data-aos="fade-in" data-aos-delay="200">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">Compute hours provided</div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  v-if="computeHours"
                  :end-val="computeHours"
                  :options="{
                    enableScrollSpy: true,
                    decimalPlaces: 0,
                  }"
                />
              </h4>
            </div>
          </div>
          <div class="is-4 column" data-aos="fade-in" data-aos-delay="400">
            <div class="has-background-white p-5">
              <div class="has-text-grey-light mt-1">Nodes</div>
              <h4 class="title is-2 pt-2 is-flex mb-1">
                <ICountUp
                  :end-val="26"
                  :options="{
                    enableScrollSpy: true,
                    decimalPlaces: 0,
                  }"
                />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6 my-6">
        <div class="columns is-centered">
          <div class="column is-5" data-aos="fade-left">
            <h4 class="title is-4">AI Inference at Scale</h4>
            <p class="pr-6">
              Sogni AI is constantly striving to ensure they keep up with the
              pace of development within the image generation sector, as new
              frameworks and models are rapidly released. Therefore they needed
              a solution that not only allowed them to rapidly scale their
              compute needs to customer demands, but to also ensure they are the
              workload loads agile and them they to be quickly altered to meet
              the ever changing requirements.
            </p>
          </div>
          <div class="column is-5" data-aos="fade-right">
            <p class="is-size-3 mb-5 has-text-weight-semibold has-text-black">
              "Using Nosana, we not only reduced costs but also gained the
              ability to handle peak computational loads without sacrificing
              speed or quality,"
            </p>
            <p>[Name, Title, Sogni AI]</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-lighter py-6">
      <div class="container py-6 my-6">
        <div class="columns is-centered">
          <div class="column is-10">
            <h4 class="title is-2 mb-6">Challenges Faced By Sogni AI</h4>
            <h4 class="title is-4" data-aos="fade-in">
              High Costs of Cloud GPU Services
            </h4>
            <p data-aos="fade-in">
              Cloud Compute only provides access to high end GPUs which have
              been show to be over kill for image generation, driving up
              operational expenses.
            </p>
            <hr
              data-aos="fade-in"
              style="
                background-color: #999999;
                height: 1px;
                margin: 2.5rem 0px !important;
              "
            />
            <h4 class="title is-4" data-aos="fade-in">Scaling Limitations</h4>
            <p data-aos="fade-in">
              Traditional solutions are challenging for GPUs quick GPU scaling
              due to the storage requirments.
            </p>
            <hr
              data-aos="fade-in"
              style="
                background-color: #999999;
                height: 1px;
                margin: 2.5rem 0px !important;
              "
            />
            <h4 class="title is-4" data-aos="fade-in">
              Inefficiencies in Utilization
            </h4>
            <p data-aos="fade-in">
              Sogni AI often faced underutilised resources or bottlenecks in its
              pipelines.
            </p>
            <hr
              data-aos="fade-in"
              style="
                background-color: #999999;
                height: 1px;
                margin-top: 2.5rem !important;
              "
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6 my-6">
        <div class="columns is-centered">
          <div class="column is-10">
            <h4 class="title is-2 mb-6">Solutions Delivered by Nosana</h4>
            <p>
              Nosana’s decentralized GPU platform enabled Sogni AI to tap into a
              global network of available GPUs. Key implementations included:
            </p>
            <ul class="ml-5 mt-5 has-text-black has-text-weight-semibold pr-6">
              <li>
                Dynamic GPU Allocation: GPUs can be targeted based on
                geo-location to ensure the highest end user performance.
              </li>
              <li>TBC</li>
              <li>
                Cost-Effective Infrastructure: Decentralized GPU sourcing cut
                costs by 70% compared to centralized cloud providers.
              </li>
            </ul>
            <h4 class="title is-3 mt-6 mb-5">Impact of Nosana on Sogni AI</h4>
            <ol
              class="ml-6 mb-5 mt-4 has-text-black has-text-weight-semibold pr-6"
            >
              <li class="py-3">
                Rapid Model Deployment: Nosana made it quick and easy to deploy
                multiple production frameworks to the market place.
              </li>
              <li class="py-3">
                Enhanced Scalability: Nosana’s global GPU network and resource
                management solution ensured Sogni AI could scale up instantly
                during peak demand.
              </li>
              <li class="py-3">
                Reduced Environmental Impact: By utilizing underutilized GPUs
                worldwide, Nosana’s decentralized model aligns with Sogni AI’s
                commitment to sustainability.
              </li>
            </ol>
            <p>
              With Nosana, Sogni AI has redefined its approach to AI inference.
              The partnership ensures that Sogni AI remains at the forefront of
              innovation while maintaining operational efficiency.
            </p>
          </div>
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
      imagesGenerated: null,
      computeHours: null
    };
  },
  mounted () {
    this.getSogniData();
  },
  methods: {
    async getSogniData () {
      try {
        const response = await fetch(
          'https://socket.sogni.ai/api/v1/analytics/lifetime'
        );
        const data = await response.json();
        this.imagesGenerated = data.jobCompleteWorker;
        this.computeHours = data.renderSecCompleteWorker / 3600;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-scroll {
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 95%
    ),
    url("~assets/img/sogni-graphic.jpeg");
  background-size: cover;
  background-position: center;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
@media screen and (max-width: $tablet) {
  p.pr-6 {
    padding-right: 0 !important;
  }
}
ol,
ul {
  max-width: 700px;
  width: 100%;
}
</style>
