<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            Nosana CI
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            @click="mobileMenu = !mobileMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbar" class="navbar-menu" :class="{'is-active': mobileMenu}">
          <div class="navbar-start" />
          <div class="navbar-end is-align-items-center">
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/" exact-active-class="is-active">
                <div>Home</div>
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/docs" exact-active-class="is-active">
                <div>Docs</div>
              </nuxt-link>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/community" exact-active-class="is-active">
                <div>Community</div>
              </nuxt-link>
            </div>
            <div class="navbar-item" exact-active-class="is-active" @click="mobileMenu = false">
              <nuxt-link class="button is-accent is-rounded px-5" to="/account" exact-active-class="is-active">
                <div>Contact</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      mobileMenu: false
    }
  }
}
</script>

<style lang="scss">
.navbar {
  &.is-transparent {
    background: transparent;
  }

  .logo {
    height: 50px;
    max-width: none;
    max-height: none;
    margin-top: 5px;
    margin-right: 8px;
  }

  .navbar-brand {
    .navbar-item {
      &.is-active, &:hover {
        color: $primary;
      }
    }
  }

  .navbar-menu {
    margin-top: 8px;
    justify-content: center;

    .navbar-item {
      font-weight: 500;
      padding: 10px 20px;
      text-align: center;
      color: white;
      font-size: .9rem;

      &:after {
        display: block;
        width: 0;
        height: 2px;
        position: absolute;
        transition: width 0.5s;
        bottom: 10px;
        background: $secondary;
        content: "";
      }

      &.is-active {
        color: $primary;
        font-weight: 700;

        &:after {
          width: calc(100% - 1.5rem - 15px);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .navbar {
    .navbar-menu {
      .navbar-item {
        color: black;
      }
    }
  }
}
</style>
