const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "./"),
          ],
    },
    module: {
        rules: [
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
};
