const path = require('path');

module.exports = {
  mode: 'production', // development production
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  target: 'node',
  externals: {
    chalk: 'commonjs2 chalk',
  },
};
