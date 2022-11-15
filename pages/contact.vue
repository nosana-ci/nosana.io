<template>
  <section class="section">
    <div class="container">
      <div class="has-limited-width-small has-text-centered is-horizontal-centered">
        <h1 class="title is-1 is-spaced">
          Get in touch
        </h1>
        <h2 class="subtitle is-6">
          Have a burning question? Want to talk shop? Interested in joining us?
        </h2>
        <p>
          Shoot us an email at <a href="mailto:team@nosana.io" target="_blank">team@nosana.io</a>
          and we’ll get back to you ASAP.
        </p>
      </div>
      <vue-calendly url="https://calendly.com/wesley-b" :height="650" />

      <div class="columns mt-6">
        <div class="column is-6 is-offset-1">
          <h1 class="title mt-6">
            Our office
          </h1>
          <p>
            We're based in Amsterdam,<br>
            capital of The Netherlands
          </p>
        </div>
        <div class="column is-4">
          <img src="~assets/img/office.svg">
        </div>
      </div>
      <div class="column is-6 is-offset-1">
        <h1 class="subtitle mt-6">
          Brand kit
        </h1>
        <p class="block">
          Check out the Nosana brand kit for guidelines on<br>
          logo usage, our color palette and more.
        </p>
        <p class="block">
          <nuxt-link to="/brand" class="mt-4 is-underlined">
            <b>Brand kit &nbsp;&nbsp;↘</b>
          </nuxt-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  colorMode: 'dark',
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
</style>
