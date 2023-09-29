module.exports = {
  style: {
    postcss: {
      mode: 'file',
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.optimization = {
        minimize: false,
        minimizer: [],
        nodeEnv: 'development',
      }

      return webpackConfig
    },
  },
}
