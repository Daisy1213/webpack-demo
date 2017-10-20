module.exports = {
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + 'public.js', //打包后文件存放地方
        filename: 'bundle.js' //打包后的文件名
    }
}