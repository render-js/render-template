const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

module.exports = {
    entry: __dirname+"/.."+"/main.js",
    output:{
        path:__dirname+"/../deploy",
        filename:'[name].mini.js'
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
    optimization: {
        minimize: true,
        minimizer: [new ParallelUglifyPlugin({})]
    }
}