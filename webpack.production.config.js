const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js", //唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后文件存放地方
        filename: "bundle-[hash].js" //打包后的文件名
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", //支持使用@import url
                        options: {
                            modules: true
                        }  //使用css modules 解决相同类名造成的冲突问题
                    }, {
                        loader: "postcss-loader"
                    }]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: 'images/[name]-[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'  //以该html为模板打包自动生成index.html文件
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(), //产品阶段对模块分配id
        new webpack.optimize.UglifyJsPlugin(), //产品阶段为了压缩js代码
        new ExtractTextPlugin('bundle-[hash].css'), //分离css和js文件
        new CleanWebpackPlugin(['dist'])
    ]
};