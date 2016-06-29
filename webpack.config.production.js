const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
  '/',
  '/impressum'
];

const config = Object.assign({}, baseConfig, {
  output: {
    filename: 'index.js',
    path: 'dist',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      _: 'underscore'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new StaticSiteGeneratorPlugin('main', paths, {
      // Properties here are merged into `locals`
      // passed to the exported render function
    })
  ]
});

config.module.loaders.push({
  test: /\.less$/,
  loader: 'style!css!less',
  lessPlugins: [
    new LessPluginCleanCSS({ advanced: true })
  ]
});

module.exports = config;
