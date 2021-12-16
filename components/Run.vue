<template>
  <div style="position: relative">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5" />
          <div class="column">
            <h2 class="title">
              Give power back to the end users
            </h2>
            <p>
              Our vision is to democratize CPU cloud computing. Nosana connects blockchain developers and services to a global pool of computing power. As a result, everyone will be able to rent out their spare CPU to power the next Metaverse. Our first project (Galactica) is focused on providing the compute power required to run projects' CI/CD infrastructure. So they no longer have to rely on Big Tech for their computational needs.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img src="~assets/img/spiral.svg" width="35%" class="spiral">
  </div>
</template>

<style lang="scss" scoped>
@import 'bulma/sass/utilities/mixins';
.spiral {
  position: absolute;
  top: 0px;
  left:0;
}
@include touch {
  .spiral {
    position: relative;
    width: 100%;
  }
}
</style>
