const path = require('path');

module.exports = [{
  entry: './src/index.js',
  output: {
    filename: 'tron-player.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  mode: 'development'
}, {
  entry: './src/index.js',
  output: {
    filename: 'tron-player.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  mode: 'production'
}, {
  entry: './src/index.js',
  output: {
    filename: 'tron-player.umd.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  mode: 'development'
}, {
  entry: './src/index.js',
  output: {
    filename: 'tron-player.umd.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  mode: 'production'
}];
