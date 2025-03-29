/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Set server to listen on port 3000
  serverRuntimeConfig: {
    port: 3000
  }
};

module.exports = nextConfig; 