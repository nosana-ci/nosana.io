<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title site-title is-spaced has-limited-width mt-6">
          Run any container command
        </h1>
        <div class="columns mt-5">
          <div class="column is-7" data-aos="fade-up">
            <div class="has-limited-width-small mt-4">
              <p class="block">
                If it works in a container, it works on the Nosana Network.
                We can run any container command, letting you ship faster than ever before.
              </p>
            </div>
          </div>
          <div class="column mb-6">
            <div class="title has-text-accent">
              -- ||| || | ||| |    |  | | |  |  | |    .|  “ | |   |  ]  ]  ] / ]  [  [    [ [  | |    ||  | |  | |
              <br><br>
              -- |_( “/ | |  --  |  | | |  | --   | | // |   | |   |  ]  ]  ]  ]  .[  [    [ [  | |    ||  |
              <br><br>
              --- //
            </div>
          </div>
        </div>
        <div class="columns py-6 is-vcentered">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              CI/CD made easy
            </h2>
            <p class="block">
              While CI/CD (continuous integration, continuous delivery, and continuous deployment) isn’t new,
              there are always new ways to implement it.
              Implementation methods evolve alongside cloud-native architecture,
              site reliability engineering and DevOps. But finding the right DevOps engineer isn’t easy.
              That’s where we come in. With our out-of-the-box flows and tailored-made pipelines,
              you’re free to focus on core development.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/section-visual_animated.svg">
          </div>
        </div>
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title" data-aos="fade-up">
            Running a docker build in 4 steps
          </h2>
          <!-- <p class="has-limited-width-smaller is-horizontal-centered" data-aos="fade-up">
            It’s easy to get up and running as a Nosana Technology Partner.
          </p> -->
        </div>
        <div class="columns is-variable is-8">
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="200">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-4 has-text-accent">
                Step 1
              </h2>
              <p class="is-size-5">
                Create a new job for your project
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="400">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-4 has-text-accent">
                Step 2
              </h2>
              <p class="is-size-5">
                Choose the Docker executor
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-4 has-text-accent">
                Step 3
              </h2>
              <p class="is-size-5">
                Specify your Docker image
              </p>
            </div>
          </div>
          <div class="column is-one-quarter" data-aos="fade-up" data-aos-delay="600">
            <div class="has-background-gradient px-4 py-5">
              <h2 class="title is-4 has-text-accent">
                Step 4
              </h2>
              <p class="is-size-5">
                Run your job!
              </p>
            </div>
          </div>
        </div>
        <div class="box p-6 has-border-accent has-background-image mountain-grid">
          <h2 class="title is-4">
            Connect to get started
          </h2>
          <p class="has-limited-width-smaller">
            Ready to optimize your workflow with our native container executor? Connect to our testnet to get started.
          </p>
          <p class="mt-4">
            <a href="https://testnet.nosana.io" target="_blank" class="is-underlined">Connect to Nosana testnet &nbsp;&nbsp;↘</a>
          </p>
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
.mountain-grid {
  > *{
    position: relative;
  }
  background-image: url('~assets/img/mountain-grid_animated.svg');
  position: relative;
  &:before {
    border-radius: 6px;
    position: absolute;
    display: block;
    content: "";
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background: linear-gradient(90deg, #010C04 28.85%, rgba(1, 12, 4, 0) 100%);
  }
}
</style>
