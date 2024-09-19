<template>
  <div>
    <section class="section intro">
      <BackgroundParallax />
      <div class="container">
        <div class="columns is-centered mt-6 mt-mobile-0">
          <div
            class="column is-8 pt-6 has-text-centered has-background-black-blur-false has-text-white"
          >
            <h1 class="title pt-6 is-spaced site-title has-text-white">
              About the Nosana team
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                We’re made up of very different people, but we all have a strong
                technical background in blockchain and infrastructure
                engineering. And we’re united by our drive for disruption. Using
                decentralized technologies, we’re making cloud computing a safer
                place where people are free from the clutches of Big Tech
                corporations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <h2 class="title pt-6 site-title mb-0">
          Meet the Minds Behind Nosana:<br>
          Driving Innovation, Empowering<br>
          Global Computing.
        </h2>
        <div class="columns mt-6 pt-6">
          <div class="column is-6" data-aos="fade-right">
            <h3 class="title is-2">
              About us
            </h3>
            <h4 class="title is-3">
              Driven by a passion for revolutionizing the world of computing
            </h4>
            <p class="mb-5 is-4 is-size-4">
              With a dedication to decentralization, innovation and efficiency,
              we've created a platform that unlocks the latent power of idle
              GPUs worldwide. Our decentralized GPU grid, powered by Solana and
              the $NOS token, offers cost-effective access to computational
              resources while providing opportunities for individuals,
              businesses, and miners to monetize their hardware.
            </p>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <h3 class="title is-2">
              The team
            </h3>
            <h4 class="title is-3">
              Meet the Brilliant Minds Fueling Nosana's Vision
            </h4>
            <p class="mb-5 is-size-4">
              Our diverse team is united by a shared commitment to innovation
              and excellence. With expertise spanning blockchain technology, AI,
              and decentralized computing, passionate about pushing the
              boundaries of what's possible. Together, we're driving forward the
              evolution of computing, empowering individuals and businesses
              worldwide. Get to know the people behind Nosana and
              <a
                href="https://www.linkedin.com/company/nosana/jobs/"
                target="_blank"
              >join us</a>
              on our journey to reshape the future of computing.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section py-6 has-background-black">
      <div class="container">
        <h4 class="title is-3 my-6 has-text-white">
          Get Closer, Discover Deeper, Explore the Heart of Nosana
        </h4>
        <div class="columns has-text-white mb-6">
          <div class="column is-6" data-aos="fade-right">
            <img
              src="~assets/img/team/team-sjoerd.jpeg"
              class="mb-5 has-radius"
            >
            <h3 class="title is-3 has-text-white mb-3">
              Sjoerd <br><span class="has-text-weight-light">CEO</span>
            </h3>
            <p class="mb-5 is-4 is-size-5">
              Our code guru. C++, Kubernetes, Rust, Python. You name it, he
              knows it. 10+ years in crypto and corporate industry with
              experience developing funded companies at executive level
              leadership roles.
            </p>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img
              src="~assets/img/team/team-jesse.jpg"
              class="mb-5 has-radius"
            >
            <h3 class="title is-3 has-text-white mb-3">
              Jesse <br><span class="has-text-weight-light">CTO</span>
            </h3>
            <p class="mb-5 is-4 is-size-5">
              Our blockchain expert. 10+ years in the crypto industry with
              experience developing funded companies at executive level
              leadership roles. Studied A.I. at Amsterdam University. Passion
              for a decentralized world.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6">
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h3 class="title is-2">
              Work from anywhere
            </h3>
            <h4 class="title is-3">
              A global network of people
            </h4>
            <p class="mb-5 is-4 is-size-4">
              Development is a round-the-clock job. With our team working from
              different time zones, there’s always Nosana people building,
              iterating, and innovating. But even more importantly, this allows
              for a healthier work-life balance.
            </p>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <h3 class="title is-2">
              Who we're looking for
            </h3>
            <h4 class="title is-3">
              Meet the Brilliant Minds Fueling Nosana's Vision
            </h4>
            <p class="mb-5 is-size-4">
              Developers, marketers, content creators, community moderators,
              designers: we’d love to have you. And if your title isn’t on that
              list but you’re passionate about our mission: we’d love to have
              you as well!
            </p>
            <a
              href="https://www.linkedin.com/company/nosana/jobs/"
              target="_blank"
              class="has-text-accent has-text-weight-semibold"
            >
              Open application<i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BackgroundParallax from '../components/BackgroundParallax.vue';
export default {
  colorMode: 'light',
  components: { BackgroundParallax }
};
</script>

<style lang="scss" scoped>

.bg-scroll {
  background-image: url("~assets/img/team/bg.svg");
}
@media screen and (max-width: $tablet) {
  .columns.mt-6, .columns.my-6 {
    margin-top: 0 !important;
  }
}
</style>
