require('dotenv').config()
const withCSS = require('@zeit/next-css')
const frontmatter = require('remark-frontmatter')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatter],
  },
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withMDX(
    withCSS({
      pageExtensions: ['js', 'jsx', 'mdx'],
      // webpack: (config, { isServer }) => {
      //   if (!isServer) {
      //     config.resolve.alias = {
      //       ...config.resolve.alias,
      //       'mongodb-stitch-server-sdk': 'mongodb-stitch-browser-sdk',
      //     }
      //   }
      //   return config
      // },
    })
  )
)
