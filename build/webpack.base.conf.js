var path = require('path')
var config = require('../config')
var utils = require('./utils')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'api': path.resolve(__dirname, '../src/api'),
      'constants': path.resolve(__dirname, '../src/constants'),
      'router': path.resolve(__dirname, '../src/router'),
      'store': path.resolve(__dirname, '../src/store'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'errors': path.resolve(__dirname, '../src/errors'),
      'common': path.resolve(__dirname, '../src/modules/common'),
      'auth': path.resolve(__dirname, '../src/modules/auth'),
      'error': path.resolve(__dirname, '../src/modules/error'),
      'message': path.resolve(__dirname, '../src/modules/message'),
      'filters': path.resolve(__dirname, '../src/filters'),
      'article': path.resolve(__dirname, '../src/modules/article'),
      'dt': path.resolve(__dirname, '../src/modules/dt'),
      'series': path.resolve(__dirname, '../src/modules/series'),
      'tag': path.resolve(__dirname, '../src/modules/tag'),
      'category': path.resolve(__dirname, '../src/modules/category')

    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: [path.resolve(__dirname, '../../appi/'), path.resolve(__dirname, '../../vb/'), path.resolve(__dirname, '../')],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: [path.resolve(__dirname, '../../appi/'), path.resolve(__dirname, '../../vb/'), path.resolve(__dirname, '../')],
        exclude: /node_modules/
      }
    ],
    loaders: [
        {
            test: /\.vue$/,
            loader: 'vue',
        },
        {
            test: /\.js$/,
            loader: 'babel',
            include: [path.resolve(__dirname, '../../appi/'), path.resolve(__dirname, '../../vb/'), path.resolve(__dirname, '../')],
            exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          loaders: ['style', 'css', 'stylus']
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.(scss|sass)$/,
            loaders: ["style", "css", "sass"]
        },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]?[hash:7]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]?[hash:7]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
