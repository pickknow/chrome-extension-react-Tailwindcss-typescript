const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    popup: path.join(__dirname, 'src/popup.tsx'),
    background: path.join(__dirname, 'src/background.ts'),
    content: path.join(__dirname, 'src/content.ts'),
    options: path.join(__dirname, 'src/options.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [ 
          'style-loader',
           'css-loader',        
           {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("tailwindcss"),
                  require("autoprefixer"),
                ],
              },
            },
          }, 
        ], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/popup.html'), // Create popup.html
      filename: 'popup.html',
      chunks: ['popup'], 
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/options.html', to: 'options.html' },
        { from: 'src/assets', to: 'assets' }, 
      ],
    }),
  ],
  devtool: 'source-map', 
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
};
