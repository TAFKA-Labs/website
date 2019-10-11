require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withCSS({
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
)
