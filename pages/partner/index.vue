<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns mt-6">
          <div class="column is-5" data-aos="fade-up">
            <h1 class="title site-title is-spaced">
              Nosana Partner Program
            </h1>
            <h2 class="subtitle">
              Join our growing community!<br>
              Be part of the Nosana Network.
            </h2>
            <div class="has-limited-width mt-4">
              <p class="block">
                <a
                  href="https://forms.gle/W7aXsha5SVDuahuaA"
                  target="_blank"
                  class="button is-accent is-wide"
                >
                  <b>Become a partner</b>
                </a>
              </p>
            </div>
          </div>
          <div class="column has-text-centered">
            <div>
              <img src="~assets/img/partners/partner.svg">
            </div>
          </div>
        </div>
        <div class="my-6 py-6 has-text-centered">
          <h2 class="title mb-6" data-aos="fade-right">
            A new opportunity to<br>grow your customer base
          </h2>
          <div class="columns is-variable is-8">
            <div class="column is-one-third" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/icons/chat-group.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                Reach out to the crypto community with our go-to-market initiatives.
              </p>
            </div>
            <div class="column is-one-third" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/icons/chat.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                Build your expertise in continuous integration and delivery with technical support from Nosana.
              </p>
            </div>
            <div class="column is-one-third" data-aos="fade-up" data-aos-delay="600">
              <img src="~assets/img/icons/devops.svg" height="80">
              <p class="has-limited-width-smaller is-horizontal-centered">
                Work with Nosana to help your clients achieve new levels of DevOps maturity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section has-background-gradient my-5">
      <div class="container">
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              <span class="has-text-accent">Technology</span> Partners
            </h2>
            <p class="block">
              Make it easy for your customers to integrate your tools with their CI/CD pipeline,
              and get extra exposure to other Nosana customers as we automate their DevOps processes.
              Be part of our growing network of partner companies.
            </p>
            <p class="block">
              <a href="https://forms.gle/W7aXsha5SVDuahuaA" target="_blank" class="mt-4 is-underlined"><b>Become a Technology Partner &nbsp;&nbsp;↘</b></a>
              <nuxt-link to="/partner/technology" class="mt-4 ml-6 is-underlined">
                <b>More info &nbsp;&nbsp;↘</b>
              </nuxt-link>
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/partners/technology.svg">
          </div>
        </div>
      </div>
    </div>
    <div class="section has-background-gradient my-5">
      <div class="container">
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="zoom-in">
            <img src="~assets/img/partners/network.svg">
          </div>
          <div class="column is-offset-2 is-5" data-aos="fade-left">
            <h2 class="title is-2">
              <span class="has-text-accent">Network</span> Partners
            </h2>
            <p class="block">
              Open up new dev opportunities for your company by partnering with the first
              decentralized CICD as a Service provider. Improve the level of automation,
              quality of software, developer experience, and the frequency of delivery
              with our tailor-made pipelines. Network Partners need to have open-source
              & public repositories.
            </p>
            <p class="block">
              <a href="https://forms.gle/W7aXsha5SVDuahuaA" target="_blank" class="mt-4 is-underlined"><b>Become a Network Partner &nbsp;&nbsp;↘</b></a>
              <nuxt-link to="/partner/network" class="mt-4 ml-6 is-underlined">
                <b>More info &nbsp;&nbsp;↘</b>
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section has-background-gradient my-5">
      <div class="container">
        <div class="columns py-6 is-vcentered">
          <div class="column is-5 " data-aos="fade-right">
            <h2 class="title is-2">
              <span class="has-text-accent">Portfolio</span> Partners
            </h2>
            <p class="block">
              The Nosana Portfolio program allows VCs and accelerators to offer Nosana as an
              exclusive benefit to startups in their ecosystem.
            </p>
            <p class="block">
              <a href="https://forms.gle/W7aXsha5SVDuahuaA" target="_blank" class="mt-4 is-underlined"><b>Become a Portfolio Partner &nbsp;&nbsp;↘</b></a>
              <nuxt-link to="/partner/portfolio" class="mt-4 ml-6 is-underlined">
                <b>More info &nbsp;&nbsp;↘</b>
              </nuxt-link>
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/partners/portfolio.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
};
</script>

<style lang="scss" scoped>
</style>
