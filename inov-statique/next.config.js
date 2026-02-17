/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/
})

const repoName = 'NextJS-Bookworm-site'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  images: {
    unoptimized: true,
  },

  // ✅ basePath UNIQUEMENT en production (GitHub Pages)
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)