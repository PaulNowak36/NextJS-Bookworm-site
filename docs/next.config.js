/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/
})

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)