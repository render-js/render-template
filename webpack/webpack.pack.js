const {getTemplateArray} = require("./init");

module.exports = {
    entry: __dirname+"/.."+"/main.js",
    output:{
        path:"/opt/homebrew/var/www",
        filename:'script/[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'raw-loader',
            }
        ]
    },
    plugins:getTemplateArray("public/**/*.html"),
    devServer: {
        compress: true,
        port: 9090
    },
    watchOptions: {
        aggregateTimeout: 200
    }
}