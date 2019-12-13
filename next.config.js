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
      env: {
        PROJECT_DIRNAME: __dirname,
      },
      pageExtensions: ['js', 'jsx', 'mdx'],
    })
  )
)
