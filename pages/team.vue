<template>
  <div>
    <section class="section teams-background has-background-image">
      <div class="container">
        <div
          class="
            mt-6
            py-2
            has-text-centered has-limited-width
            is-horizontal-centered
          "
          style="
            background: linear-gradient(
              180deg,
              #010c04 0%,
              rgba(1, 12, 4, 0) 180.4%
            );
          "
        >
          <h1 class="title is-spaced is-1 has-text-weight-semibold">
            Team overview
          </h1>
          <p class="is-size-6 has-text-weight-semibold has-text-white">
            The Nosana team is a distributed group of individuals with a strong
            technical background in the blockchain and CI/CD industry. We share
            a drive to disrupt the established cloud computing industry using
            decentralized technologies. We want to make the Metaverse a safe
            place of freedom where people don't have to sacrifice their privacy
            to large corps. If you feel you belong here as well send an email to
            team@nosana.io - developers, marketeers, content writers, community
            mods, designers, and in general people of passion are welcome."
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-max-widescreen">
        <div class="columns is-multiline is-variable is-8">
          <div v-for="person in team" :key="person.name" class="column is-6">
            <div class="px-2 mt-6">
              <img :src="require(`@/assets/img/team/${person.name}.png`)">
              <h2 class="subtitle is-5 mt-2 mb-4">
                {{ person.name }}
              </h2>
              <p>
                {{ person.description }}
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
  colorMode: 'dark',
  data () {
    return {
      team: [
        {
          name: 'Sjoerd',
          description: 'Our code guru. C++, Kubernetes, Rust, Python. You name it, he knows it. 10+ years in crypto and corporate industry with experience developing funded companies at executive level leadership roles. Studied A.I. at Amsterdam University. Digital native since birth and a passionate kitesurfer.'
        },
        {
          name: 'Jesse',
          description: 'Our blockchain expert. 10+ years in the crypto industry with experience developing funded companies at executive level leadership roles. Studied A.I. at Amsterdam University. Passion for a decentralized world.'
        },
        {
          name: 'Wesley',
          description: 'Our marketing wizard. 7+ years experience with building brands, leading teams & working with a wide range of marketing budgets. In charge of developing the strategy for Nosana advertising and branding, as well as customer outreach. Studied a Double Psychology major at Amsterdam University with a post-master degree in Digital Marketing & Strategy. Passion for gaming.'
        },
        {
          name: 'Mitch',
          description: 'Our sales master. Our Business development professional with deep ties to several Blockchain projects and influencers. Currently leads partner development and handles most communication between the team & partners. Passion for discovering new opportunities and saying GM.'
        },
        {
          name: 'Rochelle',
          description: 'Our spider in the web. Currently leads social platform development and handles most platform communication between the team & community. Performance coach with 15+ years of people management and a passion for building out decentralized community platforms that work.'
        },
        {
          name: 'Laurens',
          description: 'Our mathematical genius and allround developer. Hailing from a far-off galaxy, he’s programming our planet and turning us all into mathematical equations. An accomplished time traveler, many of you may recognize him by his former name, Archimedes, the father of mathematics.'
        },
        {
          name: 'Nahil',
          description: 'Our graphic design extraordinaire. Using traditional art tools and computer software to communicate ideas, he develops the overall layout and production design for everything we do.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.teams-background {
  background-image: url("~assets/img/Team-Hero-BG.png");
  min-height: 100vh;
  margin-top: -80px;
  padding-top: 110px;
}
</style>
