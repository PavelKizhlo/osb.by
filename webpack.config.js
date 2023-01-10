const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/js/main.js'),
    path.resolve(__dirname, './src/sass/styles.sass'),
  ],
  mode: 'production',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: './js/script.js',
    path: path.resolve(__dirname, './public'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/style.css',
    }),
  ],
};
