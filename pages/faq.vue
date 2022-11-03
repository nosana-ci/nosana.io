<template>
  <div>
    <section class="section has-background-image faq-header">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          FAQ
        </h1>
        <p>Everything you need to get started on Nosana</p>
        <div
          class="
            mt-5
            field
            has-addons has-text-centered
            is-horizontal-centered
            has-limited-width
          "
        >
          <div class="control is-expanded">
            <input
              v-model="search"
              class="input is-accent"
              type="text"
              placeholder="Search by keyword"
            >
          </div>
          <div class="control">
            <a class="button is-accent has-text-weight-semibold"> Search </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div
          class="has-limited-width is-horizontal-centered"
          style="width: 960px"
        >
          <accordion>
            <accordion-item v-for="faq in filteredFaqs" :key="faq.question">
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
    <section class="section has-background-image has-text-centered half-circle">
      <div class="container">
        <div class="mt-6 pt-6">
          <div class="">
            <h1 class="title">
              Didn't find your<br>answer?
            </h1>
            <p>Join our Discord</p>
          </div>
          <div class="mt-6">
            <a
              href="https://discord.gg/nosana"
              target="_blank"
              class="subtitle is-1 px-4"
              style="background: rgba(0, 0, 0, 0.6)"
            >
              <i class="fab fa-discord" />
            </a>
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
      search: null,
      faqs: [
        {
          question: 'What is Nosana?',
          answer:
            'The Nosana Network will be the leading provider of decentralized CPU-based Dev(ops) solutions, revolutionizing the development process of Metaverse projects. Our network allows you to develop your projects with the computing power of (y)our community or use your spare computing to power the computational needs of future projects in the metaverse and earn NOS tokens. You can read more about it by visiting our documentation at docs.nosana.io'
        },
        {
          question: 'Who is the team behind Nosana?',
          answer:
            'The Nosana team is a distributed group of individuals with a strong technical background in the blockchain and CI/CD industry. We share a drive to disrupt the established cloud computing industry using decentralized technologies. We want to make the Metaverse a safe place of freedom where people don\'t have to sacrifice their privacy to large corps.  If you feel you belong here as well send an email to team@nosana.io - developers, marketeers, content writers, community mods, designers, and in general people of passion are welcome. You can read about our team at nosana.io/team'
        },
        {
          question: 'Will there be a public token sale?',
          answer:
            'Nosana launched on Solanium. Solanium is the go-to launchpad for the Solana blockchain. For more information about the IDO that took place, please visit <a target="_blank" href="https://solanium.io/project/nosana">https://solanium.io/project/nosana</a>'
        },
        {
          question: 'When did the IDO take place?',
          answer:
            'The IDO took place on Solanium on the 17th of January, 2022. For more information, please go to: <a target="_blank" href="https://solanium.io/project/nosana">https://solanium.io/project/nosana</a>'
        },
        {
          question: 'How will the incentivized Testnet work?',
          answer:
            'The Testnet program is intended to test Nosana\'s CI features and tools, before going to Mainnet. Projects that participate in the Incentivized Testnet program will be able to acquire NOS tokens. A total of 5,000,000 NOS tokens are available for giveaway to participants in the Testnet Program.'
        },
        {
          question: 'When will the incentivized Testnet start?',
          answer:
            'We’re happy to report our testnet is live, and can be accessed at testnet.nosana.io'
        },
        {
          question: 'Will there be an airdrop?',
          answer:
            'Yes, as part of our Incentivized Testnet program. Selected open source projects who run pipelines in our testnet will be able to join our airdrop.'
        },
        {
          question: 'Why stake NOS tokens with the Mainnet release?',
          answer:
            'By staking you’ll become a verified node. Run a pipeline. Earn NOS. Testing nodes, run pipelines, verifying the coding of projects through our CI/CD network. By staking NOS tokens we secure the network from false nodes. Staking will have other benefits as well. More info will be provided later.'
        },
        {
          question: 'How to earn NOS tokens with the Mainnet release?',
          answer:
            'It’s simple: just open the app, no further technological knowledge is required. You can run the app on a range of devices like your home computer, a Raspberry PI, and eventually your phone.'
        },
        {
          question: 'What is the token address?',
          answer:
            'The token address is nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7. NOS is an SPL token on the Solana network. Be aware of scammers! You can find the most up-to-date information on our <a target="_blank" href="https://docs.nosana.io/tokenomics/metrics.html#token-distribution">token page</a>.'
        },
        {
          question: 'How can I contact the team?',
          answer:
            'You can reach us at <a href="mailto:team@nosana.io">team@nosana.io</a>'
        },
        {
          question: 'What wallet can I use for NOS tokens?',
          answer:
            'For the majority of users, we recommend using one of the <a href="https://docs.solana.com/wallet-guide/apps" target="_blank">app wallets</a> or a browser-based <a href="https://docs.solana.com/wallet-guide/web-wallets" target="_blank">web wallet</a>, which will provide a more familiar user experience rather than needing to learn command-line tools.'
        },
        {
          question: 'What is the minimum buy-in?',
          answer:
            'Thanks for your interest in our project. The Seed round and private round are closed'
        },
        {
          question: 'What is the total supply of tokens?',
          answer: 'Total supply: 100,000,000 NOS'
        }
      ]
    };
  },
  computed: {
    filteredFaqs () {
      if (this.search !== null) {
        return this.faqs.filter(faq => (
          faq.question.toLowerCase().includes(this.search.toLowerCase()) ||
            faq.answer.toLowerCase().includes()
        ));
      }
      return this.faqs;
    }
  }
};
</script>

<style lang="scss" scoped>
.faq-header {
  background-image: url("~assets/img/faq.png");
}
.half-circle {
  background-image: url("~assets/img/half-circle.svg");
  background-position: bottom center;
}
</style>
