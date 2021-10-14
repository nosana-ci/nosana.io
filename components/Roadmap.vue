<template>
  <div class="roadmap-container pb-6 my-6">
    <h2 class="title has-text-centered">
      Roadmap
    </h2>
    <div class="roadmap py-6 mb-6">
      <div class="roadmap-item is-completed">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            21/07
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div>
            Demo environment build
          </div>
        </div>
        <!--        <ul>-->
        <!--          <li>Team Formation</li>-->
        <!--          <li>Technical Roadmap</li>-->
        <!--          <li>Seed Round</li>-->
        <!--        </ul>-->
      </div>
      <div class="roadmap-item is-completed">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            11/08
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div>
            Solana Grant backing
          </div>
        </div>
      </div>
      <div class="roadmap-item is-active">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            07-10/11
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div>
            Attend Breakpoint (Solana Event)
          </div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            07-13/12
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div class="has-text-white">
            Public Tokensale
          </div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            December
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div class="has-text-white">
            Incentivized Testnet live
          </div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="quarter-block has-radius-small p-3">
          <div class="quarter">
            December
            <span class="is-pulled-right is-size-6">2021</span>
          </div>
          <div class="has-text-white">
            Token Staking live
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.roadmap-container {
  background: url('~assets/img/field.svg') no-repeat;
  background-position: bottom center;
  background-size: contain;
}
.roadmap {
  width: fit-content;
  margin: 0 auto;
  max-width: 100%;
}
.roadmap-item {
  display: flex;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left:-2px;
    width: 2px;
    height: 100%;
    background: $accent;
  }
  &:after {
    content: "";
    position: absolute;
    $size: 17px;
    top: calc(50% - #{$size/2});
    left: -$size/2 - 1;
    height: $size;
    width: $size;
    border-radius: 100%;
    background: $dark-mode-background;
    border: 2px solid $accent;
  }

  &:first-child {
    &:before {
      background: linear-gradient(180deg, rgba($accent, 0) 0%, rgba($accent, 1) 40%);
    }
  }
  &:last-child {
    &:before {
      background: linear-gradient(180deg, rgba($accent, 1) 40%, rgba($accent, 0) 100%);
    }
  }
  ul {
    font-size: 12px;
    line-height: 25px;
    margin: 20px;
    font-weight: 300;
    li {
      &:before {
        content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
        color: white; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        font-size: 14px;
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-left: -1em; /* Also needed for space (tweak if needed) */
      }
    }
  }
  .quarter-block {
    height: 100px;
    width: 365px;
    border: 1px solid $accent;
    color: $accent;
    margin: 10px 11px 10px 60px;
    position: relative;
    background: $dark-mode-background;
    &:before {
      content: "";
      position: absolute;
      $size: 10px;
      top: calc(50% - #{$size});
      left: -$size;
      height: $size * 2;
      width: $size;
      border-bottom-left-radius: $size * 2;
      border-top-left-radius: $size * 2;
      background: $accent;
    }
    &:after {
      content: "";
      position: absolute;
      $height: 2px;
      top: calc(50% - #{$height/2});
      left: -60px;
      height: $height;
      width: 50px;
      background: $accent;
    }
    .quarter {
      font-size: 26px;
      font-weight: 400;
      line-height: 1.4;
    }
    .year {
      font-size: 20px;
      line-height: 1;
    }
  }

  &.is-completed {
    &:after {
      background: $accent;
    }
    ul li:before {
      color: $accent;
    }
    .quarter-block {
      background-color: rgba($accent, 0.6);
      color: $dark-mode-background;
    }
  }
  @-webkit-keyframes glow-box {
    from {
      box-shadow: 0 0 7px 0 rgba($accent,0.4);
    }
    to {
      box-shadow: 0 0 27px 8px rgba($accent,0.6);
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
    .quarter-block {
      background-color: $accent;
      border-color: $accent;
      animation: glow-box 1s ease-in-out infinite alternate;
      color: black;
      &:before, &:after {
        background: $accent;
      }
    }
  }
}

</style>
