<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns py-6">
          <div class="column is-5" data-aos="fade-right">
            <h2 class="title is-2">
              Statistics
            </h2>
            <p class="block">
              Here you can find live statistics about the number of commits, jobs, users
              and repositories on the <span class="has-text-accent">Nosana Network</span>.
            </p>
          </div>
          <div class="column is-6 is-offset-1 mb-5">
            <div v-if="stats" class="columns is-multiline is-mobile">
              <div
                v-for="(value, stat, index) in stats"
                :key="stat"
                class="column is-4-widescreen is-one-third-desktop is-6-tablet is-6-mobile"
                data-aos="zoom-in"
                :data-aos-delay="index + '00'"
              >
                <div class="box has-text-centered">
                  <div class="is-size-7">
                    {{ stat.split("_").map((w) => (w[0].toUpperCase() + w.substring(1))).join(" ") }}
                  </div>
                  <h2
                    class="title is-4"
                    :class="{
                      'has-text-info': stat.includes('running'),
                      'has-text-danger': stat.includes('failed'),
                      'has-text-warning': stat.includes('queued'),
                      'has-text-success': stat.includes('success'),
                      'has-text-accent': stat.includes('reward')
                    }"
                  >
                    {{value}} <small v-if="stat.includes('reward')" class="is-size-6">NOS</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 v-if="repositories" class="title is-2 is-spaced has-text-centered mt-6 mb-6">
          Recent <span class="has-text-accent">Pipelines</span>
        </h1>
        <div v-if="repositories" class="columns is-multiline mt-4" data-aos="fade-up">
          <template v-for="repository in repositories">
            <div
              :key="repository.id"
              class="column is-6 is-3-fullhd is-3-widescreen is-4-desktop"
            >
              <div class="box">
                <div class="is-flex is-align-items-flex-start is-justify-content-flex-start">
                  <div class="project-icon mr-4">
                    <img style="height: 32px" :src="repository.image">
                  </div>
                  <div>
                    <h2 class="title is-6 has-text-weight-semibold" style="min-height: 36px">
                      <span v-html="repository.repository.split('/').join('/<br>')" />
                    </h2>
                    <h2 class="subtitle is-6 mb-1">
                      <span>{{ repository.name }}</span>
                    </h2>
                    <p class="is-size-7 has-overflow-ellipses" style="height: 40px;">
                      <span>{{ repository.description }}</span>
                    </p>
                  </div>
                </div>

                <div class="mt-2">
                  <span v-if="repositories">
                    <div
                      v-if="repository.commits.length"
                      class="is-flex is-align-items-flex-end"
                    >
                      <div class="mr-2">
                        <div
                          class="tag is-small"
                          :class="{
                            'is-accent': repository.commits[0].status === 'COMPLETED',
                            'is-info': repository.commits[0].status === 'RUNNING',
                            'is-warning': repository.commits[0].status === 'QUEUED',
                            'is-danger': repository.commits[0].status === ('FAILED' || 'STOPPED')
                          }"
                        >{{ repository.commits[0].status }}</div>
                        <div class="is-size-7">
                          {{ $moment(repository.commits[0].updated_at ).fromNow() }}
                        </div>
                      </div>
                      <div
                        v-for="commit in repository.commits.slice().reverse()"
                        :key="commit.id"
                        class="mx-1"
                        @click.stop=""
                      >
                        <a :href="`https://app.nosana.io/jobs/${commit.id}`" target="_blank">
                          <commit-status
                            :status="commit.status"
                            class="has-tooltip-arrow"
                            :data-tooltip="commit.commit.substring(0,7)"
                          />
                        </a>
                      </div>
                    </div>
                  </span>
                  <span v-else>Loading..</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommitStatus from '../components/CommitStatus.vue';

export default {
  components: {
    CommitStatus
  },
  data () {
    return {
      stats: null,
      interval: null,
      repositories: null
    };
  },
  created () {
    this.getStats();
    this.getActiveRepositories();
    if (!this.interval) {
      this.interval = setInterval(() => {
        console.log('refreshing..');
        this.getStats();
        this.getActiveRepositories();
      }, 60000);
    }
  },
  beforeDestroy () {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  methods: {
    async getStats () {
      try {
        const response = await fetch('https://app.nosana.ci/stats');
        const stats = await response.json();
        stats.total_jobs_rewards = stats.total_jobs_rewards / 1e6;
        this.stats = stats;
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveRepositories () {
      try {
        const response = await fetch('https://app.nosana.ci/repositories/active');
        const repositories = await response.json();
        this.repositories = repositories;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-icon {
border-radius: 100%;
background: $primary;
display:flex;
justify-content: center;
min-width: 75px;
height: 75px;
align-items: center;
border: 1px solid grey;
}
</style>
