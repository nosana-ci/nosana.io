<template>
  <section class="section">
    <div class="container">
      <div class="title is-2 mt-5">
        Brand Assets
      </div>
      <p class="has-limited-width is-size-3 has-text-weight-semibold" style="color: #999;">
        This is the brand kit of Nosana. This style guide includes logo use and
        colors.
      </p>
      <div class="columns mt-5 is-multiline">
        <div class="column has-text-centered is-one-third">
          <div class="has-radius has-background-grey-lighter">
            <img src="~assets/img/logotype.svg">
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <div class="subtitle is-6 mb-0 has-text-weight-semibold">
              Logotype
            </div>
            <a
              class="is-size-7 ml-5 has-text-accent has-text-weight-semibold"
              target="_blank"
              href="/img/logotype.svg"
              download
            >Download</a>
          </div>
        </div>
        <div class="column has-text-centered is-one-third">
          <div class="has-radius has-background-grey-lighter">
            <img src="~assets/img/logomark.svg">
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <div class="subtitle is-6 mb-0 has-text-weight-semibold">
              Logomark
            </div>
            <a
              class="is-size-7 ml-5 has-text-accent has-text-weight-semibold"
              target="_blank"
              href="/img/logomark.svg"
              download
            >Download</a>
          </div>
        </div>
        <div class="column has-text-centered is-one-third">
          <div class="has-radius has-background-grey-lighter">
            <img src="~assets/img/wordmark.svg">
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <div class="subtitle is-6 mb-0 has-text-weight-semibold">
              Wordmark
            </div>
            <a
              class="is-size-7 ml-5 has-text-accent has-text-weight-semibold"
              target="_blank"
              href="/img/wordmark.svg"
              download
            >Download</a>
          </div>
        </div>
        <div class="column has-text-centered is-one-half">
          <div class="has-radius has-background-grey-lighter">
            <img src="~assets/img/safezone1.svg">
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <div class="subtitle is-6 mb-0 has-text-weight-semibold">
              Safezone
            </div>
            <a
              class="is-size-7 ml-5 has-text-accent has-text-weight-semibold"
              target="_blank"
              href="/img/safezone1.svg"
              download
            >Download</a>
          </div>
        </div>
        <div class="column has-text-centered is-one-half">
          <div class="has-radius has-background-grey-lighter">
            <img src="~assets/img/safezone2.svg">
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <div class="subtitle is-6 mb-0 has-text-weight-semibold">
              Safezone
            </div>
            <a
              class="is-size-7 ml-5 has-text-accent has-text-weight-semibold"
              target="_blank"
              href="/img/safezone2.svg"
              download
            >Download</a>
          </div>
        </div>
      </div>
      <div class="color">
        <div class="menu-label my-0">
          <small>accent</small>
        </div>
        <div
          style="background: #5fff00"
          class="has-radius color-square has-text-black is-size-4"
          @click="copyToClipboard('#5FFF00')"
        >
          <i class="far fa-copy" />
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">HEX</small> #5FFF00
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">RGB</small>(95, 255, 0)
        </div>
      </div>
      <div class="color">
        <div class="menu-label my-0">
          <small>background</small>
        </div>
        <div
          style="background: #010c04; border: 1px solid white"
          class="has-radius color-square has-text-white is-size-4"
          @click="copyToClipboard('#010c04')"
        >
          <i class="far fa-copy" />
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">HEX</small> #010c04
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">RGB</small> (1, 12, 4)
        </div>
      </div>
      <div class="color">
        <div class="menu-label my-0">
          <small>text</small>
        </div>
        <div
          style="background: white"
          class="has-radius color-square has-text-black is-size-4"
          @click="copyToClipboard('#FFFFFF')"
        >
          <i class="far fa-copy" />
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">HEX</small> #FFFFFF
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">RGB</small> (255, 255, 255)
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Brand',
  colorMode: 'light',
  data () {
    return {
      example: null
    };
  },
  methods: {
    copyToClipboard (text) {
      const reflink = document.createElement('input');
      reflink.setAttribute('value', text);
      document.body.appendChild(reflink);
      try {
        reflink.select();
        document.execCommand('copy');
        // const msg = successful ? 'successful' : 'unsuccessfully'
        // this.$snackbar.show({text: text + ' is copied ' + msg, color: successful ? 'success' : 'error'});
      } catch (err) {
        console.log(err);
        alert('unable to copy');
      }
      document.body.removeChild(reflink);
    }
  }
};
</script>
<style lang="scss" scoped>
.color {
  display: inline-block;
  margin-right: 25px;
  min-width: 65px;
  &.color-small {
    margin-right: 10px;

    .color-square {
      width: 50px;
      height: 50px;
    }
    .color-text {
      line-height: 14px;
    }
  }
  .color-square {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    i {
      opacity: 0;
      transition: 0.2s;
    }
    &:hover {
      i {
        opacity: 1;
      }
    }
    height: 100px;
  }
}

.has-text-centered.column {
  .has-background-grey-lighter {
    height: 200px;
  }
}
</style>
