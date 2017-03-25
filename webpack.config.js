var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    return {
        entry: {
            index: './src/index.js'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        },
        plugins: [new HtmlWebpackPlugin(
            {
                template:"index.html"
            }
        )],
        module: {
            rules: [{
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],
            }]
        }
    }
}