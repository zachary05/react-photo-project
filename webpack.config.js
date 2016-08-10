var path = require("path");

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "build",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  entry: path.resolve(__dirname, 'app/app.js'),
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader:'babel',
        query:{
          presets:['es2015','react']
        }
      },
      {
        test:/\.(png|jpg|gif)$/,
        loader:'url-loader?limit=8192'
      },
      {
        test:/\.css$/,
        loader:'style!css'
      }
    ]
  }
}
