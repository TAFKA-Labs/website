require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: './.env',
        systemvars: true,
      }),
    ]

    return config
  },
  exportPathMap: defaultPathMap => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/post/greetings-to-2019': {
        page: '/post',
        query: { slug: 'greetings-to-2019' },
      },
      '/post/comparing-graphql-baas': {
        page: '/post',
        query: { slug: 'comparing-graphql-baas' },
      },
    }
  },
}
