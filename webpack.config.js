const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "https://bouchraakl.github.io/microfrontend-remote/",
  },
  mode: "development",
  devServer: {
    port: 3001,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroFrontend": "./src/MicroFrontend",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "18.2.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
