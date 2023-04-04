const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    filename: '[name].bundle.[contenthash].js',
    clean: true
  },

  devServer: {
      port: 8081
  },
    
  plugins: [
    new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
            "./add": "./src/utils/add.js",
        }
    }),
    new HtmlWebPackPlugin({
        title: "Remote",
    }),
  ],
};