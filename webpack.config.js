const webpack = require('webpack')
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        filename: '[name].js',
        // path: __dirname + '/dist' // 服务环境下可以不写
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
            
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': '"development"'  // 生产环境   'production'是变量
        })
    ],
    devServer: {
        open: true,
        port: 9000,
        noInfo: true,
        inline: true
    }
}