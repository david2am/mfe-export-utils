const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const remoteURL = 'http://localhost:8081'

module.exports = {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    clean: true,
    publicPath: 'http://localhost:8082/'
  },

  plugins: [
    new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
            remote: `remote@${remoteUrl}/remoteEntry.js`,
        },
    }),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
    }),
  ],

  devServer: {
    port: 8082,
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}