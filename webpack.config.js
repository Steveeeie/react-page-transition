const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'demo/src/index.html'),
  filename: './index.html'
});

module.exports = {
  entry: path.join(__dirname, 'demo/src/index.js'),
  output: {
    path: path.join(__dirname, 'demo/dist'),
    filename: 'bundle.js',
    publicPath: '/react-page-transition/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: {
      errors: true,
      warnings: true
    },
    stats: {
      entrypoints: false,
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errorDetails: false,
      publicPath: false
    }
  }
};
