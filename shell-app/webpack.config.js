const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "./"),
          ],
          alias: {
            // Fixing the alias for single-spa and systemjs
            'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/es2015/system/single-spa.min.js'),
            'systemjs': path.resolve(__dirname, 'node_modules/systemjs/dist/system.js'), // Correct alias for systemjs
        },
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
