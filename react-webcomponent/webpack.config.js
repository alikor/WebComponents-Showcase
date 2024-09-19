const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',       // Add this line

  output: {
    filename: 'my-react-webcomponent.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};