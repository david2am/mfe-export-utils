const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cool Example'
    })
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single'
  }
}