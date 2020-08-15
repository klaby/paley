const { join, resolve } = require('path')

const rootDir = join(__dirname, '..')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: join(rootDir, 'electron', 'main.ts'),
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: resolve(rootDir, 'dist'),
    filename: '[name].js',
  },
}
