const path = require('path')
const Htmlplugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')


module.exports = {
  resolve : {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
        

      },
      {
        test:/\.s?css$/,
        use:[
        'vue-style-loader',
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jep?g|gif|webp)$/,
        use: 'file-loader'

      }

    ]  
  },
  plugins: [
    new Htmlplugin({
      template: './index.html', 
          
    }),
    new CopyPlugin({
      patterns: [{
        from: 'static'
      }]
    }),
    new VueLoaderPlugin()

  ],

  devServer: {
    host: 'localhost'
  }
}