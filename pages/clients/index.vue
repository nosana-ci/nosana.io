<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-10 pt-6 has-text-centered has-background-black-blur-false"
          >
            <h1 class="title pt-6 is-spaced site-title">
              Turn GPUs into Earnings with Nosana
            </h1>
            <div class="py-2">
              <p class="block is-size-3" style="margin: 0 auto">
                Join the decentralized network powering the future of AI.
                Monetize your GPU resources effortlessly and contribute to
                groundbreaking innovation.
              </p>
              <div class="buttons is-flex is-justify-content-center mt-6">
                <button
                  class="button is-black is-medium mr-2"
                  style="max-width: 350px; width: 100%"
                >
                  Start earning now
                </button>
                <button
                  class="button is-black is-outlined is-medium ml-2"
                  style="max-width: 350px; width: 100%"
                >
                  Learn how it works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <div class="columns mt-6 pt-6">
          <div class="column is-4" data-aos="fade-in">
            <div class="is-flex mb-5">
              <div class="mr-3 grey-title-block" style="flex: 0 0 90px; width: 90px; background-color: #F7F7F7;">
                &nbsp;
              </div>
              <h3 class="title is-2">
                The GPU Problem<br> for AI Startups.
              </h3>
            </div>
            <p class="mb-5 is-4 is-size-4">
              AI startups struggle with the high costs of traditional GPU
              providers, which strain budgets and limit innovation. Scalability
              and resource availability are often inadequate, causing delays in
              accessing the computing power needed for growth. Additionally.
            </p>
          </div>
          <div class="column is-4" data-aos="fade-in" data-aos-delay="100">
            <div class="is-flex mb-5">
              <div class="mr-3 grey-title-block flex-1" style="flex: 0 0 90px; background-color: #F7F7F7;">
                &nbsp;
              </div>
              <h3 class="title is-2">
                Nosana offers the solution.
              </h3>
            </div>
            <p class="mb-5 is-4 is-size-4">
              Nosana provides GPU access designed specifically for AI startups,
              delivering a scalable and cost-effective alternative to
              traditional providers. With flexible pricing and seamless
              integration, Nosana empowers startups to access the computing
              power they need, when they need it, without breaking their
              budgets.
            </p>
          </div>
          <div class="column is-4" data-aos="fade-in" data-aos-delay="200">
            <div class="is-flex mb-5">
              <div class="mr-3 grey-title-block" style="flex: 0 0 90px; width: 90px; background-color: #F7F7F7;">
                &nbsp;
              </div>
              <h3 class="title is-2">
                Nosana offers the solution.
              </h3>
            </div>
            <p class="mb-5 is-4 is-size-4">
              At Nosana, we believe in open access compute, so you can bring
              your own AI model from Hugging Face and your own Docker image from
              any registry to get the job done. Network security, validation and
              peer to peer transactions are built in from the ground up. For a
              better understanding of all features, take a look at the Nosana
              feature set and pricing page.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-black has-text-white">
      <div class="container py-6">
        <div class="columns py-6 is-align-items-center">
          <div class="column is-8 is-flex has-justify-content-center">
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
          <div class="column is-5">
            <h3 class="title is-2 has-text-white">
              How Nosana works
            </h3>
            <h4 class="title is-3 has-text-white">
              Everything you need to build and scale
            </h4>
            <p class="mb-5 is-size-4">
              There has never been a more exciting time in technology. We are
              experiencing one of the most significant shifts in history, where
              AI is creating entirely new ways to solve problems, engage
              customers, and work more efficiently.
            </p>
            <button
              class="button is-white is-medium"
              style="max-width: 350px; width: 100%"
            >
              Contact us for a demo
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container py-6">
        <div class="columns py-6 is-align-items-center">
          <div class="column is-5">
            <h3 class="title is-2">
              Why AI Startups Choose Nosana
            </h3>
            <accordion>
              <accordion-item v-for="faq in faqs" :key="faq.question">
                <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                  <h3 class="title is-3 mb-0 has-text-weight-semibold">
                    {{ faq.question }}
                  </h3>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                  <!-- eslint-disable vue/no-v-html -->
                  <span v-html="faq.answer" />
                </template>
              </accordion-item>
            </accordion>
          </div>
          <div class="column is-7 py-0 px-6" style="height: auto; align-self: stretch;">
            <div class="has-background-black has-radius-big p-6 is-flex is-align-items-center" style="height: 100%;">
              <img src="~/assets/img/dashboard.jpeg" alt="Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6 has-background-grey-lighter">
      <div class="container py-6 mb-6">
        <h3 class="title is-2 pt-3">
          Usage Pricing
        </h3>
        <p>
          Estimate your costs by selecting the resources you need. <br>
          Adjust CPU, memory, storage, and other parameters to get a detailed cost breakdown.
        </p>

        <div class="has-background-white has-radius mt-6 p-5">
          <PriceCalculator />
        </div>
      </div>
    </section>

    <section class="section py-6">
      <div class="container py-6 mb-6">
        <h3 class="title is-1 pt-3">
          Business Case
        </h3>
        <h3 class="title is-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>

        <div class="columns">
          <div class="column is-6">
            <div class="mt-6">
              <p>Use case</p>
              <img src="~/assets/img/sogni-logo.svg" alt="Sogni" class="mt-3 mb-5" />
              <p class="is-size-3 mb-3 has-text-weight-semibold has-text-black">
                "Using Nosana, we not only reduced costs but also gained the ability to handle peak computational
                loads without sacrificing speed or quality,"
              </p>
              <p>[Name, Title, Sogni AI]</p>

              <div class="columns my-5">
                <div class="is-6 column">
                  <div class="has-background-grey-lighter p-5">
                    <div class="has-text-grey-light mt-1">
                      Generated Images
                    </div>
                    <h4 class="title is-2 pt-2 is-flex mb-1">
                      <ICountUp
                        :end-val="31783"
                        :options="{
                          enableScrollSpy: true,
                        }"
                      />
                    </h4>
                  </div>
                </div>
                <div class="is-6 column">
                  <div class="has-background-grey-lighter p-5">
                    <div class="has-text-grey-light mt-1">
                      Compute hours provided
                    </div>
                    <h4 class="title is-2 pt-2 is-flex mb-1">
                      <ICountUp
                        :end-val="534.45"
                        :options="{
                          enableScrollSpy: true,
                          decimalPlaces: 2
                        }"
                      />
                    </h4>
                  </div>
                </div>
              </div>

              <nuxt-link
                to="/clients/sogni"
                class="has-text-accent has-text-weight-semibold is-size-5"
              >
                Read the full Sogni AI Use Case <i class="pl-1 fas fa-chevron-right" />
              </nuxt-link>
            </div>
          </div>
          <div class="column is-6">
            <img class="has-radius-big" src="~/assets/img/sogni-graphic.jpeg" alt="Sogni Graphic" />
          </div>
        </div>
      </div>
    </section>

    <section class="section py-6 has-background-grey-lighter">
      <div class="container py-6 mb-6 has-text-centered">
        <h3 class="title is-2 pt-3 mb-2">
          Try Nosana for free
        </h3>
        <h3 class="title is-3 mb-0 has-text-weight-semibold">
          No commitments. Scale your AI startup today.
        </h3>
        <div class="buttons is-flex is-justify-content-center mt-6">
          <button class="button is-black is-medium mr-3"
            style="max-width: 300px; width: 100%"
          >
            Get started free trial
          </button>
          <button
            class="button is-black is-medium ml-3"
            style="max-width: 300px; width: 100%"
          >
            Contact sales
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
import PriceCalculator from '../../components/PriceCalculator.vue';
export default {
  components: { ICountUp, PriceCalculator },
  colorMode: 'light',
  data () {
    return {
      faqs: [
        {
          question: 'Cost-efficient decentralized GPUs',
          answer:
            'Build apps with industry-leading AI services and models using a unified API.'
        },
        {
          question: 'Real-time scalability for peak demand',
          answer: '-'
        },
        {
          question: 'Seamless Docker integration',
          answer: '-'
        },
        {
          question: 'Transparent pay-as-you-go pricing',
          answer: '-'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: $tablet) {
  .grey-title-block {
    display: none;
  }
  .columns.my-6.pt-6 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    padding-top: 0 !important;
  }
  .mt-5 {
    margin-top: 0 !important;
  }
  .has-radius.p-6 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  button {
    margin: 0 !important;
  }
}
iframe {
  aspect-ratio: 16 / 9;
  width: 100% !important;
}
</style>
