require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = {
  // assetPrefix: process.env.NODE_ENV === 'prod' ? '/website' : '',
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
}
