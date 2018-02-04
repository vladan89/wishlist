var path = require('path');
var CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/main/js/scripts/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: path.resolve(__dirname, "src/main/resources/static/built"),
        filename: "bundle.js",
        publicPath:"src/main/resources/static/built"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/main/resources/templates/index.html"
        }),
        new CleanWebpackPlugin(["dist"])
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        index: "./src/main/resources/templates/index.html"
    }
};
