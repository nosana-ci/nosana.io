<template>
  <div>
    <div class="hero has-radius mt-5">
      <div class="hero-body container has-text-centered" style="width: 100%">
        <h4 class="subtitle is-5">
          Backed by
        </h4>
        <div class="columns is-vcentered mt-4">
          <div class="column is-2" />
          <div class="column">
            <div>
              <img
                width="160px"
                max-width="200px"
                height="64px"
                max-height="80px"
                contain
                class="ma-2 greyscale-false"
                :src="require('@/assets/img/partners/solana-foundation.svg')"
              >
            </div>
          </div>
          <div class="column">
            <div>
              <img
                width="160px"
                max-width="200px"
                height="64px"
                max-height="80px"
                contain
                class="ma-2 greyscale-false"
                :src="require('@/assets/img/partners/SolaniumVenturesWhiteWide.svg') "
              >
            </div>
          </div>
          <div class="column is-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.greyscale {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: 0.1s;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
}
</style>
