<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="has-text-centered mt-6">
          <h1 class="title is-1 is-spaced mb-6">
            <span class="has-text-accent">Staking</span> FAQ
          </h1>
        </div>
        <!-- <client-only>
          <carousel-3d
            v-if="tiers"
            ref="carousel"
            :perspective="20"
            :display="3"
            :autoplay="true"
            :width="350"
            :start-index="0"
            :height="320"
          >
            <slide
              v-for="slide in tiers"
              :key="slide.tier"
              :index="tiers.length - slide.tier"
              class="box has-background-light has-shadow-accent has-radius"
            >
              <div class="columns is-mobile">
                <div class="column is-4 is-flex is-flex-direction-column">
                  <div class="subtitle is-6 is-size-7-touch has-text-accent">
                    Tier {{ slide.tier }}
                  </div>
                  <div class="title is-5 mb-1 is-size-7-touch">
                    {{ slide.name }}
                  </div>
                  <div style="line-height: 1">
                    <span class="is-size-7">
                      <small>Top<br></small>
                      <span v-if="slide.tier === 1">{{ slide.number }}</span>
                      <span v-else>{{
                        tiers.filter(s=>s.tier !== slide.tier && s.tier < slide.tier)
                          .reduce((a, o) => a + (o.percentage ? o.percentage : 0), 0) + slide.percentage
                      }}%
                        <span v-if="slide.tier > 2">
                          - {{ tiers.filter(s=>s.tier !== slide.tier && s.tier < slide.tier)
                            .reduce((a, o) => a + (o.percentage ? o.percentage : 0), 0) }}%
                        </span>
                      </span>
                    </span>
                  </div>
                  <div
                    :class="['tier-' + slide.tier]"
                    class="has-text-accent subtitle is-6 mt-auto is-size-7-touch has-border-accent p-1 has-radius"
                  >
                    <span v-if="slide.tier === 1">
                      <b>Guaranteed</b><br>NFT mint token
                    </span>
                    <span v-else-if="slide.tier === 2">
                      <b class="title has-text-accent is-size-5-touch">15</b> Tickets
                    </span>
                    <span v-else-if="slide.tier === 3">
                      <b class="title has-text-accent is-size-5-touch">6</b> Tickets
                    </span>
                    <span v-else-if="slide.tier === 4">
                      <b class="title has-text-accent is-size-5-touch">3</b> Tickets
                    </span>
                    <span v-else-if="slide.tier === 5">
                      <b class="title has-text-accent is-size-5-touch">1</b> Ticket
                    </span>
                  </div>
                </div>
                <div class="column is-8 tier-image">
                  <img :src="require(`@/assets/img/tiers/tier${slide.tier}.svg`)">
                </div>
              </div>
            </slide>
          </carousel-3d>
        </client-only> -->
        <div class="column is-8 is-horizontal-centered">
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
        <div class="has-text-centered mt-6">
          <h1 class="title is-1 is-spaced">
            <span class="has-text-accent">xNOS</span> Calculator
          </h1>
          <h2 class="subtitle has-limited-width is-horizontal-centered" data-aos="fade-up">
            Calculate your xNOS depending on the amount of tokens staked and your unstake period.
          </h2>
        </div>
        <div class="columns is-centered mt-6 ">
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
                      <p>xNOS Score</p>
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
                      <p>Multiplier</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="https://app.nosana.io/stake"
                  target="_blank"
                  class="my-5 button is-accent is-wide is-large"
                >
                  <b>Stake now</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- <div>
          <div class="columns py-6 is-vcentered mt-6">
            <div class="column is-5" data-aos="fade-left">
              <h2 class="title is-2">
                Stake to get access to our NFT collection
              </h2>
              <p class="block">
                Want in on our Burner Phone seasonal NFT mints? Then stake your coins!
                By doing so, you’ll get a chance to win Burner Phones with network-specific utilities.
                Our Burner Phone NFTs have 4 guaranteed seasonal drops per year.
                If you stake your tokens for at least 4 months, you’ll get access to at least 1 NFT drop.
              </p>
              <p class="block">
                <nuxt-link to="/nft" class="mt-4 is-underlined">
                  <b>More about NFTs &nbsp;&nbsp;↘</b>
                </nuxt-link>
              </p>
            </div>
            <div class="column is-5 is-offset-2" data-aos="zoom-in">
              <img src="~assets/img/burner-phone-logo.png">
            </div>
          </div>
        </div> -->
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
  colorMode: 'dark',
  data () {
    return {
      amount: 1500,
      days: 100,
      tiers: [
        {
          number: 20,
          name: 'Bionic Kraken',
          tier: 1,
          requiredXNOS: 0
        },
        {
          percentage: 20,
          name: 'Bionic Dragons',
          tier: 2,
          requiredXNOS: 0
        },
        {
          percentage: 20,
          name: 'Bionic Whales',
          tier: 3,
          requiredXNOS: 0
        },
        {
          percentage: 20,
          name: 'Bionic Sharks',
          tier: 4,
          requiredXNOS: 0
        },
        {
          percentage: 40,
          name: 'Bionic Bulls',
          tier: 5,
          requiredXNOS: 0
        }
      ],
      faqs: [
        { question: 'How do I stake my NOS tokens?', answer: '- Get started by going to: <a href="https://app.nosana.io/stake/" target="_blank">https://app.nosana.io/stake/</a><br> - Connect your Solana Wallet<br> - Define how much you want to stake and the duration of your unstake period <br>- Sign the transaction<br><br> Now you are all set! You can claim the staking rewards anytime you want.' },
        { question: 'Are my staked NOS tokens safe?', answer: 'Your NOS tokens are safe in your smart contract vault on the Solana Blockchain. The Nosana Staking Program is open source and audited, so nobody can access your staked tokens except for you! You can see your staked tokens on the Solana Blockchain.' },
        { question: 'What is the APY?', answer: 'The APY is dynamic, the more $NOS is staked in total, the lower the APY will be and vice versa. You can find the current APY at: <a href="https://app.nosana.io/stake/" target="_blank">https://app.nosana.io/stake/</a>' },
        { question: 'What is the xNOS score?', answer: 'Your xNOS score is determined by the amount of staked tokens and the chosen unstake period. The more tokens and/or unstake period, the higher the xNOS score. For a detailed explanation on how xNOS is calculated see: <a target="_blank" href="https://docs.nosana.io/protocols/staking.html#xnos-calculation">https://docs.nosana.io/protocols/staking.html#xnos-calculation</a>' },
        { question: 'What are the perks that come with xNOS score?', answer: 'A higher xNOS score means you get a bigger piece of the daily $NOS rewards.' },
        { question: 'How does the unstake period work?', answer: 'When you unstake, your previously staked tokens will be released linearly through your unstake period. Every second some of your tokens are released, until your unstake period ends. You can withdraw the released tokens manually through our staking platform.' },
        { question: 'What is the minimum & maximum unstake period?', answer: 'The minumum is unstake period is 14 days. The maximum unstake period is 365 days.' },
        { question: 'Will I still get rewards after I unstake?', answer: 'No. When you unstake your xNOS score will be set to 0 and you won\'t earn rewards.' },
        { question: 'Can I change the duration of the unstake period?', answer: 'Yes – but keep in mind you can only extend it, not shorten it.' },
        { question: 'Can I add more NOS tokens to my stake?', answer: 'Absolutely! You can do so anytime.' },
        { question: 'How can I earn NOS rewards?', answer: 'Staking NOS results in NOS rewards. For each transaction on the Network, we distribute 2% of network fees in proportion to your xNOS share in the network. Staking tokens lets you earn a percentage of those network fees.' },
        { question: 'I accidentally unstaked my tokens, can I restake them again? ', answer: 'Yes!' }
        // { question: 'What if I want to contribute my CPU as a node?', answer: 'In that case, you must also be staking. More information will be provided when node-support goes live.' },
        // { question: 'Stake to get access to our NFT collection', answer: 'Want in on our Burner Phone seasonal NFT mints? Then stake your coins! By doing so, you’ll get a chance to win a Burner Phone with network-specific utilities. Our Burner Phone NFTs have 4 guaranteed seasonal drops per year. If you stake your tokens for at least 3 months, you’ll get access to at least 1 NFT drop. ' },
        // { question: 'Why did my Tier change after staking?', answer: 'Your tier is based on the leaderboards, so it is dependend on the other stakers as well. The leaderboards are dynamic and can change with every new staker.' }
      ]
    };
  },
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
  }
};
</script>

<style lang="scss">
.carousel-3d-slide{
  filter: blur(2px);
  border-radius: 4px;
  &.current {
    filter: none;
  }
}
.tier-1 {
  min-width: 160px;z-index: 1;
}
.carousel-3d-container {
  padding: 50px 0;
  box-sizing: content-box !important;
}
</style>
