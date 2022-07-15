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
              style="min-height: 280px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Decentralized Marketplace
              </h3>
              <p class="block">
                Nosana Network is a peer-to-peer marketplace for CPU computations.
                Big tech companies run millions of CI/CD pipelines every day.
                With Nosana, we’re offering a more affordable,
                more accessible, and more sustainable alternative to centralized cloud solutions.
                How? By putting the spare capacity of the masses to work.
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
              style="min-height: 280px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Better for the planet
              </h3>
              <p class="block">
                The computational needs of our tech-driven world are hard on our planet.
                Computational resources are used inefficiently, causing even more problems. We use what’s already there.
                Our decentralized cloud solution is powered by spare computing resources.
                Much better for the environment.
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
              style="min-height: 280px"
            >
              <h3 class="subtitle is-6 has-text-accent mt-2">
                Opportunities for everyone
              </h3>
              <p class="block">
                With Nosana, we’re creating opportunities for everyone.
                That includes people with lower incomes or those from developing countries.
                For example, charities could donate unused devices to help families generate income.
              </p>
            </div>
          </atropos>
        </div>
      </div>
    </div>
  </section>
</template>
