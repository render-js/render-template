import {registerElement,RenderJS} from "render-core";
import {RenderCSS} from "render-ccs";

registerElement("onload",function (){
    let app = new RenderJS();

    app.use(new RenderCSS())

    app.run()
})