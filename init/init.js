const glob = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const os = require("os");

function getTemplateArray(pattern){
    let template = [];

    let files =glob.sync(pattern)

    for (let i=0;i<files.length;i++){

        template.push(new HtmlWebpackPlugin({
            template: files[i].replace("/",path.sep),
            chunks: "all",
            hash: true,
            favicon: './public/img/favicon.ico',
            inject: "head",
            filename: files[i].replace("/",path.sep).substring(7)
        }))
    }

    return template;
}

module.exports.getTemplateArray = getTemplateArray;