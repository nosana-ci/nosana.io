<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" style="width: 800px">
          Become a <span class="has-text-accent">Network</span> Partner
        </h1>
        <div class="columns mt-6">
          <div class="column is-7" data-aos="fade-up">
            <h2 class="subtitle">
              Make the most out of your development.
            </h2>
            <div class="has-limited-width-small mt-4">
              <p class="block">
                As a service provider, partnering with the first decentralized CICD network will allow
                your business to grow. Make it easier for your team to provide high-quality software
                on a regular basis using custom pipelines. For Network Partners, open-source and
                public repositories are a requirement.
              </p>
              <p class="block">
                <a
                  href="#"
                  target="_blank"
                  class="mr-3 button is-accent is-wide"
                >
                  <b>Become a partner</b>
                </a>

                <nuxt-link
                  to="/partner"
                  class="button is-accent is-outlined is-wide"
                >
                  <b>See partner overiew</b>
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="column has-text-centered">
            <div>
              <img src="~assets/img/partners/network.svg" style="width: 100%;">
            </div>
          </div>
        </div>
        <div class="my-6 py-6 has-text-centered has-background-gradient">
          <h2 class="title mb-6" data-aos="fade-right">
            Transition from the cloud to the crowd
          </h2>
          <p class="has-limited-width is-horizontal-centered" data-aos="fade-up">
            Our decentralized network aids at every stage of growth.
            Software delivery pipelines can be run on-demand thanks to the availability of
            compute capacity that developers and contributors can pool and share.
          </p>
          <div class="has-background-accent is-horizontal-centered my-5" style="width: 80px; height: 2px" />
        </div>
        <div class="my-6 py-6">
          <h1 class="title is-2 has-text-centered">
            Software development<br>is difficult.
          </h1>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-spaced is-2">
              Hiring is challenging
            </h2>
            <h3 class="subtitle">
              It's difficult to find qualified candidates to fill open positions.
              Locating the proper kind of experience isn't simple.
            </h3>
            <p class="block">
              Using the best DevOps engineers in the business, we build custom pipelines to suit your needs.
              Due to the low amount of rework and time spent due to our high standards,
              development teams are able to reach more critical milestones and save money.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/partners/technology-graph.svg">
          </div>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="zoom-in">
            <img src="~assets/img/partners/devops.svg">
          </div>
          <div class="column is-offset-2 is-5" data-aos="fade-left">
            <h2 class="title is-=spaced is-2">
              No in-house DevOps
            </h2>
            <h3 class="subtitle has-limited-width-small">
              Prioritizing strategic outcomes is important to you.
            </h3>
            <p class="block">
              DevOps services can be difficult, expensive, and inefficient to deliver throughout
              an organization if consolidation and platform efficiencies are not taken into account.
              When you work with us, you don't have to worry about adding permanent workers to a project team.
            </p>
          </div>
        </div>
        <div class="columns pt-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-spaced is-2">
              Blocked Developers
            </h2>
            <h3 class="subtitle">
              Developing, testing, and deploying software may be a time-consuming and unstable process.
            </h3>
            <p class="block">
              Our goal is to free your developers.
              Blocked development is expensive, delays projects, and adds to technological debt.
              Everyday support and the curation and building of solid development pipelines are all
              that is needed to get the most out of your software development.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/partners/technology-computer.svg">
          </div>
        </div>
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title mb-6 is-2" data-aos="fade-right">
            Advantages for Network Partners
          </h2>
          <div class="columns is-variable is-multiline is-centered">
            <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/icons/browser.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                Access to our Incentivized Testnet is free (earn up to 10.000 $NOS with your development)
              </p>
            </div>
            <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/icons/devops.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                DevOps as a Service. Improve the level of automation, software quality, developer experience,
                and delivery frequency without disruption. We assist you in making the most of your development.
              </p>
            </div>
            <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="600">
              <img src="~assets/img/icons/nodes.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                Higher max limit of nodes during the test period. This means higher rewards!
              </p>
            </div>
            <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/icons/chat-group.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                With multiple go-to-market strategies, you can maintain constant exposure within the Nosana community.
                Your brand can even be featured as a part of our upcoming NFT!
              </p>
            </div>
            <div class="column is-one-third mt-6" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/icons/server.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                No longer rely on Big Tech for your computational needs!
              </p>
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
</style>
