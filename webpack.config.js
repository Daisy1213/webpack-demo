module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js", //唯一入口文件
    output: {
        path: __dirname + "public.js", //打包后文件存放地方
        filename: "bundle.js" //打包后的文件名
    },

    devServer: {
        contentBase: "./public",
        inline: true // 实时刷新实现热加载
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, //符合该正则的文件都需要处理
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/  //屏蔽不需要处理的文件，node_modules文件夹中的不需要处理
            }
        ]
    }
};