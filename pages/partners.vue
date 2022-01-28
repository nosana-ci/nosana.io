<template>
  <div>
    <section class="section partners-background has-background-image">
      <div class="container">
        <div class="columns">
          <div class="column is-6 mt-6">
            <h1 class="title is-1 mt-6 is-spaced">
              The future of development is now.
            </h1>
            <h2 class="subtitle mt-6">
              We're Nosana. We help your team to develop software faster, more
              cost-effective, and secure through the Nosana network.
            </h2>
            <p class="block">
              Keep your project running for eternity with Nosana, all with the
              help of (y)our community. The computations in the Metaverse should
              not require a credit card attached to your Amazon account, but
              should be provided directly by the users. We enable your project
              to move from the cloud to the crowd.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns mt-6">
          <div class="column is-6">
            <img src="~assets/img/cloud-crowd.png" />
          </div>
          <div class="column is-5 is-offset-1">
            <h1 class="subtitle is-3 mt-6">
              Move from the Cloud to the Crowd.
            </h1>
            <p>
              Our launching product is a platform for software automation
              pipelines. Developers & supporters can use and share each other’s
              compute power to execute their software delivery pipelines on
              demand. Utilizing our network helps you build a strong community
              of contributors, which is key to a project’s long-term
              sustainability. We work closely with you to make sure the power of
              (y)our crowd is utilized to its fullest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-image benefits-background">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <h1 class="subtitle is-3 mt-6">Benefits for early partnerships</h1>
            <ul>
              <li>
                Guaranteed access to our Incentivized TestNet (5 million $NOS
                tokens to be distributed)
              </li>
              <li>
                Exclusive for partnerships: higher max. limit of nodes during
                test period -> higher rewards!
              </li>
              <li>Continuous exposure within the Nosana community.</li>
              <li>
                Make your project's key contributors visible to you and let you
                build your own network of trusty nodes.
              </li>
              <li>
                A new marketing possibility: get (y)our community involved
                during development cycles (we deliver the social
                templates/package).
              </li>
              <li>No longer rely on Big Tech for your computational needs!</li>
            </ul>
          </div>
          <div
            class="
              column
              is-6
              is-offset-1
              is-flex
              is-flex-direction-column
              is-justify-content-space-between
            "
          >
            <div />
            <div style="margin-bottom: -57px">
              <img src="~assets/img/phone.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section py-6">
      <div class="container">
        <div class="has-text-centered">
          <h2 class="title">Empower your Crowd</h2>
        </div>
        <div class="columns mt-6">
          <div class="column is-one-third">
            <atropos :options="{ rotateTouch: false }">
              <div
                class="has-border-accent-light has-radius p-4"
                style="min-height: 260px"
              >
                <h3 class="subtitle is-1 has-text-accent mt-2">1</h3>
                <p class="block">
                  Reward the best contributors after each software development
                  cycle.
                </p>
              </div>
            </atropos>
          </div>
          <div class="column is-one-third">
            <atropos :options="{ rotateTouch: false }">
              <div
                class="has-border-accent-light has-radius p-4"
                style="min-height: 260px"
              >
                <h3 class="subtitle is-1 has-text-accent mt-2">2</h3>
                <p class="block">
                  Get the community involved with regular updates. Keep them
                  happy, involved & active during development cycles.
                </p>
              </div>
            </atropos>
          </div>
          <div class="column is-one-third">
            <atropos :options="{ rotateTouch: false }">
              <div
                class="has-border-accent-light has-radius p-4"
                style="min-height: 260px"
              >
                <h3 class="subtitle is-1 has-text-accent mt-2">3</h3>
                <p class="block">
                  Get your development extra exposure through (y)our channels,
                  boosting confidence that your project is moving in the right
                  direction.
                </p>
              </div>
            </atropos>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
}
</script>

<style lang="scss" scoped>
.partners-background {
  background-image: url("~assets/img/partners.png");
  min-height: 100vh;
  margin-top: -70px;
  padding-top: 100px;
}
.benefits-background {
  background-image: url("~assets/img/bg-benefits.png");
}
ul {
  margin: 20px;
  li {
    margin-bottom: 20px;
    &:before {
      content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: white; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      font-size: 14px;
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 1em; /* Also needed for space (tweak if needed) */
      margin-left: -1em; /* Also needed for space (tweak if needed) */
    }
  }
}
</style>
