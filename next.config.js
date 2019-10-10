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
}
