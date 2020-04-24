const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
