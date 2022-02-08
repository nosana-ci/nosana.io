<template>
  <div class="roadmap-container pb-6 my-6">
    <h2 class="title has-text-centered">
      Roadmap
    </h2>
    <div class="roadmap py-6 mb-6">
      <div
        v-for="item in roadmap"
        :key="item.milestone"
        :class="'roadmap-item ' + item.class"
      >
        <atropos
          :options="{ highlight: false, rotateYMax: 0, rotateTouch: false }"
          class="my-atropos"
        >
          <div class="quarter-block has-radius-small p-3">
            <div class="quarter">
              {{ item.date }}
              <span class="is-pulled-right is-size-6">{{
                item.year ? item.year : 2022
              }}</span>
            </div>
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="item.milestone" />
            <ul v-if="item.points" class="is-hidden-desktop">
              <li v-for="point in item.points" :key="point">
                {{ point }}
              </li>
            </ul>
          </div>
        </atropos>
        <ul v-if="item.points" class="is-hidden-touch">
          <li v-for="point in item.points" :key="point">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roadmap: [
        {
          date: '1.',
          milestone:
            'Complete demo for Solana Foundation & finalize release strategy for the incentivized Testnet and Mainnet',
          class: 'is-completed',
          year: 'Done'
        },
        {
          date: '2.',
          milestone: 'Further development, Private fundraise',
          class: 'is-completed',
          year: 'Done'
        },
        {
          date: '3.',
          milestone:
            'Complete Smart Contract security audit, conduct <b>Solanium Public Sale</b>, and distribute $NOS tokens',
          class: 'is-completed',
          year: 'Done'
        },
        {
          date: '4.',
          milestone:
            'Complete the Incentivized Testnet - mining & staking module',
          class: 'is-active',
          year: ' '
        },
        {
          date: '5.',
          milestone: 'Incentivized Testnet goes Live',
          class: '',
          year: ' '
        },
        {
          date: '6.',
          milestone: 'First Phase Nosana Launch: Test Suite',
          class: '',
          year: ' '
        },
        {
          date: '7.',
          milestone: 'Second Phase Nosana Launch: Deployment Suite',
          class: '',
          year: ' '
        },
        {
          date: '8.',
          milestone: 'Third Phase Nosana Launch: DAO',
          class: '',
          year: ' '
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.roadmap-container {
  background: url("~assets/img/field.svg") no-repeat;
  background-position: bottom center;
  background-size: contain;
}
.my-atropos {
  max-width: 100%;
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
    left: -2px;
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
  .quarter-block {
    min-height: 100px;
    width: 365px;
    max-width: 100%;
    border: 1px solid $accent;
    color: $accent;
    margin: 25px 25px 25px 60px;
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
    .quarter-block {
      background-color: $accent;
      border-color: $accent;
      animation: glow-box 1s ease-in-out infinite alternate;
      color: black;
      &:before,
      &:after {
        background: $accent;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .roadmap-item {
    .quarter-block {
      margin: 25px 25px 25px -1px;
    }
  }
}
</style>
