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
                The Nosana Network is a peer-to-peer marketplace for CPU computations. CI/CD pipelines
                are run daily by large tech companies in the millions. In contrast to centralized cloud
                solutions, Nosana is more affordable, more accessible, and a more sustainable alternative.
                How? By putting idle/surplus CPU into action!
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
                Better for the Planet
              </h3>
              <p class="block">
                Our planet is struggling to meet the computational demands of our tech-driven society.
                The inefficient use of computational resources makes things worse. Our decentralized
                cloud solution is powered by currently available but underutilized computing resources,
                making it a more eco-friendly alternative.
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
                Digital Inclusion
              </h3>
              <p class="block">
                With the adoption of digital technologies across most sectors of society, 
                and the increasing demand of computational services, the Nosana Network 
                provides a path for anyone, no matter their status in the world,
                to provide CPU capacity. 
                Nosana believes that technological innovations should be accessible to 
                all because of the implications they have for sustained economic development.
              </p>
            </div>
          </atropos>
        </div>
      </div>
    </div>
  </section>
</template>
