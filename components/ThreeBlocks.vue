<template>
  <section class="section py-6">
    <div class="container">
      <div class="columns">
        <div
          class="column is-one-third"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <atropos :options="{ rotateTouch: false }">
            <div
              class="has-border-accent-light has-radius p-4"
              style="min-height: 260px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Decentralized Marketplace
              </h3>
              <p class="block">
                Tech companies are running millions of CI/CD pipelines daily to
                operate. Nosana provides a cheaper, accessible, and sustainable
                alternative for centralized cloud solutions by utilizing spare
                capacity.
              </p>
            </div>
          </atropos>
        </div>
        <div
          class="column is-one-third"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <atropos :options="{ rotateTouch: false }">
            <div
              class="has-border-accent-light has-radius p-4"
              style="min-height: 260px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Staking
              </h3>
              <p class="block">
                Anyone that has the Nosana app can run CI/CD pipelines from our
                marketplace. It’s that simple. Run the app, stake NOS tokens,
                and start earning!
              </p>
            </div>
          </atropos>
        </div>
        <div
          class="column is-one-third"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <atropos :options="{ rotateTouch: false }">
            <div
              class="has-border-accent-light has-radius p-4"
              style="min-height: 260px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Governance
              </h3>
              <p class="block">
                Nosana is the decentralized replacement for the CI/CD industry.
                Network updates and funding initiatives will be governed by a
                proposal system based on the NOS token.
              </p>
            </div>
          </atropos>
        </div>
      </div>
    </div>
  </section>
</template>
