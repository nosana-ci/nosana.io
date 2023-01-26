<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-1 is-spaced has-text-centered mt-6">
          Democratizing CPU<br>Cloud Computing
        </h1>
      </div>
    </section>
    <div class="section py-6 has-background-image background-grad">
      <div class="container py-6">
        <div class="column is-6 my-6">
          <p class="has-text-weight-medium has-text-white">
            We're creating a democratized CPU cloud computing network for a private, anonymous,
            and easily accessible future internet. A future in which internet users, not Big Tech, make the decisions.
          </p>
        </div>
        <div class="column is-offset-6 is-6 mb-6">
          <p class="has-text-weight-medium has-text-white">
            As a result, we give blockchain developers and services access to a global pool of computing power.
            This way, everyone will be able to rent out their spare CPU to power the projects they care about.
            We place a special emphasis on project CI/CD infrastructure,
            allowing developers to build without having to rely on Big Tech's infrastructure.
          </p>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="mt-6 pt-6 has-text-centered">
          <h1 class="title">
            Why join the<br>Nosana network?
          </h1>
        </div>
        <div class="mt-6 pt-6">
          <div class="columns is-variable is-8">
            <div class="column is-4">
              <img src="~assets/img/nodes.svg" height="42">
              <h2 class="title is-4 my-3">
                Better for people
              </h2>
              <p>
                We’re here to empower regular people by eliminating Big-Tech middlemen and offering an affordable,
                reliable solution. Make money by sharing your idle computing resources with us.
                It’s easy and accessible for anyone – including people with lower incomes.
              </p>
            </div>
            <div class="column is-4">
              <img src="~assets/img/planet.svg" height="42">
              <h2 class="title is-4 my-3">
                Better for the planet
              </h2>
              <p>
                The computational needs of our tech-driven world take a heavy toll on our planet.
                To help alleviate the ecological pressure, Nosana uses what’s already there.
                We power projects using digital waste material: spare computing resources.
              </p>
            </div>
            <div class="column is-4">
              <img src="~assets/img/network.svg" height="42">
              <h2 class="title is-4 my-3">
                Better availability
              </h2>
              <p>
                We designed Nosana to be decentralized,
                which means you can always rely on its availability.
                With an ever-growing network of nodes, we’re confident in our ability to support your projects 24/7.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-6 has-text-centered">
          <h1 class="title">
            Simple, safe,<br>decentralized CI/CD.
          </h1>
        </div>
        <div class="mt-6 pt-6">
          <div class="columns is-variable is-8">
            <div class="column is-4">
              <img src="~assets/img/nodes.svg" height="42">
              <h2 class="title is-4 my-3">
                Guaranteed transactions
              </h2>
              <p>
                Selling? You always get paid.
                Buying? You always get what you pay for.
                Thank our smart contracts, which enforce all cloud computing transactions.
              </p>
            </div>
            <div class="column is-4">
              <img src="~assets/img/planet.svg" height="42">
              <h2 class="title is-4 my-3">
                Encrypted for your privacy
              </h2>
              <p>
                Privacy is everything.
                That’s why our decentralized network is encrypted at several levels.
                You – and your stuff – are completely anonymous, private and secure.
              </p>
            </div>
            <div class="column is-4">
              <img src="~assets/img/network.svg" height="42">
              <h2 class="title is-4 my-3">
                DevOps community
              </h2>
              <p>
                Open-source, flexible, collaborative.
                That’s what we focus on as we build our community of developers.
                After all, development is the driving force behind our network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Partners />
  </div>
</template>

<script>
import Partners from '@/components/Partners';
export default {
  colorMode: 'dark',
  components: { Partners }
};
</script>

<style lang="scss" scoped>
.background-grad {
      background-image: url("~assets/img/grad_animated.svg");
}
</style>
