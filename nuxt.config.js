require('dotenv').config()

export default {
  modules: [
    // Simple usage
    '@nuxtjs/dotenv',

    // With options
    ['@nuxtjs/dotenv', { /* module options */ }],
 ],
 serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],
  plugins: [
    {
      src: '~/plugins/infinite-scroll.js', mode: 'client'
    }
  ]
}