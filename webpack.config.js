const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
  ],
};
