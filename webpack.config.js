// var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var path = require('path');
//
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// const SRC = path.resolve(__dirname, 'src')
//
// var config = {
//     // devServer: {
//     //     inline: true,
//     //     port: 2000
//     // },
//     // entry: './src/containers/Note/index.js',
// 	// output: {
// 	// 	path: path.join(__dirname,"./src/containers/out"),
// 	// 	filename: "index.js",
// 	// 	publicPath: "./src/containers/out"
// 	// },
//     entry: {
//         index: [path.resolve(SRC, 'index')]
//     },
//     // {
//     //     // home: ['./src/containers/Home/index.js'],
//     //     // note: ['./src/containers/Note/index.js']
//     //     'webpack/hot/dev-server',
//     //     'webpack-hot-middleware/client',
//     //     index: [path.resolve(SRC, 'index')]
//     // },
//     output: {
//         path: __dirname,
//         filename: 'build/[name].js'
//     },
//     // output: {
//     //     path: '/',
//     //     publicPath: 'http://localhost:3000/src/',
//     //     filename: 'bundle.js'
//     // },
//
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             query: {
//                 plugins: []
//             }
//         }, {
//             test: /\.jsx$/,
//             loader: 'babel'
//         }, {
//             test: /\.scss/,
//             loader: 'style!css!sass'
//         }]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin()
//         // new webpack.HotModuleReplacementPlugin(),
//         // new webpack.NoErrorsPlugin()
// //         new HtmlWebpackPlugin({
// //             title: 'home',
// //             filename: './app/home.html', //生成的html存放路径，相对于path
// //             template: './src/template/template.html', //html模板路径
// //             inject: 'body', //js插入的位置，true/'head'/'body'/false
// //             hash: true, //为静态资源生成hash值
// //             minify: { //压缩HTML文件
// // //                 removeComments: true, //移除HTML中的注释
// // //                 collapseWhitespace: false //删除空白符与换行符
// //             }
// //         })
//
//     ]
// };
//
// //多文件入口，html模版生成
// for (var name in config.entry) {
//     if (name !== 'lib') {
//         config.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
//             // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
//             title: name,
//             // chunks: ['lib', name], //需要引入的chunk，不配置就会引入所有页面的资源
//             filename: './app/' + name + '.html', //生成的html存放路径，相对于path
//             template: './template/template.html', //html模板路径
//             inject: 'body', //js插入的位置，true/'head'/'body'/false
//             hash: true, //为静态资源生成hash值
//             minify: { //压缩HTML文件
//                 removeComments: true, //移除HTML中的注释
//                 collapseWhitespace: false //删除空白符与换行符
//             }
//         }));
//     }
// }
//
// // if (process.env.HOT) {
// //   config.devtool = 'eval';
// //   // config.entry['index'].unshift('react-native-webpack-server/hot/entry');
// //   config.entry['index'].unshift('webpack/hot/only-dev-server');
// //   config.entry['index'].unshift('webpack-dev-server/client?http://localhost:2000');
// //   config.output.publicPath = 'http://localhost:2000/';
// //   config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
// //
// //   // Note: enabling React Transform and React Transform HMR:
// //   config.module.loaders[0].query.plugins.push([
// //     'react-transform', {
// //       transforms: [{
// //         transform : 'react-transform-hmr',
// //         imports   : ['react'],
// //         locals    : ['module']
// //       }]
// //     }
// //   ]);
// // }
//
// module.exports = config

var path = require('path')
var webpack = require('webpack')
// var publicPath = 'http://loaclhost:2000/'
var publicPath = __dirname

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'
var HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        // 'webpack-hot-middleware/client',
        // './src/index.js'
        index: ['./client/page1.js', hotMiddlewareScript],
        note: ['./client/page2.js', hotMiddlewareScript]
    },
    output: {
        path: path.resolve('./public'),
        filename: './[name]/bundle.js',
        publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel'
        }, {
            test: /\.scss/,
            loader: 'style!css!sass'
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        // new HtmlWebpackPlugin({
        //     title: 'index',
        //     filename: './server/views/index.ejs', //生成的html存放路径，相对于path
        //     template: './src/template/template.html', //html模板路径
        //     inject: 'body', //js插入的位置，true/'head'/'body'/false
        //     hash: true, //为静态资源生成hash值
        //     minify: { //压缩HTML文件
        //         removeComments: true, //移除HTML中的注释
        //         collapseWhitespace: false //删除空白符与换行符
        //     }
        // })
    ]
}

//多文件入口，html模版生成
for (var name in config.entry) {
    if (name !== 'lib') {
        config.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            title: name,
            // chunks: ['lib', name], //需要引入的chunk，不配置就会引入所有页面的资源
           filename: './server/views/' + name + '.ejs', //生成的html存放路径，相对于path
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
