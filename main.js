import index from './src/index'
import {RenderJS} from "render-core";

function main(){

    let app = new RenderJS();

    app.use(index)

    app.run()
}

window.onload = main;