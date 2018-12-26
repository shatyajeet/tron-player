const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tron-player.[hash].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3333
  },
  devtool: 'cheap-inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: false,
      title: 'Tron Player Demo',
      template: './public/index.html'
    })
  ]
};
