const path = require('path');

const entryPoint = path.resolve(__dirname, 'client', 'src', 'index.js') // add own path
const outputPoint = path.resolve(__dirname, 'client', 'dist') // add own path

module.exports = {
  entry: entryPoint,
  output: {
    path: outputPoint,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
};