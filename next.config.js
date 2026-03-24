/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gigglenshine-site',
  assetPrefix: '/gigglenshine-site',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

module.exports = nextConfig;
