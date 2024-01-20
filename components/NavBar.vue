<template>
  <div>
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link class="navbar-item" to="/">
            <img
              class="logo"
              :src="
                $colorMode.value === 'dark'
                  ? require('@/assets/img/Nosana_Logo_horizontal_color_white.svg')
                  : require('@/assets/img/Nosana_Logo_horizontal_color_white.svg')
              "
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
            <!-- <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link"
                exact-active-class="is-active"
              >
                <div>Product</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <nuxt-link class="navbar-item" to="/product" exact-active-class="is-active">
                  Get Started
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/product/containers" exact-active-class="is-active">
                  Container-Support
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/product/multisig" exact-active-class="is-active">
                  Multisig
                </nuxt-link>
              </div>
            </div> -->
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a target="_blank" href="https://docs.nosana.io" class="navbar-link">
                <div>Docs</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <a href="https://github.com/nosana-ci" target="_blank" class="navbar-item">
                  <i class="fab fa-github mr-2" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <!-- <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link"
                exact-active-class="is-active"
              >
                <div>Decentralized Network</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <nuxt-link class="navbar-item" to="/platform" exact-active-class="is-active">
                  Private Beta
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/network/vision" exact-active-class="is-active">
                  Vision
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/token" exact-active-class="is-active">
                  The NOS Token
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/stake" exact-active-class="is-active">
                  Staking & Rewards
                </nuxt-link>
                <nuxt-link class="navbar-item" to="/network/cpu" exact-active-class="is-active">
                  Contribute CPU
                </nuxt-link>
              </div>
            </div> -->
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link"
                exact-active-class="is-active"
              >
                <div>Community</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <nuxt-link class="navbar-item" to="/blog" exact-active-class="is-active">
                  Blog
                </nuxt-link>
                <a href="https://twitter.com/nosana_ci" target="_blank" class="navbar-item">
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
                <!-- <nuxt-link class="navbar-item" to="/nft" exact-active-class="is-active">
                  Nosana NFT
                </nuxt-link> -->
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable" @click="mobileMenu = false">
              <a
                class="navbar-link"
                exact-active-class="is-active"
              >
                <div>Company</div>
              </a>
              <div class="navbar-dropdown is-boxed">
                <!-- <nuxt-link class="navbar-item" to="/partner" exact-active-class="is-active">
                  Nosana Partner Program
                  <span class="icon ml-3">
                    <i class="fas fa-chevron-down" />
                  </span>
                </nuxt-link>
                <div class="ml-2">
                  <nuxt-link class="navbar-item" to="/partner/technology" exact-active-class="is-active">
                    > Technology Partnership
                  </nuxt-link>
                  <nuxt-link class="navbar-item" to="/partner/network" exact-active-class="is-active">
                    > Network Partnership
                  </nuxt-link>
                  <nuxt-link class="navbar-item" to="/partner/portfolio" exact-active-class="is-active">
                    > Portfolio Partnership
                  </nuxt-link>
                </div> -->
                <nuxt-link class="navbar-item" to="/team" exact-active-class="is-active">
                  Team page
                </nuxt-link>
                <!-- <nuxt-link class="navbar-item" to="/brand" exact-active-class="is-active">
                  Brand page
                </nuxt-link> -->
              </div>
            </div>
            <!-- <div
              class="navbar-item"
              exact-active-class="is-active"
              @click="mobileMenu = false"
            >
              <a
                target="_blank"
                href="https://testnet.nosana.io"
                class="button is-accent is-outlined px-5 is-wide"
                exact-active-class="is-active"
              >
                <div>Get started</div>
              </a>
            </div> -->
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
</style>
