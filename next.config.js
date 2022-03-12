/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  images: {
    loader: "custom"
  },
  publicRuntimeConfig: {
    // used in '/components/Link.js/', for more details go to the component itself
    linkPrefix: isProduction ? '/test-gh-pages' : ''
  },
  // basePath: isProduction ? "/test-gh-pages" : "",
  assetPrefix: isProduction ? "/test-gh-pages/" : "",
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})