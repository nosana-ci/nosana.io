<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns mt-6">
          <div class="column is-5" data-aos="fade-up">
            <h1 class="title site-title is-spaced">
              Are you ready to level up?!
            </h1>
            <h2 class="subtitle">
              Join our Bounty Program today.
            </h2>
            <div class="has-limited-width mt-4">
              <p class="block">
                A big fan of Nosana’s platform and passionate about our vision
                for the future of development? We are launching our Bounty
                Program to encourage, reward, and recognize meaningful
                contributions by our community members. We, the people of the
                internet, can power a better, more responsible economy, but we
                must do it together. Join us on this mission and help us build a
                better future starting today. Become an Nosana Bounty Hunter
                right now and start earning rewards!
              </p>
              <p class="block">
                <a
                  href="https://forms.gle/zHStiwHsWem5ER8e9"
                  target="_blank"
                  class="button is-accent is-outlined is-wide"
                >
                  <b>Apply now</b>
                </a>
              </p>
            </div>
          </div>
          <div class="is-offset-1 column has-text-centered">
            <div>
              <img src="~assets/img/bounty_animated.svg">
            </div>
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-6" data-aos="zoom-in">
            <img src="~assets/img/tokens.png">
          </div>
          <div class="column is-offset-1 is-5" data-aos="fade-left">
            <h2 class="title">
              Get rewarded in $NOS
            </h2>
            <p class="block">
              Do you have a favorite open-source project that should be using
              the Nosana Network? Are you interested in creating content of code
              for Nosana? Our #NOS Bounty system is built on rewarding specific
              contributions and certain behavior. When you share multiple
              valuable contributions with us, you get the chance to move higher
              up our Bounty tier system and receive even bigger rewards for your
              valuable work.
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-8 is-horizontal-centered">
            <bounty-steps data-aos="zoom-in" />
          </div>
        </div>
        <div class="mt-6 pt-6">
          <h2 class="title mb-6" data-aos="fade-right">
            Benefits
          </h2>
          <div class="columns is-variable is-1">
            <div class="column is-4" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/icons/token.svg" height="80">
              <p>
                Earn bounties. You’ll be able to receive tokens or exclusive
                items for completing specific tasks.
              </p>
            </div>
            <div class="column is-4" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/icons/apps.svg" height="80">
              <p>
                Build real-world Blockchain experience and gain new marketable
                skills to help push your career to new heights.
              </p>
            </div>
            <div class="column is-4" data-aos="fade-up" data-aos-delay="600">
              <img src="~assets/img/icons/badge.svg" height="80">
              <p>
                Get a distinctive Server Bounty Badge for your contributions to
                our Discourse community.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-6">
          <h2 class="title my-6" data-aos="fade-right">
            Who's Eligible to Become<br>an $NOS Bounty Hunter
          </h2>
          <div class="columns is-variable is-1">
            <div class="column is-4" data-aos="fade-up" data-aos-delay="200">
              <img src="~assets/img/icons/community.svg" height="80">
              <p>
                You’re a crypto enthusiast, a community leader, an influencer,
                or an CICD expert and have the capability to promote Nosana
                within your group.
              </p>
            </div>
            <div class="column is-4" data-aos="fade-up" data-aos-delay="400">
              <img src="~assets/img/icons/content.svg" height="80">
              <p>
                You are a marketing and content creator. You love building
                content and have out-of-the-box ideas.
              </p>
            </div>
            <div class="column is-4" data-aos="fade-up" data-aos-delay="600">
              <img src="~assets/img/icons/develop.svg" height="80">
              <p>
                You are a developer interested in blockchain and CICD, and you
                want to gain hands-on knowledge of crypto projects and the
                development within the blockchain space.
              </p>
            </div>
          </div>
        </div>
        <div class="has-text-centered mt-6 pt-6" data-aos="zoom-in">
          <a
            href="https://https://discord.gg/nosana-ai"
            target="_blank"
            class="button is-accent is-outlined is-wide"
          >
            Join our community
          </a>
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
