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
              Private Beta
            </h2>
            <ul>
              <li>
                Open-source software projects can use Nosana’s engine to run CI jobs for free.
              </li>
              <li>
                Projects can securely store their secrets to a Secret Manager
                (hosted for free by Nosana, or you can host your own) and specify per job which secrets
                the node running the job can retrieve.
              </li>
              <li>
                The beta program runs on verified nodes, to make sure your tests run smoothly.
              </li>
            </ul>
            <p class="block has-text-centered">
              <a
                href="https://app.nosana.io"
                class="button is-accent is-outlined has-text-weight-semibold"
                target="_blank"
              >Get Started</a>
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
              Public Beta
            </h2>

            <ul>
              <li>
                Expected 1st of April 2023
              </li>
              <li>
                Once selected projects are successfully running pipelines in our beta we’ll
                open the App to all projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="roadmap-item box mt-6">
        <div class="content has-radius-small p-3" data-aos="fade-up">
          <div class="title has-text-centered">
            Phase 3
          </div>
          <div class="has-text-centered">
            <h2 class="subtitle is-3">
              Mainnet Release
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
