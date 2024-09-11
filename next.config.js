/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: "dist",
  assetPrefix: "https://mmgheewale.github.io/portfolio/",
  trailingSlash: true, // Ensure paths have trailing slashes like `/en/`

  async redirects() {
    return [
      {
        source: '/',
        destination: '/en.html',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
