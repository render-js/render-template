const {getTemplateArray} = require("./init/init");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: __dirname+"/main.js",
    output:{
        path:__dirname+"/dist",
        filename:'script/[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'raw-loader',
            },
            {
                test: /\.txt$/i,
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
        aggregateTimeout: 200,
        ignored: "/node_modules"
    }
}