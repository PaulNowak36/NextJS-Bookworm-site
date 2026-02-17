import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

// Nom EXACT du repo GitHub
const repoName = 'NextJS-Bookworm-site'
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique obligatoire pour GitHub Pages
  output: 'export',

  // GitHub Pages ne supporte pas l'optimisation d'images Next.js
  images: {
    unoptimized: true,
  },

  // BasePath seulement en prod (sinon ça casse localhost)
  ...(isProd && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  // Support MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)