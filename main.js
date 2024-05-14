import index from './plugin'
import {registerElements, RenderJS} from "render-core";

registerElements("onload",function (){
    let app = new RenderJS();

    app.use(index)

    app.run()
})