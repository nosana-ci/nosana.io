<template>
  <section class="section">
    <div class="blur-background">
      <img src="~assets/img/oval-green.png">
      <img src="~assets/img/oval-yellow.png">
    </div>
    <div class="container ">
      <div class="columns is-vcentered" style="min-height: 65vh;">
        <div class="column is-5 has-background-black-blur">
          <h1 class="title is-spaced site-title">
            Nosana CI
          </h1>
          <h2 class="subtitle">
            CI by the people, for the people.
          </h2>
          <p class="block">
            Nosana is for every software developer that values transparency and trust.
            It's a decentralized CI/CD platform on the Solana Network,
            and fueled by the <strong>NOS</strong> token.
          </p>
          <p class="block">
            Run code checks and build container images to earn tokens.
            Or simply use other Nosana nodes to run your pipelines on demand!
          </p>
          <div>
            <a href="https://demo.nosana.io" target="_blank" class="button is-secondary is-wide">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
