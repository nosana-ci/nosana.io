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
              About Us
            </h1>
            <div class="py-2">
              <p
                class="block has-limited-width-big is-size-5"
                style="margin: 0 auto"
              >
                At Nosana, we believe in the power of decentralized computing to drive the future of AI.
                Our platform transforms idleGPU resources into a global network of on-demand compute power,
                supporting a wide range of AI applications from startups to research labs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6 pb-6">
        <h2 class="title pt-6 site-title mb-0">
          Driving Innovation, Empowering Global Computing
        </h2>
        <div class="columns mt-6 pt-6">
          <div class="column is-6" data-aos="fade-right">
            <h3 class="title is-2">
              About Nosana
            </h3>
            <h4 class="title is-3">
              Revolutionizing the World of Computing
            </h4>
            <p class="mb-5 is-4 is-size-4">
              Nosana is a peer-to-peer compute marketplace that offers on-demand GPU access for AI projects.
              It connects AI companies and developers with a global network of compute providers,
              enabling efficient and scalable computing solutions.
            </p>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <h3 class="title is-2">
              Our Vision
            </h3>
            <h4 class="title is-3">
              Redefining Access to Innovation
            </h4>
            <p class="mb-5 is-size-4">
              We envision a world where compute resources are a public utility—accessible,
              decentralized, and permissionless. We’re driven by the belief that innovation can change the
              future of computing, creating new opportunities for people and businesses everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section py-6 has-background-black">
      <div class="container">
        <h4 class="title is-3 my-6 has-text-white">
          Meet the Heart of Nosana
        </h4>
        <div class="columns has-text-white mb-6">
          <div class="column is-6" data-aos="fade-right">
            <img
              src="~assets/img/team/team-sjoerd.jpg"
              class="mb-5 has-radius"
            >
            <h3 class="title is-3 has-text-white mb-3">
              Sjoerd <br><span class="has-text-weight-light">Co-Founder</span>
            </h3>
            <p class="mb-5 is-4 is-size-5">
              Our code guru. C++, Kubernetes, Rust, Python. You name it, he
              knows it. 10+ years in crypto and corporate industry with
              experience developing funded companies at executive level
              leadership roles.
            </p>
            <a href="https://www.linkedin.com/in/sjoerd-dijkstra/" target="blank" class="has-text-accent">
              Connect <i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <img
              src="~assets/img/team/team-jesse.jpg"
              class="mb-5 has-radius"
            >
            <h3 class="title is-3 has-text-white mb-3">
              Jesse <br><span class="has-text-weight-light">Co-Founder</span>
            </h3>
            <p class="mb-5 is-4 is-size-5">
              Our blockchain expert. 10+ years in the crypto industry with
              experience developing funded companies at executive level
              leadership roles. Studied AI at Amsterdam University. Passion
              for a decentralized world.
            </p>
            <a href="https://www.linkedin.com/in/jesse-eisses-9760ab48/" target="_blank" class="has-text-accent">
              Connect <i class="pl-1 fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container mb-6">
        <div class="columns my-6 py-6">
          <div class="column is-6" data-aos="fade-right">
            <h3 class="title is-2">
              Work from Anywhere
            </h3>
            <h4 class="title is-3">
              A Global Team, Always Innovating
            </h4>
            <p class="mb-5 is-4 is-size-4">
              Nosana is a truly global network. With team members spread across multiple time zones,
              we’re constantly building and innovating around the clock. More than just making progress 24/7,
              this setup helps us maintain a healthier work-life balance for everyone on the team.
            </p>
          </div>
          <div class="column is-6" data-aos="fade-left">
            <h3 class="title is-2">
              Who We’re Looking For
            </h3>
            <h4 class="title is-3">
              Join Our Team
            </h4>
            <p class="mb-5 is-size-4">
              Developers, marketers, content creators, community moderators, designers —
              we’re always looking for passionate individuals to join our team.
              If you don’t see your role listed but believe in what we’re building, we’d love to hear from you!
            </p>
            <a
              href="https://www.linkedin.com/company/nosana/jobs/"
              target="_blank"
              class="has-text-accent has-text-weight-semibold"
            >
              Careers<i class="pl-1 fas fa-chevron-right" />
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
  background-image: url("~assets/img/bg-about.jpg");
}
@media screen and (max-width: $tablet) {
  .columns.mt-6,
  .columns.my-6 {
    margin-top: 0 !important;
  }
}
</style>
