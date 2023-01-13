const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.s?css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/user': {
        target: 'http://localhost:3000',
      }
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './src/main.html'
    })
  ]
}