var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    devServer: {
        inline: true,
        port: 3000
    },
    entry: {
        index: ['./src/hello.js'],
        main: ['./src/main.js'],
        home: ['./src/app/home.js']
    },
    output: {
        path: __dirname,
        filename: 'build/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel'
        }]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
