<template>
  <div>
    <!--    <div class="blur-background">-->
    <!--      <img src="~assets/img/oval-green.png">-->
    <!--      <img src="~assets/img/oval-yellow.png">-->
    <!--    </div>-->
    <home-intro />
    <section class="section">
      <div class="container">
        <partners />
        <three-blocks class="mt-6" />
      </div>
    </section>
    <run />
    <section class="section">
      <div class="container">
        <roadmap />
        <!--        <slogan-block />-->
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
</style>
