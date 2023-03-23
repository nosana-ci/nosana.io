<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6" data-aos="fade-up">
          Join us
        </h1>
        <div class="columns mt-5">
          <div class="column is-7" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                At Nosana, we’re on a mission to democratize the established cloud computing industry.
                Want in? Great! We just so happen to be looking for new team members.
              </p>
              <p class="block">
                <a class="button is-accent is-wide" target="_blank" href="https://www.linkedin.com/company/nosana/jobs/">
                  <b>View opportunities</b>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-4 mt-0" data-aos="fade-left">
          <img src="~assets/img/team.png">
        </div>
        <div class="has-text-centered mt-6 py-6">
          <h1 class="title is-spaced is-1 has-text-weight-semibold">
            About the<br>Nosana team
          </h1>
          <p class="has-limited-width-small is-horizontal-centered">
            We’re made up of very different people, but we all have a strong technical background in blockchain
            and CI/CD. And we’re united by our drive for disruption. Using decentralized technologies,
            we’re making the Metaverse a safe place where people are free from the clutches of Big Tech corporations.
          </p>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              Work from anywhere
            </h2>
            <h3 class="subtitle">
              A global network of people
            </h3>
            <p class="block">
              Development is a round-the-clock job. With our team working from different time zones,
              there’s always Nosana people building, iterating, and innovating.
              But even more importantly, this allows for a healthier work-life balance.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/globe_animated.svg">
          </div>
        </div>
        <div class="columns is-vcentered">
          <div class="column is-offset-7 is-5" data-aos="fade-left">
            <h2 class="title is-2">
              Who we’re looking for
            </h2>
            <p class="block">
              Developers, marketers, content creators, community moderators, designers: we’d love to have you.
              And if your title isn’t on that list but you’re passionate about our mission:
              we’d love to have you as well!
            </p>
            <p class="block">
              <a class="button is-accent is-wide is-outlined" target="_blank" href="https://www.linkedin.com/company/nosana/jobs/">
                <b>Open application</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-max-widescreen">
        <h1 class="title has-text-centered mt-6">
          Get to know us better
        </h1>
        <div class="columns is-multiline is-variable is-8">
          <div v-for="person in team" :key="person.name" class="column is-6">
            <div class="px-2 mt-6">
              <img
                :src="require(`@/assets/img/team/${person.image ? person.image : person.name}.png`)"
                style="max-width:112px;"
              >
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
        },
        {
          name: 'David',
          description: 'Our software developer who is proficient in various programming languages and frameworks. He’s also a pro at agile methodologies and best practices for software development. David enjoys breaking things apart to figure out how they work. When he is not coding, David likes to be outdoors rock climbing, hiking, and spending time with friends.'
        },
        {
          name: 'Sean',
          description: 'Sean is an accomplished entrepreneur who loves to create value and impact through his ventures. He’s an active advisor, mentor, community builder, and coach who supports aspiring and established entrepreneurs in their journeys. He shares his insights and expertise on topics such as innovation, leadership, growth, and sustainability. Sean enjoys traveling, reading, and spending time with his family and friends.'
        },
        {
          name: 'Michalina',
          description: 'Our junior graphic designer has a knack for creating eye-catching visuals. Whether it’s an element, flyer, or a social media post image, Michalina always delivers stunning designs that capture attention and convey the message. In her spare time, she enjoys playing a wide range of board games with friends.'
        },
        {
          name: 'Bourjois',
          description: 'Our business development lead and strategic advisor. Bourjois is passionate about Web3 and blockchain technologies and how they can transform the way we do business. He has a strong background in business operations, project management, and stakeholder relations. He enjoys collaborating with diverse teams and building long-term partnerships. In his free time, he is a hoop master who dish, swish, and assist.'
        },
        {
          name: 'Jaïr',
          description: 'Our software developer who turns ideas into reality. Jaïr has a passion for coding and building innovative solutions that make a difference. He’s also adept at working in agile teams and following best practices for software quality and security. Jaïr loves to learn new things and explore new possibilities with his code. In his free time, Jaïr likes to go to concerts and play football.',
          image: 'Jair'
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
