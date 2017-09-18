const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/scss/_variables.scss')
    ]
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Adrian Payne Music | Cover songs and shenanigans',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'All about me, Adrian Payne, and my aspirations to become a great singer one way or another. Support me on Patreon!' },
      { name: 'google-site-verification', content: '2gEx10a38rEv1bE30P_NPYqHtTXpK8w8uHwVRrIHxzw' },
      { property: 'og:title', content: 'Adrian Payne Music | Cover songs and shenanigans' },
      { property: 'og:description', content: 'All about me, Adrian Payne, and my aspirations to become a great singer one way or another. Support me on Patreon!' },
      { property: 'og:image', content: 'https://www.adrianpaynemusic.com/images/og-image.jpg' },
      { property: 'og:url', content: 'https://www.adrianpaynemusic.com' },
      { property: 'og:type', content: 'website' }
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Shared CSS rules
  */
  css: [
    '~/assets/scss/_global.scss'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/vue-analytics.js', ssr: false },
    { src: '~plugins/vue-i18n.js' }
  ],
  /*
  ** Router configuration
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-analytics',
      'vue-i18n',
      'axios',
      'timing.js',
      'jump.js'
    ],
    postcss: [
      require('autoprefixer')()
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /*
      ** For including scss variables file
      */
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  }
}
