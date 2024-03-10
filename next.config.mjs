/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // output: 'export',
  // basePath: '/revamp',
  // distDir: '../storage/app/public',
  // distDir: '../public/revamp',
  // trailingSlash: true,
  // assetPrefix: isProd ? 'https://kaunlaran.c3-interactive.ph' :sundefined,
  images: {
    // unoptimized: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none';",
    // unoptimized: false,
    // domains: [
    //   "kaunlaran.c3-interactive.ph" // main
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kaunlaran.c3-interactive.ph',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Preventing timeout while generating page github
  // staticPageGenerationTimeout: 1000,
};

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// module.exports = withNextVideo(nextConfig);

export default nextConfig;
