import path from 'path'
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      //query: {
      //  presets: ['es2015', 'react']
      //}
    }, 
    //{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel?stage=0&optional=runtime&plugins=typecheck']},
    { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
    //{ test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    { test: /\.json$/, loader: 'json-loader'},
    //{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240'}

    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    // root:[],
    extensions: ['', '.js', '.jsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ],
  externals: []
}
