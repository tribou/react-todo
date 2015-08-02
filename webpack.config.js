// Webpack config file
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './assets/js/components/Index.jsx',
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:8000'
    })
  ]
};

