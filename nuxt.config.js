const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'eusouodaniel' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  manifest: {
    name: 'Portfolio Test eusouodaniel',
    short_name: 'eusouodaniel',
    description: 'Desenvolvedor de software',
    theme_color: '#172b4d',
  },
  meta: {
    mobileAppIOS: true,
    appleStatusBarStyle: '#172b4d',
  },
  loading: { color: '#fff' },
  css: [
    '~assets/eusouodaniel/vendor/nucleo/css/nucleo.css',
    '@fortawesome/fontawesome-free/css/all.css',
    '~assets/eusouodaniel/scss/main.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~assets/transitions.css',
    'highlight.js/styles/gruvbox-dark.css',
  ],
  plugins: ['~/plugins/eusouodaniel/main'],
  modules: [
    '@nuxtjs/axios',
    [
      'bootstrap-vue/nuxt',
      {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
      },
    ],
    '@nuxtjs/pwa',
  ],
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      })
    },
  },
}