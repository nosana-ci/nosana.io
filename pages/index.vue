<template>
  <div>
    <section class="section home-block">
      <!--    <div class="blur-background">-->
      <!--      <img src="~assets/img/oval-green.png">-->
      <!--      <img src="~assets/img/oval-yellow.png">-->
      <!--    </div>-->
      <div class="container">
        <div class="columns mt-6" style="min-height: 75vh">
          <div class="column has-background-black-blur-false">
            <h1 class="title is-spaced site-title">
              Nosana CI
            </h1>
            <h2 class="subtitle">
              Community powered CI and CD
            </h2>
            <div class="has-limited-width-small">
              <p class="block">
                Nosana is for every software developer that values transparency and trust.
                It's a decentralized CI/CD platform on the Solana Network,
                and fueled by the <strong>NOS</strong> token.
              </p>
              <p class="block">
                Run code checks and build container images to earn tokens.
                Or simply use other Nosana nodes to run your pipelines on demand!
              </p>
            </div>
            <div class="mt-6">
              <a href="https://demo.nosana.io" target="_blank" class="button is-accent is-wide" data-atropos-offset="10">
                <b>Demo</b>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="~assets/img/ring_animated.svg" width="45%" class="is-hidden-touch" style="position: absolute; top: 200px; right:0;">
    </section>
    <section class="section">
      <div class="container">
        <slogan-block />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  colorMode: 'dark'
}
</script>

<style lang="scss" scoped>
@keyframes moveX {
  0% {
    left: 10%;
  }
  100% {
    left: 90%;
  }
}
@keyframes moveY {
  0% {
    top: 10%;
  }

  100% {
    top: 90%;
  }
}
.home-block {
  background-image: url('~assets/img/nosana_bg.png');
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: bottom right -30px;
}
.has-background-black-blur {
  position: relative;
  * {
    position: relative;
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 100%;
    opacity: .7;
    top: 0;
    filter: blur(50px);
    left: 0;
    background: #000;
  }
}
.blur-background {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: 1;
  will-change: transform;
  -webkit-filter: blur(40px);
  filter: blur(40px);
  img {
    position: absolute;
    width: 60%;
    height: auto;
    will-change: transform;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    &:nth-child(1) {
      animation: moveX 38s linear 0s infinite alternate-reverse, moveY 24s linear 0s infinite alternate-reverse;
    }
    &:nth-child(2) {
      animation: moveX 34s linear 0s infinite alternate, moveY 15s linear 0s infinite alternate-reverse;
    }
    &:nth-child(3) {
      animation: moveY 38s linear 0s infinite alternate-reverse, moveX 24s linear 0s infinite alternate-reverse;
    }
  }
}

.site-title {
  font-size: 60px;
}
</style>
