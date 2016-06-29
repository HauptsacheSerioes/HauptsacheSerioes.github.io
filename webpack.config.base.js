const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'app/')
        ],
        exclude: /(node_modules|bower_components|dist)/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
