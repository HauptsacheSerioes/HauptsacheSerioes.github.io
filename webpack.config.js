const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.assign({}, baseConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 3333
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __PRODUCTION__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

config.module.loaders.push({
  test: /\.less$/,
  loader: 'style!css!less'
});


module.exports = config;
