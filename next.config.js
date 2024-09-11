/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio/en',
  assetPrefix: 'https://mmgheewale.github.io/portfolio/en/',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig

/*
* @type {import('next').NextConfig} 

const env = process.env.NODE_ENV;

const nextConfig =
  env === "development"
    ? {}
    : {
        output: "export",
        assetPrefix: "https://www.maazgheewale.com/",
      };

module.exports = nextConfig;
*/