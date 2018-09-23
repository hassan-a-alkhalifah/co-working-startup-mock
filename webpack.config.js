const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {

    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },

      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

    ]
  },

 plugins: [
   new HtmlWebpackPlugin({
    inject: 'body',
    template: './src/index.html',
    filename: 'index.html',
    minify: {
      removeComment: true,
      collapseWhitespace: true
    }
  }),

  new HtmlWebpackPlugin({
    template: './src/compare-plan.html',
    filename: 'compare-plan.html',
    minify: {
      removeComment: true,
      collapseWhitespace: true
    }
  }),

  new HtmlWebpackPlugin({
    template: './src/meeting-room.html',
    filename: 'meeting-room.html',
    minify: {
      removeComment: true,
      collapseWhitespace: true
    }
  }),

  new UglifyJsPlugin(),

  new CleanWebpackPlugin(['dist'])

 ]

};
