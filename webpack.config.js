// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Constant with our paths
const paths = {
  DOCS: path.resolve(__dirname, 'docs'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

const autoprefixerOptions = {
  browsers: [
    'last 3 version',
    'ie >= 10',
  ],
};

const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      minimize: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
    sourceMap: true,
    plugins: () => [
      autoprefixer(autoprefixerOptions),
    ],
    },
  },
  {
    loader: 'sass-loader',
    options: { sourceMap: true },
  },
];

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DOCS,
    filename: 'app.bundle.js'
  },

  devServer: {
    contentBase: paths.SRC,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        exclude: /ezA/,
        loader: ExtractTextPlugin.extract({
          use: sassLoaders,
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  // USE:
  // import MyComponent from './my-component';
  resolve: {
    extensions: ['.js'],
  },
};
