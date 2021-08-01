var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {test : /\.css|scss$/, use:['style-loader', 'css-loader', 'sass-loader']},            
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader"},
        ]
    },
    mode:'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
      },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ],
}
