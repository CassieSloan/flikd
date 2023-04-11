/** @type {import('next').NextConfig} */
module.exports = {
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
}