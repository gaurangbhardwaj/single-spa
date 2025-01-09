const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "vue-app.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[hash].[ext]',
                      outputPath: 'assets/images',
                  },
              },
          ],
      },
    ]
},
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 3002,
    hot: false,
    liveReload: true,
  },
};
