<template>
  <section class="section">
    <div class="container">
      <div class="title is-2">
        Brand Kit
      </div>
      <p class="has-limited-width-small has-text-justified block">
        This is the brand kit of Nosana. This style guide
        includes logo use and colors.
      </p>
      <div class="title is-6 mt-4">
        LOGO
      </div>
      <div class="mb-5">
        Use of the Nosana logo
      </div>
      <div class="is-inline-block  has-text-centered mr-4">
        <div class="has-border has-radius p-5">
          <img
            src="~assets/img/Nosana_Logo_horizontal_color_white.svg"
            style="height:70px;"
          >
        </div>
        <div class="subtitle is-6 mb-0">
          Logo Horizontal
        </div>
        <a class="is-size-7 has-text-accent" target="_blank" href="/img/Nosana_Logo_horizontal_color_white.svg" download>.svg</a>
      </div>
      <div class="is-inline-block  has-text-centered mr-4 ">
        <div class="has-border has-radius p-5">
          <img
            src="~assets/img/Nosana_Logo_vertical_color_white.svg"
            style="height:150px;"
          >
        </div>
        <div class="subtitle is-6 mb-0">
          Logo Vertical
        </div>
        <a class="is-size-7 has-text-accent" target="_blank" href="/img/Nosana_Logo_vertical_color_white.svg" download>.svg</a>
      </div>
      <div class="title is-6 mt-6">
        COLOR PALETTE
      </div>
      <div class="color">
        <div class="menu-label my-0">
          <small>accent</small>
        </div>
        <div style="background: #5FFF00" class="has-radius color-square has-text-black is-size-4" @click="copyToClipboard('#5FFF00')">
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
        <div style="background: #010c04; border: 1px solid white;" class="has-radius color-square has-text-white is-size-4" @click="copyToClipboard('#010c04')">
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
        <div style="background: white;" class="has-radius color-square has-text-black is-size-4" @click="copyToClipboard('#FFFFFF')">
          <i class="far fa-copy" />
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">HEX</small> #FFFFFF
        </div>
        <div class="menu-label my-0">
          <small class="has-text-weight-normal">RGB</small> (255, 255, 255)
        </div>
      </div>
      <br><br>
      <div class="subtitle is-4 mt-4">
        <span class="has-text-accent">03</span> Buttons
      </div>
      <div class="subtitle is-5">
        All buttons styles used for Nosana
      </div>
      <button class="button is-accent">
        <span v-if="example">{{ example }}</span><span v-else>Solid</span>
      </button>
      <button class="button is-accent is-active ml-2">
        <span v-if="example">{{ example }}</span><span v-else>Hover</span>
      </button>
      <br><br>
      <button class="button is-accent is-outlined">
        <span v-if="example">{{ example }}</span><span v-else>Outlined</span>
      </button>
      <button class="button is-accent is-outlined is-hovered ml-2">
        <span v-if="example">{{ example }}</span><span v-else>Hover</span>
      </button>
      <br><br>
      <div class="buttons">
        <button class="button is-accent  is-small">
          <span v-if="example">{{ example }}</span><span v-else>Small</span>
        </button>
        <button class="button is-accent mx-2">
          <span v-if="example">{{ example }}</span><span v-else>Normal</span>
        </button>
        <button class="button is-accent mx-2 is-medium">
          <span v-if="example">{{ example }}</span><span v-else>Medium</span>
        </button>
        <button class="button is-accent mx-2 is-large">
          <span v-if="example">{{ example }}</span><span v-else>Large</span>
        </button>
      </div>
      <button class="button is-accent is-loading">
        <span v-if="example">{{ example }}</span><span v-else>Loading</span>
      </button>
      <button class="button is-accent" disabled>
        <span v-if="example">{{ example }}</span><span v-else>Disabled</span>
      </button>
      <br><br>

      <div class="subtitle is-4 mt-4">
        <span class="has-text-accent">04</span> Typography
      </div>
      <div class="subtitle is-5">
        Below you will find the typography for Nosana. It includes a
        preview and the css values that are used, like font-family, font-size, font-weight and line-height etc.
      </div>
      <div>
        - Main Font: <a href="https://fonts.google.com/specimen/Space+Mono" target="_blank">Space Mono</a>
      </div>
      <div class="table-container">
        <table class="typography table">
          <thead>
            <tr>
              <th class="text-left">
                CSS
              </th>
              <th class="text-left">
                Class
              </th>
              <th style="min-width:300px" class="text-left">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2">
                <pre class="grey&#45;&#45;text">
font-family: 'Space Mono', monospace;
font-weight: 400;
font-size: 32px;
line-height: 1.125;</pre>
              </td>
              <td><code>.title</code></td>
              <td class="title py-3">
                Main Header H1
              </td>
            </tr>
            <tr>
              <td class="py-2">
                <pre class="grey&#45;&#45;text">
font-family: 'Space Mono', monospace;
font-weight: 400;
font-size: 20px;
line-height: 1.25;</pre>
              </td>
              <td><code>.subtitle</code></td>
              <td class="subtitle py-3">
                SubHeading H2 <b>Bolder</b>
              </td>
            </tr>
            <tr>
              <td class="py-2">
                <pre class="grey&#45;&#45;text">
font-family: 'Space Mono', monospace;
color: #363636;
font-size: 16px;
font-weight: 400;</pre>
              </td>
              <td><code>body</code></td>
              <td class="body-1 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
                scelerisque quam. Morbi blandit quam commodo viverra malesuada. Duis quis tortor porta,
                tincidunt quam sed, auctor lacus.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <press class="mt-6" />
  </section>
</template>

<script>

export default {
  name: 'Brand',
  colorMode: 'dark',
  data () {
    return {
      example: null
    }
  },
  mounted () {
    const hoverButtons = document.querySelectorAll('.hoverButton')
    for (const hoverButton of hoverButtons) {
      hoverButton.focus()
    }
  },
  methods: {
    copyToClipboard (text) {
      const reflink = document.createElement('input')
      reflink.setAttribute('value', text)
      document.body.appendChild(reflink)
      try {
        reflink.select()
        document.execCommand('copy')
        // const msg = successful ? 'successful' : 'unsuccessfully'
        // this.$snackbar.show({text: text + ' is copied ' + msg, color: successful ? 'success' : 'error'});
      } catch (err) {
        console.log(err)
        alert('unable to copy')
      }
      document.body.removeChild(reflink)
    }
  }
}
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
    display:flex;
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

.typography {
  code {
    white-space: nowrap;
  }
}
</style>
