<template>
  <div>
    <home-intro />
    <section class="section">
      <div class="container">
        <solanium class="my-6" />
        <partners />
        <end-users />
      </div>
    </section>
    <!-- <run class="my-6" /> -->
    <section class="section mt-6">
      <div class="container">
        <div class="has-text-centered">
          <h2 class="title ">
            Project Galactica
          </h2>
          <h4 class="subtitle">
            commitment
          </h4>
        </div>
        <three-blocks />
        <roadmap class="mt-6" />
        <latest-news class="mt-6 pb-6" />
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
@import 'bulma/sass/utilities/mixins';

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
</style>
