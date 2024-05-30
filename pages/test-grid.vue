<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" style="width: 800px">
          Incentivized<br>GPU Test Grid
        </h1>
        <div class="columns mt-5">
          <div class="column is-5" data-aos="fade-up">
            <h2 class="subtitle">
              A multi-phase test grid for developers, data scientists, and AI enthusiasts.
            </h2>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                Join us as an early adopter and build the foundation for the world's biggest
                GPU-compute grid. We're working to make AI more accessible and powerful than ever before.
                <br>
              </p>
              <p class="block">
                <a
                  target="_blank"
                  href="https://forms.gle/d6Copk6W4TAMDY5n8"
                  class="mr-3 button is-accent is-wide"
                >
                  <b>Registrations are closed at this time.</b>
                </a>
              </p>
            </div>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                The aim of our GPU compute grid is to provide a scalable, cost-efficient solution for AI computations,
                foster market innovation and meet the growing demand for advanced, energy-efficient GPUs.
                Register to take part and access complimentary, on-demand compute.
                <br>
              </p>
              <p class="block">
                <a
                  target="_blank"
                  href="https://forms.gle/QrqDokeC4eEjpEZa8"
                  class="mr-3 button is-accent is-wide"
                >
                  <b>Get Access To GPU Power</b>
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered mb-6">
            <div>
              <img src="~assets/img/partners/technology.svg">
            </div>
          </div>
        </div>

        <div class="mt-6 py-6 has-text-centered has-background-gradient">
          <h2 class="title mb-6" data-aos="fade-right">
            Be an Early Adopter
          </h2>
          <p class="has-limited-width is-horizontal-centered">
            By joining the Test Grid you will be at the frontier of powering the AI revolution. The Test Grid is
            split into multiple phases, each designed to thoroughly evaluate specific
            aspects of our GPU-compute grid.
            As we progress through the phases, we will gradually introduce new features,
            expand hardware support, and enable more AI models to be run. This phased approach ensures that
            we are gathering comprehensive feedback and addressing any potential issues before we move to the mainnet.
          </p>
        </div>
      </div>
    </section>
    <section class="section mt-5">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <test-grid-phases />
          </div>
        </div>
      </div>
    </section>

    <section class="section mt-5">
      <div class="container">
        <div class="mt-6 py-6 has-text-centered ">
          <h2 class="title mb-6" data-aos="fade-right">
            Requirements
          </h2>
          <p class="has-limited-width-small is-horizontal-centered">
            During the first two phases of the Test Grid you will require an NVIDIA GPU with CUDA.
            The following list of models will be supported, other cards will be reviewed.
          </p>
          <div class="table-container mt-3">
            <table class="typography table is-horizontal-centered">
              <tbody>
                <tr data-aos="fade-in" data-aos-delay="100">
                  <td class="py-2">
                    NVIDIA RTX 4090
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 4080
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 4070Ti
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 4070
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="200">
                  <td class="py-2">
                    NVIDIA RTX 4060Ti
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 4060
                  </td>
                  <td class="py-2">
                    NVIDA RTX 3090Ti
                  </td>
                  <td class="py-2">
                    NVIDA RTX 3090
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="300">
                  <td class="py-2">
                    NVIDA RTX 3080Ti
                  </td>
                  <td class="py-2">
                    NVIDA RTX 3080
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 3070Ti
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 3070
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="400">
                  <td class="py-2">
                    NVIDIA RTX 3060Ti
                  </td>
                  <td class="py-2">
                    NVIDIA RTX 3060
                  </td>
                  <td class="py-2">
                    NVIDIA RTX A4000
                  </td>
                  <td class="py-2">
                    NVIDIA RTX A4500
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="500">
                  <td class="py-2">
                    NVIDIA RTX A5000
                  </td>
                  <td class="py-2">
                    NVIDIA RTX A5500
                  </td>
                  <td class="py-2">
                    NVIDIA RTX A6000
                  </td>
                  <td class="py-2">
                    NVIDIA A100
                  </td>
                </tr>
                <tr data-aos="fade-in" data-aos-delay="500">
                  <td class="py-2">
                    NVIDIA A40
                  </td>
                  <td class="py-2">
                    NVIDIA H100
                  </td>
                  <td class="py-2" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="column is-8 is-horizontal-centered">
          <h2 class="title mb-6 has-text-centered">
            FAQ
          </h2>
          <accordion>
            <accordion-item v-for="faq in faqs" :key="faq.question">
              <!-- This slot will handle the title/header of the accordion and is the part you click on -->
              <template slot="accordion-trigger">
                <h3 class="subtitle mb-4 has-text-weight-semibold">
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
      </div>
    </section>
    <section class="section">
      <div class="py-6 has-text-centered">
        <h2 class="title mb-6 is-2" data-aos="fade-right">
          Advantages of Joining the Test Grid
        </h2>
        <div class="columns is-variable is-multiline is-centered">
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
            <img src="~assets/img/icons/browser.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Earn $NOS tokens for your participation (up to 250,000 NOS tokens available in Phase 1)
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
            <img src="~assets/img/icons/devops.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Become fast-tracked as a GPU supplier for the mainnet release
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="600">
            <img src="~assets/img/icons/nodes.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Support the advancement of decentralized AI
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
            <img src="~assets/img/icons/chat-group.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Be involved in the forefront of Nosana's development and connect directly with the team
            </p>
          </div>
          <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
            <img src="~assets/img/icons/server.svg" height="80">
            <p class="has-limited-width-smaller is-horizontal-centered">
              Utilize your existing hardware for generating a passive income
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  colorMode: 'dark',
  data () {
    return {
      faqs: [
        { question: 'My GPU model is not listed above, can I still join?', answer: 'The list of GPU models is not exhaustive. If you have a different model you can still register for the Test Grid, your GPU will then be reviewed and potentially added to the grid (if not now, then in a later phase).' },
        { question: 'How do I register for the Test Grid?', answer: 'The registration involves 2 steps:<br> - Registering your GPU hardware on the Nosana Network <br> - Filling out an application form.<br> In-depth tutorial can be found here: <a href="https://docs.nosana.io/nodes/testgrid.html" target="_blank">https://docs.nosana.io/nodes/testgrid.html</a>' },
        { question: 'Do I need a blockchain wallet?', answer: 'For the registration you will need a Solana address to receive your access key NFT on.<br>When joining the test grid we recommend that you generate a new Solana keypair with a small amount of SOL for transaction fees. Instructions on how to do this can be found in the <a href="https://docs.nosana.io/nodes/testgrid.html" target="_blank">Registration guide</a>.' },
        { question: 'How do I know if I’m selected for the Test Grid?', answer: 'You will receive an email with instructions once you get selected for the Test Grid.<br>Did you submit your registration but did not receive an email? Our Test Grid is most likely oversubscribed, but we will onboard more participants as the Test Grid progresses.' },
        { question: 'What kinds of tests will I need to do?', answer: 'During the Incentivized GPU Test Grid there will be a selection of markets running various AI workloads.  These workloads may include generic stress and performance test, light workloads, and more robust workloads for higher powered GPU’s.' },
        { question: 'How much $NOS will I earn?', answer: 'The exact amount of NOS you can earn during this program will be shared when the registration opens. There are multiple ways you can earn rewards:<br><br>- Once you run the benchmark job and get accepted, you will receive a base reward price<br>- For each workload you run you will receive a specific NOS reward<br>- There will be several challenges during the Test Grid that pay out additional rewards, some of which require KYC.' },
        { question: 'How long will Phase 2 last?', answer: 'Phase 2 is expected to run until the beginning of July 2024 - but can be extended based on the distributed rewards' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "bulma/sass/utilities/mixins";
.area {
  position: absolute;
  bottom: 0px;
  left: 0;
}
@include touch {
  .area {
    position: relative;
    width: 100%;
  }
}
table {
    border-spacing: 10px;
    border-collapse: separate;
}
</style>
