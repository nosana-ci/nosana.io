<template>
  <div>
    <div class="field">
      <label class="label">Add NOS:</label>
      <div class="control columns is-variable is-5 mb-5 is-multiline">
        <div
          class="is-flex is-align-items-center column"
          style="min-width: 200px"
        >
          <input
            v-model="amount"
            class="input is-medium"
            required
            min="1"
            :max="balance"
            step="0.1"
            type="number"
            placeholder="0"
          >
          <span class="ml-2 has-text-grey">NOS</span>
        </div>
        <div class="column is-narrow">
          <div class="buttons is-centered">
            <a
              class="button is-primary is-outlined mr-2"
              :disabled="balance === null ? true : null"
              @click="
                balance !== null ? (amount = parseInt(balance / 2)) : null
              "
            >
              HALF
            </a>
            <a
              class="button is-primary is-outlined"
              :disabled="balance === null ? true : null"
              @click="balance !== null ? (amount = balance) : null"
            >
              MAX
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Unstake period of:</label>
      <div class="control columns is-variable is-5 mb-5 is-multiline">
        <div class="is-flex is-align-items-center column is-narrow">
          <input
            v-model="unstakeDays"
            required
            class="input has-text-centered is-medium"
            type="number"
            :min="unstakeDays"
            step="1"
            :max="365"
            placeholder="0"
          >
          <span class="ml-2 has-text-grey">Days</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <h3 class="title is-2">
            Staking calculator
          </h3>
          <h4 class="title is-3">
            Stake NOS and receive rewards
          </h4>
          <p class="mb-5 is-size-4">
            By staking $NOS tokens, you not only contribute to the security and
            stability of the network but also earn rewards for your
            participation. Join the staking pool today and be part of the
            decentralized computing revolution with Nosana.
          </p>
          <a
            href="https://app.nosana.io/stake/"
            target="_blank"
            class="has-text-accent has-text-weight-semibold"
          >
            Go to Staking Dashboard<i class="pl-1 fas fa-chevron-right" />
          </a>
        </div>
        <div class="column is-8">
          <div v-if="!activeStake" class="columns">
            <div class="column is-6">
              <div class="box">
                <label class="label">Expected daily NOS rewards</label>
                <div class="is-size-1 has-text-black">
                  <ICountUp
                    v-if="expectedRewards !== null"
                    :end-val="Number(expectedRewards)"
                  />
                  <span v-else>-</span>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="box">
                <label class="label">Staked NOS</label>
                <div class="is-size-1 has-text-black">
                  <ICountUp v-if="amount !== null" :end-val="amount" />
                  <span v-else>-</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!activeStake" class="columns">
            <div class="column is-4">
              <div class="box">
                <label class="label">xNOS Score</label>
                <div class="is-size-2 has-text-black">
                  <ICountUp v-if="xNOS !== null" :end-val="xNOS" />
                  <span v-else>-</span>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="box">
                <label class="label">Multiplier</label>
                <div class="is-size-2 has-text-black">
                  <ICountUp :end-val="multiplier" :decimal-places="2">
                    <template #prefix>
                      <span>x</span>
                    </template>
                  </ICountUp>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="box">
                <label class="label">APY</label>
                <div class="is-size-2 has-text-black">
                  <ICountUp
                    v-if="APY !== null"
                    :end-val="APY"
                    :decimal-places="1"
                  >
                    <template #suffix>
                      <span>%</span>
                    </template>
                  </ICountUp>
                  <span v-else>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Client } from '@nosana/sdk';
import ICountUp from 'vue-countup-v2';
const SECONDS_PER_DAY = 24 * 60 * 60;

const nosana = new Client({
  solana: {
    network: 'mainnet'
  }
});

export default {
  components: {
    ICountUp
  },
  data () {
    return {
      poolInfo: null,
      amount: null,
      unstakeDays: 14,
      stakeTotals: null
    };
  },
  computed: {
    multiplier () {
      const unstakeTime = this.unstakeDays * SECONDS_PER_DAY;
      const multiplierSeconds = (SECONDS_PER_DAY * 365) / 3; // 4 months
      const multiplier = unstakeTime / multiplierSeconds;
      return multiplier + 1;
    },
    xnos () {
      const formAmount = this.amount ? this.amount : 0;
      return formAmount * this.multiplier;
    },
    APY () {
      if (this.expectedRewards) {
        const apy =
          ((this.expectedRewards * 365) / (this.amount ? this.amount : 0)) *
          100;
        return apy;
      }
      return null;
    },
    expectedRewards () {
      if (!this.stakeTotals || !this.poolInfo) {
        return null;
      }
      let totalXnos = parseFloat(this.stakeTotals.xnos);
      if (this.activeStake.value && this.activeStake.value.amount) {
        totalXnos -= this.activeStake.amount;
      }
      return (
        ((this.xNOS * 1e6) / (totalXnos + this.xNOS * 1e6)) *
        ((this.poolInfo.emission.toNumber() / 1e6) * 60 * 60 * 24)
      );
    }
  },
  mounted () {
    this.getRewardsAndPoolInfo();
    this.getStakeTotals();
  },
  methods: {
    async getStakeTotals () {
      try {
        const response = await fetch(
          'https://backend.k8s.prd.nos.ci/stake/totals'
        );
        this.stakeTotals = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async getRewardsAndPoolInfo () {
      try {
        this.poolInfo = await nosana.value.stake.getPoolInfo();
        console.log('poolInfo', this.poolInfo);
      } catch (e) {
        console.error('cant fetch rewards info', e);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.stake-block {
  border-radius: 4px;
  height: 100%;
}

.unstaked {
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.tabs ul {
  border-bottom-width: 0px;
  li {
    width: 50%;
    font-size: 18px;
    a {
      margin-bottom: 0;
    }
    &.is-active {
      background-color: transparent !important;
    }
    &.is-inactive {
      opacity: .4;
      a {
        cursor: not-allowed;
        &:hover {
          color: $text;
        }
      }
    }
  }
}

.scores {
  min-width: fit-content;
  h2 {
    font-family: $family-sans-serif;
  }
  p {
    font-size: 14px;
  }
  .box {
    border: none;
  }
}
@media only screen and (max-width: 1618px) {
  .first-stake {
    > div {
      display:flex;
      justify-content: center;
      flex-wrap:wrap;
      align-items: center;
      .box {
        margin: 5px 10px !important;
      }
    }
  }
}

.balances {
  .balance {
    border-left: 1px solid $grey-dark;
  }
}

form {
  button {
    width: 100%;
  }
  .column .has-background-grey-lighter {
    height: 100%;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  input[type="number"] {
      -moz-appearance: textfield;
  }
  .buttons button {
    width: 45px;
    height: 22px;
  }
  .amount-logo {
    border-right: 1px solid $grey-darker;
  }
}
</style>
