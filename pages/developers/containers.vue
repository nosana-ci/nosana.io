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
              <p class="block has-text-weight-medium">
                Our decentralized crowd-hosted platform has computing options for every development need.
                Whether you’re building mobile apps or the next DEX.
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
              Containerized Pipelines
            </h2>
            <p class="block">
              We allow for versatile containerized pipeline creation by running any container tool you like.
              Specify which container you’d like to use for each step, and the agent fetches and starts the container
              in which the job will run.
              Because each step is run in its own container and all the plugins have their own containers,
              you don’t need to worry about dependency hell.
            </p>
          </div>
          <div class="column is-5 is-offset-2" data-aos="zoom-in">
            <img src="~assets/img/section-visual_animated.svg">
          </div>
        </div>
        <div class="my-6 pt-6 has-text-centered">
          <h2 class="title" data-aos="fade-up">
            Running a Docker build in 4 steps
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
                Give your configuration file a job
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
                Choose your Docker image
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
      </div>
      <connect />
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
};
</script>
