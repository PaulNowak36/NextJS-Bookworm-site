import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

// Nom du repo GitHub (modifiable via variable d'environnement)
const repoName = process.env.GITHUB_PAGES_REPO || 'NextJS-Bookworm-site'

// N'active le préfixe GitHub Pages que pour les builds dédiés
const isGithubPagesBuild =
  process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique obligatoire pour GitHub Pages
  output: 'export',

  // GitHub Pages ne supporte pas l'optimisation d'images Next.js
  images: {
    unoptimized: true,
  },

  // BasePath seulement pour GitHub Pages (sinon ça casse localhost)
  ...(isGithubPagesBuild && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),

  // Support MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)