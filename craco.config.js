/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')

module.exports = {
  style: {
    postcss: {
      mode: 'file',
    },
  },
  webpack: {
    plugins: {
      add: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ],
    },
  },
}
