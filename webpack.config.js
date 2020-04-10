const path = require('path')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  target: 'webworker',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  entry: glob.sync('./src/*/')
    .reduce((accumulator, value) =>
      ({ ...accumulator, [value.slice(0, -1).split('/').pop()]: value }), {}),
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
