const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
  '/',
  '/impressum'
];

const config = Object.assign({}, baseConfig, {
  output: {
    filename: 'bundle.js',
    path: 'dist',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      __PRODUCTION__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new StaticSiteGeneratorPlugin('main', paths, {
      // Properties here are merged into `locals`
      // passed to the exported render function
    })
  ]
});


module.exports = config;
