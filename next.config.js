/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      }
    ],
    minimumCacheTTL: 15000000
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
