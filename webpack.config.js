const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js", //唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后文件存放地方
        filename: "bundle.js" //打包后的文件名
    },

    devServer: {
        contentBase: "./public",
        inline: true, // 实时刷新,
        hot: true //热加载
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, //符合该正则的文件都需要处理
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/  //屏蔽不需要处理的文件，node_modules文件夹中的不需要处理
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader", //支持使用@import url
                    options: {
                        modules: true
                    }  //使用css modules 解决相同类名造成的冲突问题
                },{
                    loader: "postcss-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'  //以该html为模板打包自动生成index.html文件
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ]
};