// Webpack config file
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './assets/js/components/Index.jsx',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/assets',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8000'
    })
  ]
};

