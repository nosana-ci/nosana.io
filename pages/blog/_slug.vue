<template>
  <section class="section">
    <div class="container">
      <article class="content blog">
        <div class="columns is-centered">
          <div class="column is-3">
            <nuxt-link to="/blog">
              &lt; All blogs
            </nuxt-link>
            <ul style="position: sticky; top: 20px">
              <li
                v-for="link of blog.toc"
                :key="link.id"
                :class="{ 'ml-0': link.depth === 2, 'ml-4': link.depth === 3 }"
              >
                <a @click="scrollTo(link.id)">
                  {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
          <div class="column is-6">
            <div
              style="height: 350px; width: 100%"
              :style="{ 'background-image': `url('${blog.img}')` }"
              class="has-background-image"
            />
            <h1>{{ blog.title }}</h1>
            <p class="has-text-accent">
              <span v-if="blog.author">By <b>{{ blog.author }} </b>
              </span>
              <span>- Article created:
                <b>{{ formatDate(blog.createdAt) }}</b></span>
            </p>
            <nuxt-content :document="blog" />
          </div>
          <div class="column is-3">
&nbsp;
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import Prism from '~/plugins/prism';
export default {
  colorMode: 'dark',
  async asyncData ({ $content, params }) {
    const blog = await $content('blog', params.slug).fetch();

    return { blog };
  },
  head () {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blog.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blog.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://nosana.io' + this.blog.img
        },
        {
          name: 'twitter:card',
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:domain',
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'nosana.io'
        },
        {
          name: 'twitter:title',
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.blog.title
        },
        {
          name: 'twitter:description',
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.blog.description
        },
        {
          name: 'twitter:image',
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://nosana.io' + this.blog.img
        }

      ]
    };
  },
  mounted () {
    Prism.highlightAll();
  },
  methods: {
    scrollTo (id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    },
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  }
};
</script>

<style lang="scss">
.blog {
  .number {
    align-items: initial;
    display: inline;
    font-size: 1em;
    height: auto;
    margin-right: 0;
    min-width: initial;
    padding: 0;
    text-align: initial;
    vertical-align: initial;
    background-color: transparent;
    border-radius: initial;
    justify-content: initial;
  }
  .icon-link {
    width: auto;
    height: auto;
    &:after {
      content: "";
      position: absolute;
      left: -23px;
      padding-right: 8px;
      top: 0;
      display: block;
    }
  }
  *:hover > a > .icon-link:after {
    content: "#";
  }
}

// To enable line numbers in codeblocks:

// pre[class*="language-"].line-numbers {
//   position: relative;
//   padding-left: 3.3em;
//   counter-reset: linenumber;
// }

// pre[class*="language-"].line-numbers > code {
//   position: relative;
//   white-space: inherit;
// }

// .line-numbers .line-numbers-rows {
//   position: absolute;
//   pointer-events: none;
//   top: 0;
//   font-size: 100%;
//   left: -3.8em;
//   width: 3em; /* works for line-numbers below 1000 lines */
//   letter-spacing: -1px;
//   border-right: 1px solid #999;

//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// .line-numbers-rows > span {
//   display: block;
//   counter-increment: linenumber;
// }

// .line-numbers-rows > span:before {
//   content: counter(linenumber);
//   color: #999;
//   display: block;
//   padding-right: 0.8em;
//   text-align: right;
// }

div.code-toolbar {
  position: relative;
  >.toolbar {
    position: absolute;
    top: .3em;
    right: .2em;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    .toolbar-item {
      display: inline-block;
    }
    a {
      cursor: pointer;
      color: #bbb;
      font-size: .8em;
      padding: 0 .5em;
      background: #f5f2f0;
      background: rgba(224, 224, 224, 0.2);
      box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);
      border-radius: .5em;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
      &:focus {
        color: inherit;
        text-decoration: none;
      }
    }
    button {
      background: none;
      border: 0;
      color: inherit;
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      color: #bbb;
      font-size: .8em;
      padding: 0 .5em;
      background: #f5f2f0;
      background: rgba(224, 224, 224, 0.2);
      box-shadow: 0 2px 0 0 rgba(0,0,0,0.2);
      border-radius: .5em;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
      &:focus {
        color: inherit;
        text-decoration: none;
      }
    }
    span {
      cursor: pointer;
      color: #bbb;
      font-size: .8em;
      padding: 0.2em .5em;
      display: block;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
      &:focus {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  &:hover {
    >.toolbar {
      opacity: 1;
    }
  }
}
</style>
