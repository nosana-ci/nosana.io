<template>
  <div>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img class="logo" :src="$colorMode.value === 'dark' ? require('@/assets/img/Nosana_Logo_horizontal_color_white.svg') : require('@/assets/img/Nosana_Logo_horizontal_color_white.svg')">
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            :class="{'is-active': mobileMenu}"
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
              <a target="_blank" href="https://docs.nosana.io" class="navbar-item" to="/docs" exact-active-class="is-active">
                <div>
                  Docs
                </div>
              </a>
            </div>
            <div @click="mobileMenu = false">
              <a target="_blank" href="onepager.pdf" class="navbar-item" to="/onepager" exact-active-class="is-active">
                <div>
                  Onepager
                </div>
              </a>
            </div>
            <div @click="mobileMenu = false">
              <nuxt-link class="navbar-item" to="/blog" exact-active-class="is-active">
                <div>Blog</div>
              </nuxt-link>
            </div>
            <div class="navbar-item" exact-active-class="is-active" @click="mobileMenu = false">
              <a target="_blank" href="mailto:team@nosana.io" class="button is-accent is-outlined px-5 is-wide" to="/account" exact-active-class="is-active">
                <div>
                  Contact
                </div>
              </a>
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
    height: 38px;
    max-width: none;
    max-height: none;
    margin-top: 0px;
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
.dark-mode {
  .navbar-burger {
    color: $white;
  }

  .navbar-dropdown {
    background: $primary;
    border-top-color: $primary
  }

  .navbar-menu {
    .navbar-link {
      color: $grey-light;

      &:after {
        border-color: $grey-light;
      }

      &.is-active, &:hover {
        color: white;

        &:after {
          border-color: white;
        }
      }
    }

    .navbar-item {
      color: $grey-light;

      &:after {
        background: white;
      }

      &.is-active, &:hover {
        color: white;
      }

      &.dapps .navbar-item:hover {
        background-color: rgba(0, 0, 0, 0.3) !important
      }
    }
  }

  .navbar-brand {
    .navbar-item {
      color: white;

      &.is-active, &:hover {
        color: white;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .navbar {
    .navbar-menu {
      .navbar-item {
        color: black;
        &.is-active, &:hover {
          color: black;
        }
      }
    }
  }
}
</style>
