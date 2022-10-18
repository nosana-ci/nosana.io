<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns mt-5">
          <div class="column is-6" data-aos="fade-up">
            <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
              Welcome to the first Burner Phones Festival!
            </h1>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                What could be the first of many to come.
                During the 20-day event we're giving away daily prizes to our NFT holders!
                With around 50 Burner Phones available with the first initial drop,
                the chance to win one of our prizes is insanely high
              </p>
              <p class="block">
                <a
                  class="button is-accent is-outlined is-wide"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered mb-6">
            <div>
              <img src="~assets/img/festival/bpf.png">
            </div>
          </div>
        </div>
        <div class="box p-6 has-border-accent mt-6">
          <div class="is-pulled-right">
            <span>Results every day</span>
            <div class="is-flex">
              <p class="mr-3">
                <span class="is-size-7">Prize</span><br>
                <span class="has-text-accent">
                  <b>10:00</b> CET
                </span>
              </p>
              <p>
                <span class="is-size-7">Winner</span><br>
                <span class="has-text-accent">
                  <b>20:00</b> CET
                </span>
              </p>
            </div>
          </div>
          <h1 class="title">
            Lootbox Drop incoming!
          </h1>
          <p class="has-limited-width-small">
            Wait for that call with our droplocation to come in. We have four different drops during the festival.
            The price of the day will be shared every morning at 10:00 CET.
            The winner will be published around 20:00 CET.
          </p>
          <div class="columns lootboxes mt-5">
            <div class="column is-3 has-text-centered">
              <img src="~assets/img/festival/lootbox-regular.png">
              <span>Regular drop</span>
            </div>
            <div class="column is-3 has-text-centered">
              <img src="~assets/img/festival/lootbox-nos.png">
              <span>NOS drop</span>
            </div>
            <div class="column is-3 has-text-centered">
              <img src="~assets/img/festival/lootbox-rare.png">
              <span>Rare drop</span>
            </div>
            <div class="column is-3 has-text-centered">
              <img src="~assets/img/festival/lootbox-nos.png">
              <span>Special drop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
};
</script>

<style lang="scss" scoped>
.lootboxes {
  img {
    max-width: 100%;
  }
}
</style>
