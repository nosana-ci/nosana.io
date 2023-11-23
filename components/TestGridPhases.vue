<template>
  <div class="roadmap-container">
    <div class="roadmap mb-6">
      <div class="roadmap-item is-completed box">
        <div class="content has-radius-small p-3" data-aos="fade-up">
          <div class="title mb-0 has-text-centered">
            Phase 1
          </div>
          <div class="px-5">
            <h2 class="subtitle is-3 has-text-centered">
            10-12-2023 → 10-01-2024
            </h2>
            <ul>
              <li>
              Up to 250,000 $NOS tokens in rewards
              </li>
              <li>
              Validate our GPU grid with a variety of GPU devices
              </li>
              <li>
              Fine-tune the process and instructions of installing and upgrading nodes
              </li>
              <li>
              Benchmark performance of various AI algorithms on the Nosana network
              </li>
              <li>
              Bootstrap the network with an initial supply of GPUs
              </li>
            </ul>
              <p class="block has-text-centered">
                <a
                  href="#"
                  class="mr-3 button is-accent is-wide"
                  disabled
                >
                  <b>Registrations opens 1-12-2023</b>
                </a>
              </p>
          </div>
        </div>
      </div>
      <div class="roadmap-item box mt-6">
        <div class="content has-radius-small p-3" data-aos="fade-up">
          <div class="title mb-0 has-text-centered">
            Phase 2
          </div>
          <div class="px-5">
            <h2 class="subtitle is-3 has-text-centered">
            Feb 2024
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.roadmap {
  &:before {
    mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 1) 13%, rgba(0, 0, 0, 1) 48%, transparent 98%);
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -9px;
    background: $accent;
  }
}

.roadmap-item {
  background: #010C04;
  position: relative;
  padding-bottom: 60px;
  margin-top: 5rem !important;
  &:last-child {
    .title, h2, ul {
      mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to bottom, $accent, #051707);
  }
  &:after {
    content: "";
    position: absolute;
    $size: 17px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -9px;
    height: $size;
    width: $size;
    border-radius: 100%;
    background: $dark-mode-background;
    border: 2px solid $accent;
  }
  ul {
    line-height: 25px;
    margin: 20px;
    font-weight: 300;
    li {
      margin-top: 17px;
    }
  }
  .content {
    max-width: 100%;
    padding-left: 20px;
    position: relative;
    .title {
      font-size: 48px;
      color: $accent;
      padding-bottom: 10px;
      font-weight: 600;
      line-height: 1.4;
    }
  }
  @-webkit-keyframes glow-box {
    from {
      box-shadow: 0 0 7px 0 rgba($accent, 0.4);
    }
    to {
      box-shadow: 0 0 17px 8px rgba($accent, 0.6);
    }
  }
  &.is-active {
    &:after {
      border-color: $accent;
      background: $accent;
      animation: glow-box 1s ease-in-out infinite alternate;
    }
    ul li:before {
      color: $accent;
    }
  }
}
@media screen and (max-width: 700px) {
  .roadmap-item {
    .content {
      &:after {
        width: 100%;
      }
      .px-5 {
        padding: 0 !important;
      }
    }
  }
}
</style>
