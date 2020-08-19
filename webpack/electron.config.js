const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: path.join(process.cwd(), 'app', 'electron.ts'),
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
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
}
