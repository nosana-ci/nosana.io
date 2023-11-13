<template>
  <div>
    <a v-for="exchange in exchanges" :key="exchange.link" :href="exchange.link" target="_blank" class="mx-4">
      <img :src="exchange.image" style="height: 50px">
    </a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      exchanges: [
        {
          link: 'https://www.gate.io/trade/NOS_USDT',
          image: require('@/assets/img/exchanges/gate.svg')
        },
        {
          link: 'https://www.mexc.com/exchange/NOS_USDT',
          image: require('@/assets/img/exchanges/mexc.svg')
        },
        {
          link: 'https://raydium.io/swap/',
          image: require('@/assets/img/exchanges/raydium.svg')
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
a:first-child {
  margin-left: 0 !important;
}
</style>
