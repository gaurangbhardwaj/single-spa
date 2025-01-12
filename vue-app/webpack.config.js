const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "vue-app.js",
    path: path.resolve(__dirname, 'dist'),
    library: 'vueApp',  // Expose the library name for access
    libraryTarget: 'umd',  // UMD allows compatibility with various module systems (including single-spa and others)
    globalObject: 'this',  // Necessary for Node.js environments
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
    headers: {
      'Access-Control-Allow-Origin': '*',  // Allow all origins
    },
  },
};
