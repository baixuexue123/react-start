var path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'app/main.js'),
  output:{
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  }

  module:{
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel', // 在webpack的module部分的loaders里进行配置即可
      },

      {
        test: /\.css$/,
        loader: 'style!css'// 添加对样式表的处理, 感叹号的作用在于使同一文件能够使用不同类型的loader
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright Flying Unicorns inc.")//在这个数组中new一个就可以了
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
