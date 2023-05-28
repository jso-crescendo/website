/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: for use with docker use -> output: 'standalone',
  images: {
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
