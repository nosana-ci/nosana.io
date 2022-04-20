<template>
  <div>
    <div class="tabs mb-2 is-large is-fullwidth">
      <ul>
        <li v-for="step, tab in steps" :key="tab" :class="{'is-active': activeTab === tab}" @click="activeTab = tab">
          <a>{{ step.title }}</a>
        </li>
      </ul>
    </div>
    <div v-if="activeTab" class="has-background-accent has-radius-small px-2 py-6 has-text-black has-text-centered">
      <p class="block">
        <img :src="steps[activeTab].img" style="height: 106px">
      </p>
      <p class="block has-limited-width-small is-horizontal-centered">
        {{ steps[activeTab].body }}
      </p>
      <p class="block">
        <a
          href="https://forms.gle/zHStiwHsWem5ER8e9"
          target="_blank"
          class="button is-black is-outlined is-wide"
        >
          <b>Apply now</b>
        </a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeTab: 'create',
      steps: {
        create: {
          img: require('@/assets/img/icons/create.svg'),
          title: 'Create',
          body: 'Earn bounties by creating compelling content. As we grow, we need more tailored content that resonates in specific markets, as well as translation.'
        },
        manage: {
          img: require('@/assets/img/icons/manage.svg'),
          title: 'Manage',
          body: 'Earn bounties for helping us manage our online communities in various languages on various channels.'
        },
        code: {
          img: require('@/assets/img/icons/code.svg'),
          title: 'Code',
          body: 'Earn bounties by developing Github tickets and Bugfix new features for the Nosana Network.'
        },
        reach: {
          img: require('@/assets/img/icons/reach.svg'),
          title: 'Reach out',
          body: 'Earn bounties by finding open-source and crypto projects to run on our Network'
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
li a {
    transition: 0.2s;
    box-shadow: inset 0 0px 0 $accent;
}
li.is-active {
    a {
        box-shadow: inset 0 -5px 0 $accent;
    }
}
</style>
