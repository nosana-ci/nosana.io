<template>
  <div class="columns is-multiline">
    <div class="is-3 column" data-aos="fade-in">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          Stakers
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          <ICountUp
            v-if="numberOfStakers"
            :end-val="numberOfStakers"
            :options="{
              decimalPlaces: 0,
            }"
          />
          <span v-else>...</span>
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          USD value staked
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          <ICountUp
            v-if="usdStake"
            :end-val="usdStake"
            :options="{
              decimalPlaces: 0,
              prefix: '$',
            }"
          />
          <span v-else>...</span>
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in" data-aos-delay="100">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          NOS Marketcap
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          <ICountUp
            v-if="marketCap"
            :end-val="marketCap"
            :options="{
              decimalPlaces: 0,
              prefix: '$',
            }"
          />
          <span v-else>...</span>
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in" data-aos-delay="200">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          NOS Price
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          <ICountUp
            v-if="nosPrice"
            :end-val="nosPrice"
            :options="{
              decimalPlaces: 2,
              prefix: '$',
            }"
          />
          <span v-else>...</span>
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
import ICountUp from 'vue-countup-v2';
export default {
  components: { ICountUp },
  colorMode: 'light',
  data () {
    return {
      marketCap: null,
      nosPrice: null,
      numberOfStakers: null,
      usdStake: null
    };
  },
  mounted () {
    this.getStatistics();
  },
  methods: {
    async getStatistics () {
      try {
        const response = await fetch(
          'https://dashboard.k8s.prd.nos.ci/api/stats/'
        );
        const data = await response.json();
        console.log('data', data[0]);
        if (data[0]) {
          this.nosPrice = data[0].price;
          this.marketCap = data[0].marketCap;
          this.numberOfStakers = data[0].stakers;
          this.usdStake = data[0].usdValueStaked;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
