<template>
  <div>
    <section class="section mt-5">
      <div class="container">
        <h2 class="title is-2 mt-5 mb-0">
          Welcome to the Nosana Nework! Get the support you need
        </h2>
        <div class="columns">
          <div class="columns my-6 pt-6">
            <div class="column is-4" data-aos="fade-right">
              <div class="has-radius p-5" style="background-color: #f7f7f7">
                <h4 class="title is-4 p-2 mb-2">
                  Github Issues
                </h4>
                <p class="mb-5 is-size-5 p-2" style="color: #666">
                  Explore, discuss, and report technical issues on our GitHub
                  repository. Our community actively collaborates to resolve
                  problems and provide assistance.
                  <a href="#" class="button mt-4">
                    <img src="~/assets/img/icons/github.svg" style="width: 16px; margin-right: 8px;">Github Issues
                  </a>
                </p>
              </div>
            </div>
            <div class="column is-4" data-aos="fade-left">
              <div class="has-radius p-5" style="background-color: #f7f7f7">
                <h4 class="title is-4 p-2 mb-2">
                  Ask the Community
                </h4>
                <p class="mb-5 is-size-5 p-2" style="color: #666">
                  Explore, discuss, and report technical issues on our GitHub
                  repository. Our community actively collaborates to resolve
                  problems and provide assistance.
                  <a href="#" class="button mt-4">
                    <img src="~/assets/img/icons/discord.svg" style="width: 18px; margin-right: 8px;">Discord
                  </a>
                </p>
              </div>
            </div>
            <div class="column is-4" data-aos="fade-left">
              <div class="has-radius p-5" style="background-color: #f7f7f7">
                <h4 class="title is-4 p-2 mb-2">
                  GitHub Discussion
                </h4>
                <p class="mb-5 is-size-5 p-2" style="color: #666">
                  Explore, discuss, and report technical issues on our GitHub
                  repository. Our community actively collaborates to resolve
                  problems and provide assistance.
                  <a href="#" class="button mt-4">
                    <img src="~/assets/img/icons/github.svg" style="width: 16px; margin-right: 8px;">Github Discussion
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-lighter">
      <div class="container">
        <div class="column is-10 is-horizontal-centered mb-6">
          <h3 class="title is-2">
            Frequently asked questions
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'light',
  data () {
    return {
      faqs: [
        {
          question: 'My GPU model is not listed above, can I still join?',
          answer:
            'The list of GPU models is not exhaustive. If you have a different model you can still register for the Test Grid, your GPU will then be reviewed and potentially added to the grid (if not now, then in a later phase).'
        },
        {
          question: 'How do I register for the Test Grid?',
          answer:
            'Follow the in-depth tutorial found here: <a href="https://docs.nosana.io/nodes/testgrid.html" target="_blank">https://docs.nosana.io/nodes/testgrid.html</a> to register your GPU hardware on the Nosana Network. This involves installing the Nosana node on your computer. It will take some technical knowledge for you to do this. This means knowing how to use the command line and run Docker containers. If you are unable to complete this setup on your own, then unfortunately, you are not eligible for this phase of the Test Grid.'
        },
        {
          question: 'Do I need a blockchain wallet?',
          answer:
            'No, the Nosana Node will create one for you. You will be required to send it a small amount of SOL to operate as a node. If you wish to use your own keypair file, and have the necessary knowledge to do this, please refer to the advanced documentation in the tutorial to use your own keypair with the Nosana Node.'
        },
        {
          question: 'How do I know if I’m selected for the Test Grid?',
          answer:
            'We will selectively onboard new participants into the Test Grid based on market requirements and ability of your hardware to run advanced AI models. All nodes selected for onboarding will be announced in our Discord server only. Please join our Discord server here: <a href="https://discord.gg/Nosana-AI" target="_blank">https://discord.gg/Nosana-AI</a> to receive updates.'
        },
        {
          question: 'What kinds of tests will I need to do?',
          answer:
            'During the Incentivized GPU Test Grid there will be a selection of markets running various AI workloads.  These workloads may include generic stress and performance test, light workloads, and more robust workloads for higher powered GPU’s.'
        },
        {
          question: 'How much $NOS will I earn?',
          answer:
            'The exact amount of NOS you can earn during this program will be shared when the registration opens. There are multiple ways you can earn rewards:<br><br>- Once you run the benchmark job and get accepted, you will receive a base reward price<br>- For each workload you run you will receive a specific NOS reward<br>- There will be several challenges during the Test Grid that pay out additional rewards, some of which require KYC.'
        },
        {
          question: 'How long will Phase 2 last?',
          answer:
            'Phase 2 is expected to run through July 2024 - but can be extended based on the distributed rewards.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.button {
  &:hover {
    background-color: #f9f9f9;
    color: #333 !important;
  }
}
</style>
