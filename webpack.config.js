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
        contentBase: "./dist",
        inline: true, // 实时刷新,
        hot: true,//热加载
        port: 3000
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
                    loader: "style-loader" //作用: 把css嵌入到js代码中
                    // 因为在js代码中引入了css，所以webpack会先解析css代码（css-loader）,
                    // 然后把解析后的代码嵌入到js中（style-loader）, Adds CSS to the DOM by injecting a <style> tag
                    // 如果想把css文件单独打成一个文件使用extract-text-webpack-plugin插件
                },{
                    loader: "css-loader", //支持使用@import url
                    options: {
                        modules: true
                    }  //使用css modules 解决相同类名造成的冲突问题
                },{
                    loader: "postcss-loader"
                }]
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
    ]
};