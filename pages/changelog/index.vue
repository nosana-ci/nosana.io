<template>
  <section class="section mb-6">
    <div class="container">
      <h1 class="has-text-centered title">
        Changelogs
      </h1>
      <div class="tabs is-centered py-3">
        <ul style="border: none;">
          <li><nuxt-link to="/blog">Blogs</nuxt-link></li>
          <li class="is-active">
            <a>Changelogs</a>
          </li>
        </ul>
      </div>
      <div class="columns mt-6">
        <div class="column is-6 is-offset-3 changelog pb-6">
          <client-only>
            <nuxt-link
              v-for="log of logs"
              :key="log.slug"
              :to="'/changelog/' + log.slug"
            >
              <div class="box mt-6 item py-5">
                <div class="is-flex is-align-items-center">
                  <div class="date-block has-text-centered subtitle mb-0 is-6">
                    {{ formatDate(log.createdAt) }}
                  </div>
                  <div class="pl-3 ml-1" style="border-left: 1px solid rgba(95,255,0,.2);">
                    <div class="content has-radius-small px-3" data-aos="fade-up">
                      <div class="title is-4 mb-2">
                        {{ log.title }}
                      </div>
                      <span
                        v-for="tag of log.tags"
                        :key="tag"
                        class="mr-1 tag is-secondary is-small is-light"
                      >{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  colorMode: 'dark',
  async asyncData ({ $content, params }) {
    const logs = await $content('changelog')
      .only(['title', 'createdAt', 'description', 'slug', 'tags'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      logs
    };
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>
<style lang="scss" scoped>
.changelog {
  position: relative;
  &:before {
    mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 13%, rgba(0, 0, 0, 1) 80%, transparent 99%);
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    background: $accent;
  }
}
.item {
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to bottom, $accent, #051707);
  }
}

.is-align-items-center {
  @media screen and (max-width: $tablet) {
    flex-direction: column;
    text-align: center;
  }
  .date-block {
    min-width: 200px;
    height: 100%;
    @media screen and (max-width: $tablet) {
      min-width: initial;
    }
  }
}

.tag.is-secondary.is-light {
  font-size: .7rem;
  border: 1px solid $accent;
  background: transparent !important;
  color: $accent !important;
}

.is-two-fifths {
  div {
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.tabs {
  font-weight: 500;
  font-size: 1.1rem;
  li {
    margin: 0 10px;
    a {
      border-bottom: 0px;
    }
    &.is-active {
      border-bottom: 2px solid $accent;
    }
  }
}
</style>
