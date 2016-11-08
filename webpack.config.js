var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    devServer: {
        inline: true,
        port: 2000
    },
    entry: {
        home: ['./src/containers/Home/index.js'],
        note: ['./src/containers/Note/index.js']
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
        // new webpack.NoErrorsPlugin()
//         new HtmlWebpackPlugin({
//             title: 'home',
//             filename: './app/home.html', //生成的html存放路径，相对于path
//             template: './src/template/template.html', //html模板路径
//             inject: 'body', //js插入的位置，true/'head'/'body'/false
//             hash: true, //为静态资源生成hash值
//             minify: { //压缩HTML文件    
// //                 removeComments: true, //移除HTML中的注释
// //                 collapseWhitespace: false //删除空白符与换行符
//             }
//         })

    ]
};

//多文件入口，html模版生成
for (var name in config.entry) {
    if (name !== 'lib') {
        config.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            title: name,
            // chunks: ['lib', name], //需要引入的chunk，不配置就会引入所有页面的资源
            filename: './app/' + name + '.html', //生成的html存放路径，相对于path
            template: './src/template/template.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            minify: { //压缩HTML文件    
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }));
    }
}

module.exports = config