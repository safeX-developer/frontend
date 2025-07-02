/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
  experimental: {
    optimizeFonts: false,
  },
  // If you're using static export, keep these:
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
