/**
 *  distDir: "dist",
 https://mmgheewale.github.io/portfolio/
 */
/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;

const nextConfig =
  env === "development"
    ? {}
    : {
        output: "export",
        distDir: "dist",
        assetPrefix: "https://mmgheewale.github.io/portfolio/",
      };

module.exports = nextConfig;
