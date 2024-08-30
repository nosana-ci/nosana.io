<template>
  <div>
    <nav
      class="navbar is-transparent py-1 is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img
              class="logo"
              src="~/assets/img/Nosana_Logo_horizontal_color_white.svg"
            >
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            :class="{ 'is-active': mobileMenu }"
            aria-expanded="false"
            data-target="navbar"
            @click="mobileMenu = !mobileMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbar"
          class="navbar-menu"
          :class="{ 'is-active': mobileMenu }"
        >
          <div class="navbar-start" />
          <div class="navbar-end is-align-items-center">
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a class="navbar-link is-arrowless">
                <div>Info</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <a href="https://docs.nosana.io" target="_blank" class="navbar-item">
                  <span>Docs</span>
                </a>
                <a href="https://github.com/nosana-ci" target="_blank" class="navbar-item">
                  <!-- <i class="fab fa-github mr-2" aria-hidden="true" /> -->
                  <span>GitHub</span>
                </a>
                <a href="https://app.nosana.io/stake/" target="_blank" class="navbar-item">
                  <span>Staking</span>
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link is-arrowless"
                exact-active-class="is-active"
              >
                <div>Community</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <nuxt-link class="navbar-item" to="/blog" exact-active-class="is-active">
                  Blog
                </nuxt-link>
                <a href="https://twitter.com/nosana_ai" target="_blank" class="navbar-item">
                  <i class="fab fa-twitter mr-2" aria-hidden="true" />
                  <span>Twitter</span>
                </a>
                <a href="https://discord.gg/nosana-ai" target="_blank" class="navbar-item">
                  <i class="fab fa-discord mr-2" aria-hidden="true" />
                  <span>Discord</span>
                </a>
                <a href="https://t.me/NosanaCompute" target="_blank" class="navbar-item">
                  <i class="fab fa-telegram mr-2" aria-hidden="true" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link is-arrowless"
                exact-active-class="is-active"
              >
                <div>Company</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <nuxt-link class="navbar-item" to="/team" exact-active-class="is-active">
                  Team page
                </nuxt-link>
              </div>
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
    };
  }
};
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
      &.is-active,
      &:hover {
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
      font-size: 0.9rem;

      @media screen and (max-width: $tablet) {
        &.has-dropdown > a {
          background: $primary;
        }
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
    border-top-color: $primary;
    @media screen and (max-width: $tablet) {
      background: none;
    }
  }

  .navbar-menu {
    .navbar-link {
      color: $white;

      @media screen and (max-width: $tablet) {
        &:not(.is-arrowless) {
          padding-right: 0.75rem;
        }
      }

      &:after {
        border-color: $white;
      }

      &.is-active,
      &:hover {
        color: white;

        &:after {
          border-color: white;
        }
      }
    }

    .navbar-item {
      color: $white;

      &:after {
        background: white;
      }

      &.is-active,
      &:hover {
        color: white;
      }

      &.dapps .navbar-item:hover {
        background-color: rgba(0, 0, 0, 0.3) !important;
      }
    }
  }

  .navbar-brand {
    .navbar-item {
      color: white;

      &.is-active,
      &:hover {
        color: white;
      }
    }
  }
  @media screen and (max-width: 1023px) {
    .navbar {
      .navbar-menu {
        background-color: $dark-mode-background;
        .navbar-item {
          color: white;
          &.is-active,
          &:hover {
            background-color: $dark-mode-background;
            color: white;
          }
        }
      }
    }
  }
}

.light-mode {
  .navbar {
    background: rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 1023px) {
      .navbar-burger {
        color: #fff;
      }
    }
  }
}

.light-mode {
  .navbar {
    .navbar-menu {
      .navbar-item .navbar-link {
        color: #fff;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .navbar {
    .navbar-menu {
      .navbar-item {
        color: black;
        &.is-active,
        &:hover {
          color: black;
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .navbar > .container .navbar-brand, .container > .navbar .navbar-brand {
    margin-left: 0;
  }
  .navbar > .container .navbar-menu, .container > .navbar .navbar-menu {
    margin-right: 0;
  }
}
</style>
