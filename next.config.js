/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure for static export
  output: 'export',
  // Add your repository name here if your repo is not username.github.io
  // Example: if your repo is my-project, use '/my-project'
  basePath: process.env.NODE_ENV === 'production' ? '/todo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/todo' : '',
  // Set server to listen on port 3000
  serverRuntimeConfig: {
    port: 3000
  }
};

module.exports = nextConfig; 