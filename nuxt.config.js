export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'linusnoam.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', crossorigin: true, href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', crossorigin: true, href: 'https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap' },
      { rel: 'stylesheet', crossorigin: true, href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      icons: {
        solid: [
          'faChevronDown', 
          'faChevronUp', 
          'faChevronLeft', 
          'faChevronRight', 
          'faBars',
          'faPlayCircle',
          'faTimes'
        ]
      }
    }]
  ],

  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
