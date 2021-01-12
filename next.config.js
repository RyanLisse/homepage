module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [439, 632, 756, 828, 1080, 1512],
    imageSizes: [],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./utils/generateSitemap')
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/plausible.js',
        destination: 'https://stats.johnschmidt.cloud/js/plausible.js',
      },
    ]
  },
}
