const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'index.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-es2015']
                }
            }
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
            test:  /\.(css|less)$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                { loader: 'less-loader' }
            ]
        }
    ]
  },
    mode:"production"
};

module.exports = config;
