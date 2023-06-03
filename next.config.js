/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
   images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '*'
      },
    ],
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;