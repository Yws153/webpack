var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  
  devServer: {
      inline: true,
      port: 3000
   },

  entry: {
    // index: [
    // 	'webpack-dev-server/client?http://localhost:3000',
    // 	'webpack/hot/only-dev-server',
    // 	'./src/hello.js'
    // ],
    main: ['./src/main.js']
    

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
      loader: 'babel-loader!jsx-loader?harmony'
    }]
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoErrorsPlugin()

  ]
};