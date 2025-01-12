const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "react-app.js",
    path: path.resolve(__dirname, 'dist'),
    library: 'reactApp',  // Expose the library name for access
    libraryTarget: 'umd',  // UMD allows compatibility with various module systems (including single-spa and others)
    globalObject: 'this',  // Necessary for Node.js environments
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // match .js or .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle .css files
        use: ["style-loader", "css-loader"], // Inject CSS into the DOM and process CSS
      },
      {
        test: /\.svg$/, // Handle .svg files
        type: 'asset/resource', // Webpack 5 - asset module for SVG files
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3001,
    hot: false,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*',  // Allow all origins
    },
  },
};
