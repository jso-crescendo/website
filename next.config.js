/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: for use with docker use -> output: 'standalone',
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    serverActions: true
  },
  async redirects() {
    return [
      {
        source: '/sponsoren',
        destination: '/orchester',
        permanent: true,
      },
      {
        source: '/orchester/:all*',
        destination: '/orchester',
        permanent: true,
      },
      {
        source: '/galerie',
        destination: '/',
        permanent: true,
      },
      {
        source: '/galerie/:all*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/intern',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value:
              "default-src 'self'; script-src 'none'; script-src-elem 'self' 'unsafe-inline' https://analytics.jso-crescendo.ch/ https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; connect-src 'self' https://analytics.jso-crescendo.ch; font-src 'self'; frame-src 'self' https://challenges.cloudflare.com https://www.youtube-nocookie.com; img-src 'self' data:; manifest-src 'self'; media-src 'self'; report-uri https://7b4e0a451e15319a60f0c0a6009f3932.report-uri.com/r/d/csp/reportOnly; worker-src 'none';",
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
