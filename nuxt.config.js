export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: true,
    async routes () {
      const { $content } = require('@nuxt/content');
      const files = await $content({ deep: true }).only(['path']).fetch();
      return files.map(file => file.path === '/index' ? '/' : file.path);
    }
  },
  // router: {
  //   base: '/frontend/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Nosana',
    title: 'Nosana',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Next Gen CI/CD' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nosana - The Future of GPU Compute'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'The most cost-effective GPU grid, with zero lock-in. Developed and customized for AI inference workloads. Consumers, miners, and businesses can monetize their idle hardware by becoming a Nosana Node. Powered by Solana and the $NOS token.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nosana.io/img/screenshot-website.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/scss/global.scss'
  ],

  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/countdown.js', mode: 'client' },
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/calendly.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    '@nuxtjs/svg'
  ],
  googleAnalytics: {
    id: 'UA-210322595-1'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        additionalData: '@import \'~assets/scss/variables.scss\';'
      }
    }
  }
};
