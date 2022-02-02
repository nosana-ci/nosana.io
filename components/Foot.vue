<template>
  <footer class="footer container py-6 px-4">
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div id="navbar" class="navbar-menu">
          <div class="navbar-start is-horizontal-centered">
            <nuxt-link class="navbar-item" to="/" exact-active-class="is-active">
              <div>Home</div>
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/earn" exact-active-class="is-active">
              <div>Earn</div>
            </nuxt-link>
            <a target="_blank" href="https://docs.nosana.io" class="navbar-item" to="/docs" exact-active-class="is-active">
              <div>Docs</div>
            </a>
            <nuxt-link class="navbar-item" to="/blog" exact-active-class="is-active">
              <div>Blog</div>
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/faq" exact-active-class="is-active">
              <div>FAQ</div>
            </nuxt-link>
            <a target="_blank" href="mailto:team@nosana.io" class="navbar-item" exact-active-class="is-active">
              <div>Contact</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="px-5 m-2 py-4 has-radius has-text-centered">
      <img src="~/assets/img/Nosana_Logo_vertical_color_white.svg" class="logo" style="height: 80px">
    </div>
    <div class="px-6 m-2 py-4 has-radius has-text-centered">
      <small
        class="is-size-7"
      ><span style="font-family: monospace">©</span> NOSANA 2021</small>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba($accent, 0.1);
}
</style>
