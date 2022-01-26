<template>
  <div class="roadmap-container">
    <div class="roadmap py-6 mb-6">
      <div class="roadmap-item is-completed">
        <div class="content has-radius-small p-3 pl-6">
          <div class="title">Phase 1</div>
          <div>
            <h2 class="subtitle is-3">Nosana Testnet for projects</h2>
            <ul>
              <li>
                Open-source software projects are Incentivized based on their
                Nosana network usage. In other words, you will receive tokens
                for running free pipelines.
              </li>
              <li>
                All participants will receive a limited amount of Testnet
                tokens.
              </li>
              <li>
                We will begin the testnet with certified nodes, to make sure
                your tests run smoothly.
              </li>
              <li>
                These tokens can only be used to run Nosana pipelines, and
                cannot be traded till our mainnet product is launched.
              </li>
            </ul>
            <p class="block">
              <a
                href="https://bit.ly/NosanaBetaForm-hp"
                class="button is-accent is-outlined has-text-weight-semibold"
                target="_blank"
                >Pre-register projects</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="content has-radius-small p-3 pl-6">
          <div class="title">Phase 2</div>
          <div>
            <h2 class="subtitle is-3">Nosana Testnet for users</h2>

            <ul>
              <li>
                Once projects are successfully running pipelines in the Testnet
                we’ll expand the program for users to become a node.
              </li>
              <li>
                Lend out spare CPU from your devicesl to power pipelines and
                you'll earn free tokens.
              </li>
              <li>
                Token rewards are calculated based on pipeline seconds and
                resource capacity.
              </li>
              <li>
                These tokens can only be used to run Nosana pipelines in
                TestNet, and cannot be traded till our mainnet product is
                launched.
              </li>
            </ul>
            <p class="block">
              <a
                href="https://bit.ly/NosanaBetaForm-hp"
                class="button is-accent is-outlined has-text-weight-semibold"
                target="_blank"
                >Pre-register users</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.roadmap-item {
  position: relative;
  padding-bottom: 60px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -2px;
    width: 2px;
    height: 100%;
    background: $accent;
  }
  &:after {
    content: "";
    position: absolute;
    $size: 17px;
    top: calc(80px - #{$size/2});
    left: -$size/2 - 1;
    height: $size;
    width: $size;
    border-radius: 100%;
    background: $dark-mode-background;
    border: 2px solid $accent;
  }

  &:first-child {
    &:before {
      background: linear-gradient(
        180deg,
        rgba($accent, 0) 0%,
        rgba($accent, 1) 40%
      );
    }
  }
  &:last-child {
    &:before {
      background: linear-gradient(
        180deg,
        rgba($accent, 1) 40%,
        rgba($accent, 0) 100%
      );
    }
  }
  ul {
    font-size: 12px;
    line-height: 25px;
    margin: 20px;
    font-weight: 300;
    li {
      &:before {
        content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: white; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        font-size: 14px;
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
      }
    }
  }
  .content {
    max-width: 100%;
    padding-left: 20px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      $height: 2px;
      top: calc(80px - #{$height/2});
      left: 0px;
      height: $height;
      width: 270px;
      background: $accent;
    }
    .title {
      font-size: 48px;
      color: $accent;
      padding-bottom: 10px;
      font-weight: 600;
      line-height: 1.4;
    }
  }

  &.is-completed {
    &:after {
      background: $accent;
    }
    ul li:before {
      color: $accent;
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
    }
  }
}
</style>
