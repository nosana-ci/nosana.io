<template>
  <div class="p-3">
    <h2 class="title is-3 mb-6">
      See how much you can earn with Nosana?
    </h2>
    <div class="columns">
      <!-- Input Section -->
      <div class="column is-half">
        <div class="field is-fullwidth mb-6">
          <label class="label">What <b>GPU type</b> you have?</label>
          <div class="control is-fullwidth" v-if="gpuPrices">
            <div class="select is-fullwidth">
              <select v-model="selectedGpu">
                <option
                  v-for="(price, gpu) in gpuPrices"
                  :key="gpu"
                  :value="gpu"
                >
                  {{ gpu }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">How many <b>available hours</b> do you have per month?</label>
          <div class="control">
            <input
              v-model="availableHours"
              class="slider"
              type="range"
              min="0"
              max="744"
            >
          </div>
          <p>{{ availableHours }} hours</p>
        </div>

        <div>
          <h2 class="title is-3 mt-6">
            Hardware requirements
          </h2>
          <p>
            Nosana empowers anyone with spare compute resources to contribute their idle processing power to
            our network. To participate, you'll need:
            <ul class="mt-4 ml-3">
              <li>Minimum internet connection: 100MB/s download and 50MB/s upload</li>
              <li>RAM: 12GB+</li>
              <li>Storage: 256GB+ SSD</li>
              <li>One of the following NVIDIA GPUs: todo see list</li>
            </ul>
          </p>
        </div>
      </div>

      <!-- Results Section -->
      <div class="column is-half">
        <div class="box has-background-black has-text-white">
          <div class="is-flex is-align-items-center mb-4">
            <p>Estimated price with</p>
            <img
              class="ml-2"
              style="width: 120px"
              src="~assets/img/Nosana_Logo_horizontal_color_white.svg"
              alt="Nosana"
            >
          </div>
          <div>
            <div class="pt-2">
              <h4 class="title is-2 has-text-white" style="line-height: 28px">
                <span v-if="nosEarnings">
                  {{ nosEarnings.toFixed(2) }}
                </span>
                <span v-else>...</span>
              </h4>
            </div>
            <div class="pt-2 mb-3">
              <h4 class="title is-5 has-text-grey-lighter" style="line-height: 28px">
                $
                <span v-if="earnings">
                  {{ earnings.toFixed(2) }}
                </span>
                <span v-else>...</span>
                / month
              </h4>
            </div>
          </div>
          <a
            href="https://docs.nosana.com/hosts/grid.html"
            target="_blank"
            class="button is-white is-medium is-fullwidth mt-6"
          >
            Connect now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nosPrice: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      gpuPrices: null,
      selectedGpu: 'NVIDIA GeForce RTX 4090',
      availableHours: 0
    };
  },
  computed: {
    earnings () {
      if (this.gpuPrices && this.gpuPrices[this.selectedGpu]) {
        return this.gpuPrices[this.selectedGpu] * this.availableHours;
      } else {
        return null;
      }
    },
    nosEarnings () {
      if (this.gpuPrices && this.gpuPrices[this.selectedGpu]) {
        return (this.gpuPrices[this.selectedGpu] * this.availableHours) / this.nosPrice;
      } else {
        return null;
      }
    }
  },
  mounted () {
    this.getMarkets();
  },
  methods: {
    async getMarkets () {
      try {
        const response = await fetch(
          'https://dashboard.k8s.prd.nos.ci/api/markets/?marketType=PREMIUM'
        );
        const data = await response.json();
        const excludeMarkets = [
          'columbia-uni-4090',
          'sogni-4090',
          'alpha-4090',
          'nvidia-8x-a5000'
        ];
        const markets = data.filter(
          market =>
            !excludeMarkets.includes(market.slug) && market.type === 'PREMIUM' && !market.slug.includes('laptop')
        );

        const pricePerGpu = {};
        markets.forEach((market) => {
          if (market.gpu_types && market.gpu_types.length) {
            market.gpu_types.forEach((gpu) => {
              pricePerGpu[gpu] = market.usd_reward_per_hour;
            });
          }
        });
        this.gpuPrices = pricePerGpu;
        console.log('this.gpuPrices', this.gpuPrices);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
</style>
