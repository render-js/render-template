import glob from "glob";

function getTemplateArray(pattern){
    let files =glob.sync(pattern)
    console.log(files);
}