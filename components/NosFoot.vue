<template>
  <footer class="footer py-5 px-4">
    <div class="container">
      <nav
        class="is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="columns py-5">
            <div class="column is-7">
              <img
                src="~/assets/img/Nosana_Logo_horizontal_color_white.svg"
                class="logo mb-1"
                style="height: 40px"
              />
              <socials class="mb-4" />
            </div>
            <div class="column is-5">
              <div class="columns">
                <div class="column is-4">
                  <h4>Product</h4>
                  <nuxt-link
                    class="navbar-item"
                    to="/"
                    exact-active-class="is-active"
                  >
                    <div>Home</div>
                  </nuxt-link>
                  <a
                    target="_blank"
                    href="https://docs.nosana.io"
                    class="navbar-item"
                    to="/docs"
                    exact-active-class="is-active"
                  >
                    <div>Docs</div>
                  </a>
                </div>
                <div class="column is-4">
                  <h4>Product</h4>
                  <nuxt-link
                    class="navbar-item"
                    to="/"
                    exact-active-class="is-active"
                  >
                    <div>Home</div>
                  </nuxt-link>
                  <a
                    target="_blank"
                    href="https://docs.nosana.io"
                    class="navbar-item"
                    to="/docs"
                    exact-active-class="is-active"
                  >
                    <div>Docs</div>
                  </a>
                </div>
                <div class="column is-4">
                  <h4>Product</h4>
                  <nuxt-link
                    class="navbar-item"
                    to="/"
                    exact-active-class="is-active"
                  >
                    <div>Home</div>
                  </nuxt-link>
                  <a
                    target="_blank"
                    href="https://docs.nosana.io"
                    class="navbar-item"
                    to="/docs"
                    exact-active-class="is-active"
                  >
                    <div>Docs</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="py-4 has-radius">
        <small class="is-size-7"
          >© Nosana Network 2024 The Nosana Network Authors Documentation
          Distributed under CC BY 4.0</small
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.light-mode {
  .footer {
    background-color: black;
    .navbar-menu {
      background-color: black;
    }
    .navbar-item {
      color: white;
      &:hover {
        background: transparent;
      }
    }
  }
}
.footer {
  .navbar-menu {
    display: flex !important;
  }
  border-top: 1px solid rgba($accent, 0.1);
}
</style>
