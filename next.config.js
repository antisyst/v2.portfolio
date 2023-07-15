/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader'],
    });
   
    
    
    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig
