/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: true
  }
};

module.exports = nextConfig;
