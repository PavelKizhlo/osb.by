const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
    clean: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/admin-css'),
          to: path.resolve(__dirname, './public/styles/admin'),
        },
        {
          from: path.resolve(__dirname, './src/admin-js'),
          to: path.resolve(__dirname, './public/js'),
          info: { minimized: true },
        },
      ],
    }),
  ],
};
