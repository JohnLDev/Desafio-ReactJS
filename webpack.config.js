const path = require("path")

module.exports = {
  entry: path.resolve(__dirname,"src","index.js"),
  output:{
    path:path.resolve(__dirname,"public"),
    filename: "bundle.js"
  },
  devServer:{
    contentBase: path.resolve(__dirname,"public"), //servidor irá por no ar somente arquivos publicos
  },
  module:{
    rules:[
      {
        test: /\.js$/, //significa que a string tem que terminar com js
        exclude: /node_modules/,
        use: {
          loader:"babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'}
      ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use:{
          loader:'file-loader',
        }
      }
    ]
  }
}

