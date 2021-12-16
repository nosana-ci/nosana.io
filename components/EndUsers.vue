<template>
  <div class="columns is-vcentered">
    <div class="column is-6">
      <grid class="mt-6" />
    </div>
    <div class="column is-offset-1 is-5">
      <h2 class="title">
        Give power back to the end users
      </h2>
      <p>
        Our vision is to democratize CPU cloud computing. Nosana connects blockchain developers and services to a global pool of computing power. As a result, everyone will be able to rent out their spare CPU to power the next Metaverse. Our first project (Galactica) is focused on providing the compute power required to run projects' CI/CD infrastructure. So they no longer have to rely on Big Tech for their computational needs.
      </p>
    </div>
  </div>
</template>

<script>
import Grid from '~/assets/img/grid.svg?inline'

export default {
  components: { Grid }
}
</script>

<style lang="scss">

@keyframes move-line {
  to {
    stroke-dashoffset: 100%;
  }
}
.cls-5,.cls-6{
  stroke-width:3px;
  stroke-dasharray: 0 10;
  animation: move-line 25s linear infinite;
}
</style>
