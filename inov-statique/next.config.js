/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/
})

// Nom EXACT du repo GitHub
const repoName = 'NextJS-Bookworm-site'

const nextConfig = {
  reactStrictMode: true,

  // Export statique obligatoire pour GitHub Pages
  output: 'export',

  // GitHub Pages ne supporte pas l'optimisation d'images Next.js
  images: {
    unoptimized: true,
  },

  basePath: "/inov-statique",
  assetPrefix: "/inov-statique",


  // Support MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)