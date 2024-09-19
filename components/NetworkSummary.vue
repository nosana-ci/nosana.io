<template>
  <div class="columns is-multiline">
    <div class="is-3 column" data-aos="fade-in">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          Stakers
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          {{ numberOfStakers ? numberOfStakers : "..." }}
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          USD value staked
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          ...
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in" data-aos-delay="100">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          NOS Marketcap
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          ${{ marketCap ? marketCap.toLocaleString() : "..." }}
        </h4>
      </div>
    </div>
    <div class="is-3 column" data-aos="fade-in" data-aos-delay="200">
      <div class="has-background-white p-5">
        <div class="has-text-grey-light mt-1">
          NOS Price
        </div>
        <h4 class="title is-2 pt-2 is-flex mb-1">
          ${{ nosPrice ? nosPrice.toFixed(2) : "..." }}
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  colorMode: 'light',
  data () {
    return {
      marketCap: null,
      nosPrice: null,
      numberOfStakers: null
    };
  },
  mounted () {
    this.getNosPrice();
    this.getNosMarketCap();
    this.getNosStakers();
  },
  methods: {
    async getNosPrice () {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=nosana&vs_currencies=usd'
        );
        this.nosPrice = (await response.json()).nosana.usd;
      } catch (error) {
        console.error(error);
      }
    },
    async getNosMarketCap () {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/nosana'
        );
        this.marketCap = (await response.json()).market_data.market_cap.usd;
      } catch (error) {
        console.error(error);
      }
    },
    async getNosStakers () {
      try {
        const response = await fetch(
          'https://backend.k8s.prd.nos.ci/stake/leaderboards'
        );
        this.numberOfStakers = (await response.json()).stakes.pagination.total;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
