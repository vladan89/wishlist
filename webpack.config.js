var path = require('path');
module.exports = {
    entry: './src/main/js/scripts/app.js',
    devtool: 'sourcemaps',
    cache: false,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }

            }
        ]
    }
};

