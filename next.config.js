/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: "dist",
  assetPrefix: "https://mmgheewale.github.io/portfolio/en.html",
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
   //trailingSlash: true
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
}
 
module.exports = nextConfig
