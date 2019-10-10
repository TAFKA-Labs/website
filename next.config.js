require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
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
})
